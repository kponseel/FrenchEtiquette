// Code PIN d'accès aux profils.
//
// C'est une protection *légère* (jeu sans données personnelles) : un PIN court
// reste trivialement attaquable. On évite simplement de stocker le code en clair
// en n'enregistrant qu'un hachage SHA-256 salé par le pseudo.

export const PIN_MIN = 2
export const PIN_MAX = 10

/** Renvoie un message d'erreur si le PIN est invalide, sinon null. */
export function validatePin(pin: string): string | null {
  if (!/^\d+$/.test(pin)) return 'Le code ne doit contenir que des chiffres.'
  if (pin.length < PIN_MIN) return `Au moins ${PIN_MIN} chiffres, je vous prie.`
  if (pin.length > PIN_MAX) return `${PIN_MAX} chiffres maximum.`
  return null
}

/** Hachage SHA-256 du PIN, salé par `salt` (le pseudo normalisé) → chaîne hex. */
export async function hashPin(salt: string, pin: string): Promise<string> {
  const data = new TextEncoder().encode(`${salt}:${pin}`)
  const digest = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}
