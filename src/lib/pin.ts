// Code d'accès aux profils.
//
// C'est une protection *légère* (jeu sans données personnelles). Le code n'est
// jamais stocké ni vérifié dans le navigateur : il est envoyé au serveur (en
// HTTPS), qui le hache (password_hash) et le vérifie. Ce module ne fait plus
// que de la validation de saisie.

import type { Issue } from './i18n'

export const PIN_MIN = 2
export const PIN_MAX = 10

/**
 * Renvoie un `Issue` (clé de traduction + paramètres) si le PIN est invalide,
 * sinon null. Fonction pure : la traduction se fait à l'affichage.
 */
export function validatePin(pin: string): Issue | null {
  if (!/^\d+$/.test(pin)) return { key: 'error.pinDigitsOnly' }
  if (pin.length < PIN_MIN) return { key: 'error.pinTooShort', params: { min: PIN_MIN } }
  if (pin.length > PIN_MAX) return { key: 'error.pinTooLong', params: { max: PIN_MAX } }
  return null
}
