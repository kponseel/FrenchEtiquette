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
  newPlayerId,
  normalizePseudo,
  pseudoTakenByOther,
  recordFinalResult,
  recordModuleResult,
  setPlayerPinHash,
  setPlayerPseudo,
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
  /** Renomme le profil courant (pseudo unique). */
  renameProfile: (newPseudo: string) => Promise<LoginResult>
  /** Change le code PIN du profil courant. */
  changePin: (newPin: string) => Promise<LoginResult>
  /** Verrouille la session (retour à l'écran d'accès). */
  logout: () => void
  saveModuleResult: (moduleId: string, result: AttemptResult) => void
  saveFinalResult: (result: AttemptResult) => void
}

const PlayerContext = createContext<PlayerContextValue | null>(null)

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [players, setPlayers] = useState<Player[]>(() => loadPlayers())
  // L'id courant est persisté (localStorage) : on reste connecté d'une session
  // à l'autre. Le code PIN n'est redemandé que pour ouvrir un autre profil ou
  // après un verrouillage explicite (« Verrouiller & changer de profil »).
  const [currentId, setCurrentId] = useState<string | null>(() =>
    read<string | null>(CURRENT_KEY, null),
  )

  const player = useMemo(
    () => players.find((p) => p.id === currentId) ?? null,
    [players, currentId],
  )

  const openPlayer = useCallback((id: string) => {
    setCurrentId(id)
    write(CURRENT_KEY, id)
  }, [])

  const createProfile = useCallback(
    async (pseudo: string, pin: string): Promise<CreateResult> => {
      const invalidPseudo = validatePseudo(pseudo)
      if (invalidPseudo) return { ok: false, error: invalidPseudo }
      if (isPseudoTaken(pseudo)) return { ok: false, error: 'Ce nom est déjà pris.' }
      const invalidPin = validatePin(pin)
      if (invalidPin) return { ok: false, error: invalidPin }

      const id = newPlayerId()
      const pinHash = await hashPin(id, pin)
      const created = createPlayer(id, pseudo, pinHash)
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
        const idHash = await hashPin(target.id, pin)
        let ok = idHash === target.pinHash
        if (!ok) {
          // Compat : anciens codes salés par le pseudo → migration vers l'id.
          const legacy = await hashPin(normalizePseudo(target.pseudo), pin)
          if (legacy === target.pinHash) {
            setPlayers(setPlayerPinHash(target.id, idHash))
            ok = true
          }
        }
        if (!ok) return { ok: false, error: 'Code incorrect.' }
      }
      openPlayer(id)
      return { ok: true }
    },
    [players, openPlayer],
  )

  const renameProfile = useCallback(
    async (newPseudo: string): Promise<LoginResult> => {
      if (!currentId) return { ok: false, error: 'Aucun profil ouvert.' }
      const invalid = validatePseudo(newPseudo)
      if (invalid) return { ok: false, error: invalid }
      if (pseudoTakenByOther(newPseudo, currentId))
        return { ok: false, error: 'Ce nom est déjà pris.' }
      setPlayers(setPlayerPseudo(currentId, newPseudo))
      return { ok: true }
    },
    [currentId],
  )

  const changePin = useCallback(
    async (newPin: string): Promise<LoginResult> => {
      if (!currentId) return { ok: false, error: 'Aucun profil ouvert.' }
      const invalid = validatePin(newPin)
      if (invalid) return { ok: false, error: invalid }
      const pinHash = await hashPin(currentId, newPin)
      setPlayers(setPlayerPinHash(currentId, pinHash))
      return { ok: true }
    },
    [currentId],
  )

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
    () => ({
      player,
      players,
      createProfile,
      loginExisting,
      renameProfile,
      changePin,
      logout,
      saveModuleResult,
      saveFinalResult,
    }),
    [
      player,
      players,
      createProfile,
      loginExisting,
      renameProfile,
      changePin,
      logout,
      saveModuleResult,
      saveFinalResult,
    ],
  )

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export function usePlayer(): PlayerContextValue {
  const ctx = useContext(PlayerContext)
  if (!ctx) throw new Error('usePlayer must be used within a PlayerProvider')
  return ctx
}
