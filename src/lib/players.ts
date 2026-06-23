import type { AttemptResult, Player } from '../types'
import { modules } from '../content/modules'

// La persistance vit désormais côté serveur (voir api.ts + /api/index.php).
// Ce module ne garde que des fonctions *pures* : validation, calcul du
// classement, et fusion d'un résultat de quiz dans un joueur (utilisée pour la
// mise à jour optimiste de l'écran ; le serveur applique la même logique).

// ---------------------------------------------------------------------------
// Pseudo / uniqueness
// ---------------------------------------------------------------------------

/** Normalise un pseudo pour la comparaison d'unicité (insensible à la casse/accents). */
export function normalizePseudo(pseudo: string): string {
  return pseudo
    .trim()
    .toLocaleLowerCase('fr')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
}

export function isPseudoTaken(pseudo: string, players: Player[]): boolean {
  const norm = normalizePseudo(pseudo)
  return players.some((p) => normalizePseudo(p.pseudo) === norm)
}

/** Comme isPseudoTaken, mais en ignorant un joueur donné (utile au renommage). */
export function pseudoTakenByOther(
  pseudo: string,
  id: string,
  players: Player[],
): boolean {
  const norm = normalizePseudo(pseudo)
  return players.some((p) => p.id !== id && normalizePseudo(p.pseudo) === norm)
}

/** Renvoie un message d'erreur si le pseudo est invalide, sinon null. */
export function validatePseudo(pseudo: string): string | null {
  const trimmed = pseudo.trim()
  if (trimmed.length < 2) return 'Au moins 2 caractères, je vous prie.'
  if (trimmed.length > 24) return '24 caractères maximum.'
  if (!/^[\p{L}\p{N} '._-]+$/u.test(trimmed))
    return 'Lettres, chiffres et espaces uniquement.'
  return null
}

// ---------------------------------------------------------------------------
// Fusion d'un résultat (pure) — miroir de la logique serveur
// ---------------------------------------------------------------------------

/** Renvoie une copie du joueur avec le résultat de module intégré. */
export function applyModuleResult(
  player: Player,
  moduleId: string,
  result: AttemptResult,
): Player {
  const prev = player.modules[moduleId]
  return {
    ...player,
    modules: {
      ...player.modules,
      [moduleId]: {
        bestScore: Math.max(prev?.bestScore ?? 0, result.score),
        passed: (prev?.passed ?? false) || result.passed,
        attempts: (prev?.attempts ?? 0) + 1,
        lastResult: result,
      },
    },
  }
}

/** Renvoie une copie du joueur avec le résultat d'examen final intégré. */
export function applyFinalResult(player: Player, result: AttemptResult): Player {
  const wasCertified = player.final.passed
  return {
    ...player,
    final: {
      bestScore: Math.max(player.final.bestScore, result.score),
      passed: wasCertified || result.passed,
      attempts: player.final.attempts + 1,
      certifiedAt: player.final.certifiedAt ?? (result.passed ? result.at : undefined),
      lastResult: result,
    },
  }
}

// ---------------------------------------------------------------------------
// Progress helpers (pure)
// ---------------------------------------------------------------------------

export const TOTAL_MODULES = modules.length

export function modulesPassed(player: Player): number {
  return modules.filter((m) => player.modules[m.id]?.passed).length
}

export function allModulesPassed(player: Player): boolean {
  return modules.every((m) => player.modules[m.id]?.passed)
}

/** Le test final est-il déverrouillé ? */
export function isFinalUnlocked(player: Player): boolean {
  return allModulesPassed(player)
}

export function isCertified(player: Player): boolean {
  return player.final.passed
}

/** Titre honorifique du joueur, selon sa progression. */
export function playerTitle(player: Player): string {
  if (isCertified(player)) return 'Gentleman Certifié'
  if (allModulesPassed(player)) return 'Aspirant Gentleman'
  if (modulesPassed(player) > 0) return 'Apprenti'
  return 'Novice'
}

/** Score de classement : récompense modules validés, score, et certification. */
export function rankingPoints(player: Player): number {
  const moduleScore = modules.reduce(
    (sum, m) => sum + Math.round((player.modules[m.id]?.bestScore ?? 0) * 100),
    0,
  )
  const finalScore = Math.round(player.final.bestScore * 100)
  const certifiedBonus = isCertified(player) ? 200 : 0
  return moduleScore + finalScore + certifiedBonus
}

export interface RankedPlayer {
  player: Player
  points: number
  title: string
  modulesPassed: number
  certified: boolean
  rank: number
}

/** Classement de tous les joueurs, du meilleur au moins avancé. */
export function ranking(players: Player[]): RankedPlayer[] {
  return players
    .map((player) => ({
      player,
      points: rankingPoints(player),
      title: playerTitle(player),
      modulesPassed: modulesPassed(player),
      certified: isCertified(player),
      rank: 0,
    }))
    .sort((a, b) => b.points - a.points || a.player.createdAt - b.player.createdAt)
    .map((entry, i) => ({ ...entry, rank: i + 1 }))
}
