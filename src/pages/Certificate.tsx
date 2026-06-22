import { Navigate, useNavigate } from 'react-router-dom'
import { usePlayer } from '../lib/PlayerContext'
import { isCertified } from '../lib/players'
import { formatPercent } from '../lib/quiz'
import BottomNav from '../components/BottomNav'
import { SealIcon } from '../components/icons'

const frDate = (ts: number) =>
  new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(ts))

export default function Certificate() {
  const { player } = usePlayer()
  const navigate = useNavigate()
  if (!player) return <Navigate to="/" replace />
  if (!isCertified(player)) return <Navigate to="/accueil" replace />

  const date = player.final.certifiedAt ?? Date.now()

  return (
    <div className="screen screen--with-nav">
      <div className="certificate">
        <div className="certificate__seal">
          <SealIcon width={32} height={32} />
        </div>
        <p className="eyebrow center">L’Étiquette française</p>
        <p className="muted center" style={{ fontSize: '0.85rem', marginTop: 16 }}>
          Le présent certificat atteste que
        </p>
        <p className="certificate__name">{player.pseudo}</p>
        <hr className="rule rule--center" />
        <p className="lead center" style={{ fontSize: '0.98rem' }}>
          a fait preuve d’une parfaite connaissance des usages du savoir-vivre
          et est reconnu(e)
        </p>
        <p
          className="serif center"
          style={{ fontSize: '1.5rem', color: 'var(--gold-deep)', margin: '10px 0' }}
        >
          Gentleman
        </p>
        <p className="faint center" style={{ fontSize: '0.8rem', marginTop: 14 }}>
          Délivré le {frDate(date)}
          <span className="dot-sep" />
          Score&nbsp;: {formatPercent(player.final.bestScore)}
        </p>
      </div>

      <button
        className="btn btn--ghost btn--block"
        style={{ marginTop: 22 }}
        onClick={() => navigate('/accueil')}
      >
        Retour à l’accueil
      </button>

      <BottomNav />
    </div>
  )
}
