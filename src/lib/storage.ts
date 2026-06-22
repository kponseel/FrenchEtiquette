// Thin, swappable persistence layer.
//
// Everything goes through here, so replacing localStorage with a real backend
// later (REST, Supabase, Firebase…) means rewriting only this file + players.ts.

const PREFIX = 'letiquette:v1:'

export function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    if (raw == null) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function write<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value))
  } catch {
    // Storage full or unavailable — fail silently; the app stays usable in-session.
  }
}

export function remove(key: string): void {
  try {
    localStorage.removeItem(PREFIX + key)
  } catch {
    /* ignore */
  }
}
