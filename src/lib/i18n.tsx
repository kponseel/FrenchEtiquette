// Internationalisation — français / anglais.
//
// Volontairement minimal : deux dictionnaires plats et un contexte React, sans
// dépendance externe. La langue est choisie par le visiteur, mémorisée
// localement, et retombe sinon sur celle du navigateur.
//
// Les fonctions *pures* de `lib/` (validatePseudo, validatePin, playerTitle…)
// ne peuvent pas appeler de hook : elles renvoient donc une clé (ou un `Issue`)
// que l'appelant traduit. Voir `Issue` plus bas.

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { en } from '../locales/en'
import { fr, type TranslationKey } from '../locales/fr'
import { setApiLang } from './api'
import { read, write } from './storage'

export type { TranslationKey }

export type Locale = 'fr' | 'en'

export const LOCALES: Locale[] = ['fr', 'en']

/** Étiquette BCP-47, pour Intl et l'attribut lang du document. */
export const BCP47: Record<Locale, string> = { fr: 'fr-FR', en: 'en-GB' }

const DICTIONARIES: Record<Locale, Record<TranslationKey, string>> = { fr, en }

const LANG_KEY = 'lang'

export type TParams = Record<string, string | number>

/**
 * Message d'erreur différé : une clé + ses paramètres, produit par les
 * validateurs purs et traduit au moment de l'affichage.
 */
export interface Issue {
  key: TranslationKey
  params?: TParams
}

export type Translate = (key: TranslationKey, params?: TParams) => string

/** Remplace les {placeholders} par leurs valeurs. */
function interpolate(template: string, params?: TParams): string {
  if (!params) return template
  return template.replace(/\{(\w+)\}/g, (whole, name: string) =>
    name in params ? String(params[name]) : whole,
  )
}

function detectLocale(): Locale {
  const saved = read<string | null>(LANG_KEY, null)
  if (saved === 'fr' || saved === 'en') return saved
  const nav = typeof navigator !== 'undefined' ? navigator.language : 'fr'
  return nav.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

interface I18nValue {
  locale: Locale
  setLocale: (l: Locale) => void
  toggleLocale: () => void
  t: Translate
  /** Traduit un `Issue` renvoyé par un validateur pur. */
  tIssue: (issue: Issue | null) => string | null
}

const I18nContext = createContext<I18nValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  // La langue est propagée au client API dès le *rendu*, pas dans un effet :
  // les effets des enfants s'exécutent avant ceux du parent, or PlayerProvider
  // appelle l'API dans son premier effet — il aurait sinon utilisé le français.
  const [locale, setLocaleState] = useState<Locale>(() => {
    const initial = detectLocale()
    setApiLang(initial)
    return initial
  })

  // Un seul endroit propage la langue : l'attribut lang du document (a11y,
  // moteurs de recherche) et le client API (messages d'erreur du serveur).
  useEffect(() => {
    document.documentElement.lang = locale
    setApiLang(locale)
  }, [locale])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    write(LANG_KEY, l)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((current) => {
      const next: Locale = current === 'fr' ? 'en' : 'fr'
      write(LANG_KEY, next)
      return next
    })
  }, [])

  const t = useCallback<Translate>(
    (key, params) => interpolate(DICTIONARIES[locale][key] ?? key, params),
    [locale],
  )

  const tIssue = useCallback(
    (issue: Issue | null) => (issue ? t(issue.key, issue.params) : null),
    [t],
  )

  const value = useMemo<I18nValue>(
    () => ({ locale, setLocale, toggleLocale, t, tIssue }),
    [locale, setLocale, toggleLocale, t, tIssue],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider')
  return ctx
}

/** Raccourci quand seule la fonction de traduction est nécessaire. */
export function useT(): Translate {
  return useI18n().t
}
