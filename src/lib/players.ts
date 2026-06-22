import type { AttemptResult, Player } from '../types'
import { modules } from '../content/modules'
import { read, write } from './storage'

const PLAYERS_KEY = 'players'

// ---------------------------------------------------------------------------
// Persistence
// ---------------------------------------------------------------------------

export function loadPlayers(): Player[] {
  return read<Player[]>(PLAYERS_KEY, [])
}

export function savePlayers(players: Player[]): void {
  write(PLAYERS_KEY, players)
}

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

export function isPseudoTaken(pseudo: string, players = loadPlayers()): boolean {
  const norm = normalizePseudo(pseudo)
  return players.some((p) => normalizePseudo(p.pseudo) === norm)
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

function freshPlayer(pseudo: string): Player {
  return {
    id:
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : `p_${Date.now()}_${Math.random().toString(36).slice(2)}`,
    pseudo: pseudo.trim(),
    createdAt: Date.now(),
    modules: {},
    final: { bestScore: 0, passed: false, attempts: 0 },
  }
}

/** Crée et persiste un nouveau joueur. Le contrôle d'unicité doit être fait en amont. */
export function createPlayer(pseudo: string): Player {
  const players = loadPlayers()
  const player = freshPlayer(pseudo)
  savePlayers([...players, player])
  return player
}

// ---------------------------------------------------------------------------
// Recording results
// ---------------------------------------------------------------------------

export function recordModuleResult(
  playerId: string,
  moduleId: string,
  result: AttemptResult,
): Player[] {
  const players = loadPlayers()
  const next = players.map((p) => {
    if (p.id !== playerId) return p
    const prev = p.modules[moduleId]
    return {
      ...p,
      modules: {
        ...p.modules,
        [moduleId]: {
          bestScore: Math.max(prev?.bestScore ?? 0, result.score),
          passed: (prev?.passed ?? false) || result.passed,
          attempts: (prev?.attempts ?? 0) + 1,
          lastResult: result,
        },
      },
    }
  })
  savePlayers(next)
  return next
}

export function recordFinalResult(playerId: string, result: AttemptResult): Player[] {
  const players = loadPlayers()
  const next = players.map((p) => {
    if (p.id !== playerId) return p
    const wasCertified = p.final.passed
    return {
      ...p,
      final: {
        bestScore: Math.max(p.final.bestScore, result.score),
        passed: wasCertified || result.passed,
        attempts: p.final.attempts + 1,
        certifiedAt:
          p.final.certifiedAt ?? (result.passed ? result.at : undefined),
        lastResult: result,
      },
    }
  })
  savePlayers(next)
  return next
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
export function ranking(players = loadPlayers()): RankedPlayer[] {
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
