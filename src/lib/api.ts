// Client de l'API L'Étiquette (backend PHP + SQLite, voir /api/index.php).
//
// Tout passe par une seule URL en POST JSON { action, ... }. En production
// (app + API sur etiquette.estim.pro) la base « /api/ » convient : même
// origine, pas de CORS. Surchargeable via VITE_API_BASE (build GitHub Pages).

import type { AttemptResult, Player } from '../types'

const BASE = (import.meta.env.VITE_API_BASE as string | undefined) ?? '/api/'

export class ApiError extends Error {
  status: number
  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function call<T>(
  action: string,
  payload: Record<string, unknown> = {},
): Promise<T> {
  let res: Response
  try {
    res = await fetch(BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...payload }),
    })
  } catch {
    // Réseau coupé, serveur injoignable, CORS bloqué…
    throw new ApiError('Connexion au serveur impossible.', 0)
  }

  let data: unknown = null
  try {
    data = await res.json()
  } catch {
    /* réponse vide ou non-JSON */
  }

  if (!res.ok) {
    const message =
      (data as { error?: string } | null)?.error ?? 'Erreur du serveur.'
    throw new ApiError(message, res.status)
  }
  return data as T
}

interface ListResponse {
  players: Player[]
}
interface MeResponse {
  player: Player
}
interface MutationResponse {
  player: Player
  players: Player[]
}
interface LoginResponse extends MutationResponse {
  token: string
}

export const api = {
  /** Liste publique des joueurs (classement). */
  list: () => call<ListResponse>('list'),
  /** Profil correspondant au jeton de session. */
  me: (token: string) => call<MeResponse>('me', { token }),
  /** Crée un profil (n'ouvre pas la session). */
  register: (pseudo: string, pin: string) =>
    call<MutationResponse>('register', { pseudo, pin }),
  /** Ouvre une session et renvoie un jeton. */
  login: (id: string, pin: string) => call<LoginResponse>('login', { id, pin }),
  rename: (token: string, pseudo: string) =>
    call<MutationResponse>('rename', { token, pseudo }),
  setPin: (token: string, pin: string) =>
    call<MutationResponse>('setPin', { token, pin }),
  progressModule: (token: string, moduleId: string, result: AttemptResult) =>
    call<MutationResponse>('progressModule', { token, moduleId, result }),
  progressFinal: (token: string, result: AttemptResult) =>
    call<MutationResponse>('progressFinal', { token, result }),
  sendPin: (email: string, pseudo: string, pin: string) =>
    call<{ ok: boolean }>('sendPin', { email, pseudo, pin }),
  logout: (token: string) => call<{ ok: boolean }>('logout', { token }),
}
