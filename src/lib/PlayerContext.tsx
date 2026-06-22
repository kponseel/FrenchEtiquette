import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { AttemptResult, Player } from '../types'
import { readSession, removeSession, writeSession } from './storage'
import {
  createPlayer,
  isPseudoTaken,
  loadPlayers,
  normalizePseudo,
  recordFinalResult,
  recordModuleResult,
  validatePseudo,
} from './players'
import { hashPin, validatePin } from './pin'

const CURRENT_KEY = 'currentPlayerId'

interface LoginResult {
  ok: boolean
  error?: string
}

interface CreateResult extends LoginResult {
  id?: string
}

interface PlayerContextValue {
  player: Player | null
  players: Player[]
  /** Crée un profil (pseudo unique + code PIN) sans encore l'ouvrir. */
  createProfile: (pseudo: string, pin: string) => Promise<CreateResult>
  /** Ouvre un profil existant après vérification du code PIN. */
  loginExisting: (id: string, pin: string) => Promise<LoginResult>
  /** Verrouille la session (retour à l'écran d'accès). */
  logout: () => void
  saveModuleResult: (moduleId: string, result: AttemptResult) => void
  saveFinalResult: (result: AttemptResult) => void
}

const PlayerContext = createContext<PlayerContextValue | null>(null)

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [players, setPlayers] = useState<Player[]>(() => loadPlayers())
  // L'id courant vit dans sessionStorage : il survit à un rechargement de page
  // pendant la session, mais pas à la fermeture de l'app → le code PIN est
  // redemandé à chaque nouvelle ouverture.
  const [currentId, setCurrentId] = useState<string | null>(() =>
    readSession<string | null>(CURRENT_KEY, null),
  )

  const player = useMemo(
    () => players.find((p) => p.id === currentId) ?? null,
    [players, currentId],
  )

  const openPlayer = useCallback((id: string) => {
    setCurrentId(id)
    writeSession(CURRENT_KEY, id)
  }, [])

  const createProfile = useCallback(
    async (pseudo: string, pin: string): Promise<CreateResult> => {
      const invalidPseudo = validatePseudo(pseudo)
      if (invalidPseudo) return { ok: false, error: invalidPseudo }
      if (isPseudoTaken(pseudo)) return { ok: false, error: 'Ce nom est déjà pris.' }
      const invalidPin = validatePin(pin)
      if (invalidPin) return { ok: false, error: invalidPin }

      const pinHash = await hashPin(normalizePseudo(pseudo), pin)
      const created = createPlayer(pseudo, pinHash)
      setPlayers(loadPlayers())
      return { ok: true, id: created.id }
    },
    [],
  )

  const loginExisting = useCallback(
    async (id: string, pin: string): Promise<LoginResult> => {
      const target = players.find((p) => p.id === id)
      if (!target) return { ok: false, error: 'Profil introuvable.' }
      // Profil hérité sans code : accès direct.
      if (target.pinHash) {
        const invalidPin = validatePin(pin)
        if (invalidPin) return { ok: false, error: invalidPin }
        const attempt = await hashPin(normalizePseudo(target.pseudo), pin)
        if (attempt !== target.pinHash) return { ok: false, error: 'Code incorrect.' }
      }
      openPlayer(id)
      return { ok: true }
    },
    [players, openPlayer],
  )

  const logout = useCallback(() => {
    setCurrentId(null)
    removeSession(CURRENT_KEY)
  }, [])

  const saveModuleResult = useCallback(
    (moduleId: string, result: AttemptResult) => {
      if (!currentId) return
      setPlayers(recordModuleResult(currentId, moduleId, result))
    },
    [currentId],
  )

  const saveFinalResult = useCallback(
    (result: AttemptResult) => {
      if (!currentId) return
      setPlayers(recordFinalResult(currentId, result))
    },
    [currentId],
  )

  const value = useMemo<PlayerContextValue>(
    () => ({
      player,
      players,
      createProfile,
      loginExisting,
      logout,
      saveModuleResult,
      saveFinalResult,
    }),
    [player, players, createProfile, loginExisting, logout, saveModuleResult, saveFinalResult],
  )

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export function usePlayer(): PlayerContextValue {
  const ctx = useContext(PlayerContext)
  if (!ctx) throw new Error('usePlayer must be used within a PlayerProvider')
  return ctx
}
