// Code d'accès aux profils.
//
// C'est une protection *légère* (jeu sans données personnelles). Le code n'est
// jamais stocké ni vérifié dans le navigateur : il est envoyé au serveur (en
// HTTPS), qui le hache (password_hash) et le vérifie. Ce module ne fait plus
// que de la validation de saisie.

export const PIN_MIN = 2
export const PIN_MAX = 10

/** Renvoie un message d'erreur si le PIN est invalide, sinon null. */
export function validatePin(pin: string): string | null {
  if (!/^\d+$/.test(pin)) return 'Le code ne doit contenir que des chiffres.'
  if (pin.length < PIN_MIN) return `Au moins ${PIN_MIN} chiffres, je vous prie.`
  if (pin.length > PIN_MAX) return `${PIN_MAX} chiffres maximum.`
  return null
}
