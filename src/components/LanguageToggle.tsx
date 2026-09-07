import { useI18n } from '../lib/i18n'

/**
 * Bascule français / anglais. Le libellé affiche la langue vers laquelle on
 * bascule (« English » quand on est en français), convention la plus lisible
 * pour un sélecteur à deux langues.
 */
export default function LanguageToggle({ className }: { className?: string }) {
  const { locale, toggleLocale, t } = useI18n()

  return (
    <button
      type="button"
      className={'lang-toggle' + (className ? ' ' + className : '')}
      onClick={toggleLocale}
      aria-label={t('lang.aria')}
      lang={locale === 'fr' ? 'en' : 'fr'}
    >
      {t('lang.switch')}
    </button>
  )
}
