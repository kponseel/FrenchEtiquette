import { Navigate, useNavigate } from 'react-router-dom'
import { usePlayer } from '../lib/PlayerContext'
import { isCertified } from '../lib/players'
import { formatPercent } from '../lib/quiz'
import { BCP47, useI18n } from '../lib/i18n'
import BottomNav from '../components/BottomNav'
import { SealIcon } from '../components/icons'

export default function Certificate() {
  const { player } = usePlayer()
  const { t, locale } = useI18n()
  const navigate = useNavigate()
  if (!player) return <Navigate to="/" replace />
  if (!isCertified(player)) return <Navigate to="/accueil" replace />

  const date = player.final.certifiedAt ?? Date.now()
  const formatted = new Intl.DateTimeFormat(BCP47[locale], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))

  return (
    <div className="screen screen--with-nav">
      <div className="certificate">
        <div className="certificate__seal">
          <SealIcon width={32} height={32} />
        </div>
        <p className="eyebrow center">{t('certificate.eyebrow')}</p>
        <p className="muted center" style={{ fontSize: '0.85rem', marginTop: 16 }}>
          {t('certificate.attests')}
        </p>
        <p className="certificate__name">{player.pseudo}</p>
        <hr className="rule rule--center" />
        <p className="lead center" style={{ fontSize: '0.98rem' }}>
          {t('certificate.body')}
        </p>
        <p
          className="serif center"
          style={{ fontSize: '1.5rem', color: 'var(--gold-deep)', margin: '10px 0' }}
        >
          {t('certificate.rank')}
        </p>
        <p className="faint center" style={{ fontSize: '0.8rem', marginTop: 14 }}>
          {t('certificate.issued', { date: formatted })}
          <span className="dot-sep" />
          {t('certificate.score')}&nbsp;: {formatPercent(player.final.bestScore)}
        </p>
      </div>

      <button
        className="btn btn--ghost btn--block"
        style={{ marginTop: 22 }}
        onClick={() => navigate('/accueil')}
      >
        {t('quiz.backHome')}
      </button>

      <BottomNav />
    </div>
  )
}
