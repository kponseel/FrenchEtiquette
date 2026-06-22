import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { AttemptResult, Player } from '../types'
import { read, remove, write } from './storage'
import {
  createPlayer,
  isPseudoTaken,
  loadPlayers,
  recordFinalResult,
  recordModuleResult,
  validatePseudo,
} from './players'

const CURRENT_KEY = 'currentPlayerId'

interface LoginResult {
  ok: boolean
  error?: string
}

interface PlayerContextValue {
  player: Player | null
  players: Player[]
  /** Crée un nouveau profil après contrôle d'unicité du pseudo. */
  loginNew: (pseudo: string) => LoginResult
  /** Reprend une session existante sur cet appareil. */
  resume: (id: string) => void
  logout: () => void
  saveModuleResult: (moduleId: string, result: AttemptResult) => void
  saveFinalResult: (result: AttemptResult) => void
}

const PlayerContext = createContext<PlayerContextValue | null>(null)

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [players, setPlayers] = useState<Player[]>(() => loadPlayers())
  const [currentId, setCurrentId] = useState<string | null>(() =>
    read<string | null>(CURRENT_KEY, null),
  )

  const player = useMemo(
    () => players.find((p) => p.id === currentId) ?? null,
    [players, currentId],
  )

  const loginNew = useCallback((pseudo: string): LoginResult => {
    const invalid = validatePseudo(pseudo)
    if (invalid) return { ok: false, error: invalid }
    if (isPseudoTaken(pseudo)) return { ok: false, error: 'Ce pseudo est déjà pris.' }

    const created = createPlayer(pseudo)
    setPlayers(loadPlayers())
    setCurrentId(created.id)
    write(CURRENT_KEY, created.id)
    return { ok: true }
  }, [])

  const resume = useCallback((id: string) => {
    setCurrentId(id)
    write(CURRENT_KEY, id)
  }, [])

  const logout = useCallback(() => {
    setCurrentId(null)
    remove(CURRENT_KEY)
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
    () => ({ player, players, loginNew, resume, logout, saveModuleResult, saveFinalResult }),
    [player, players, loginNew, resume, logout, saveModuleResult, saveFinalResult],
  )

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export function usePlayer(): PlayerContextValue {
  const ctx = useContext(PlayerContext)
  if (!ctx) throw new Error('usePlayer must be used within a PlayerProvider')
  return ctx
}
