import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { AttemptResult, Player } from '../types'
import { read, remove, write } from './storage'
import {
  applyFinalResult,
  applyModuleResult,
  isPseudoTaken,
  pseudoTakenByOther,
  validatePseudo,
} from './players'
import { validatePin } from './pin'
import { ApiError, api } from './api'

// Jeton de session (renvoyé par le serveur à la connexion). Persisté localement
// pour rester connecté d'une visite à l'autre ; le code n'est jamais stocké.
const TOKEN_KEY = 'token'

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
  /** Faux tant que le premier chargement (liste + reprise de session) n'est pas fini. */
  ready: boolean
  /** Renseigné si le serveur est injoignable au démarrage. */
  loadError: string | null
  /** Crée un profil (pseudo unique + code) sans encore l'ouvrir. */
  createProfile: (pseudo: string, pin: string) => Promise<CreateResult>
  /** Ouvre un profil existant après vérification du code. */
  loginExisting: (id: string, pin: string) => Promise<LoginResult>
  /** Renomme le profil courant (pseudo unique). */
  renameProfile: (newPseudo: string) => Promise<LoginResult>
  /** Change le code du profil courant. */
  changePin: (newPin: string) => Promise<LoginResult>
  /** Verrouille la session (retour à l'écran d'accès). */
  logout: () => void
  saveModuleResult: (moduleId: string, result: AttemptResult) => void
  saveFinalResult: (result: AttemptResult) => void
}

const PlayerContext = createContext<PlayerContextValue | null>(null)

function describe(e: unknown): string {
  return e instanceof ApiError ? e.message : 'Une erreur est survenue. Réessayez.'
}

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [players, setPlayers] = useState<Player[]>([])
  const [player, setPlayer] = useState<Player | null>(null)
  const [token, setToken] = useState<string | null>(() =>
    read<string | null>(TOKEN_KEY, null),
  )
  const [ready, setReady] = useState(false)
  const [loadError, setLoadError] = useState<string | null>(null)

  // Chargement initial : classement public + reprise de session via le jeton.
  useEffect(() => {
    let cancelled = false
    void (async () => {
      try {
        const { players: list } = await api.list()
        if (!cancelled) {
          setPlayers(list)
          setLoadError(null)
        }
      } catch (e) {
        if (!cancelled) setLoadError(describe(e))
      }

      const tok = read<string | null>(TOKEN_KEY, null)
      if (tok) {
        try {
          const { player: me } = await api.me(tok)
          if (!cancelled) setPlayer(me)
        } catch {
          // Jeton invalide/expiré → on oublie la session en silence.
          if (!cancelled) {
            remove(TOKEN_KEY)
            setToken(null)
          }
        }
      }
      if (!cancelled) setReady(true)
    })()
    return () => {
      cancelled = true
    }
  }, [])

  const openSession = useCallback((tok: string, me: Player, list: Player[]) => {
    setToken(tok)
    write(TOKEN_KEY, tok)
    setPlayer(me)
    setPlayers(list)
  }, [])

  const createProfile = useCallback(
    async (pseudo: string, pin: string): Promise<CreateResult> => {
      const invalidPseudo = validatePseudo(pseudo)
      if (invalidPseudo) return { ok: false, error: invalidPseudo }
      if (isPseudoTaken(pseudo, players))
        return { ok: false, error: 'Ce nom est déjà pris.' }
      const invalidPin = validatePin(pin)
      if (invalidPin) return { ok: false, error: invalidPin }

      try {
        const { player: created, players: list } = await api.register(pseudo, pin)
        setPlayers(list)
        return { ok: true, id: created.id }
      } catch (e) {
        return { ok: false, error: describe(e) }
      }
    },
    [players],
  )

  const loginExisting = useCallback(
    async (id: string, pin: string): Promise<LoginResult> => {
      const invalidPin = validatePin(pin)
      if (invalidPin) return { ok: false, error: invalidPin }
      try {
        const { token: tok, player: me, players: list } = await api.login(id, pin)
        openSession(tok, me, list)
        return { ok: true }
      } catch (e) {
        return { ok: false, error: describe(e) }
      }
    },
    [openSession],
  )

  const renameProfile = useCallback(
    async (newPseudo: string): Promise<LoginResult> => {
      if (!token || !player) return { ok: false, error: 'Aucun profil ouvert.' }
      const invalid = validatePseudo(newPseudo)
      if (invalid) return { ok: false, error: invalid }
      if (pseudoTakenByOther(newPseudo, player.id, players))
        return { ok: false, error: 'Ce nom est déjà pris.' }
      try {
        const { player: me, players: list } = await api.rename(token, newPseudo)
        setPlayer(me)
        setPlayers(list)
        return { ok: true }
      } catch (e) {
        return { ok: false, error: describe(e) }
      }
    },
    [token, player, players],
  )

  const changePin = useCallback(
    async (newPin: string): Promise<LoginResult> => {
      if (!token) return { ok: false, error: 'Aucun profil ouvert.' }
      const invalid = validatePin(newPin)
      if (invalid) return { ok: false, error: invalid }
      try {
        const { player: me, players: list } = await api.setPin(token, newPin)
        setPlayer(me)
        setPlayers(list)
        return { ok: true }
      } catch (e) {
        return { ok: false, error: describe(e) }
      }
    },
    [token],
  )

  const logout = useCallback(() => {
    const tok = token
    setPlayer(null)
    setToken(null)
    remove(TOKEN_KEY)
    if (tok) void api.logout(tok).catch(() => {})
  }, [token])

  // Écriture optimiste : l'écran se met à jour immédiatement (même logique que
  // le serveur), puis on persiste et on réconcilie avec la réponse serveur.
  const patchLocal = useCallback((next: Player) => {
    setPlayer(next)
    setPlayers((list) => list.map((p) => (p.id === next.id ? next : p)))
  }, [])

  const saveModuleResult = useCallback(
    (moduleId: string, result: AttemptResult) => {
      if (!token || !player) return
      patchLocal(applyModuleResult(player, moduleId, result))
      void api
        .progressModule(token, moduleId, result)
        .then(({ player: me, players: list }) => {
          setPlayer(me)
          setPlayers(list)
        })
        .catch(() => {
          /* hors-ligne : on garde la mise à jour optimiste, non persistée */
        })
    },
    [token, player, patchLocal],
  )

  const saveFinalResult = useCallback(
    (result: AttemptResult) => {
      if (!token || !player) return
      patchLocal(applyFinalResult(player, result))
      void api
        .progressFinal(token, result)
        .then(({ player: me, players: list }) => {
          setPlayer(me)
          setPlayers(list)
        })
        .catch(() => {})
    },
    [token, player, patchLocal],
  )

  const value = useMemo<PlayerContextValue>(
    () => ({
      player,
      players,
      ready,
      loadError,
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
      ready,
      loadError,
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
