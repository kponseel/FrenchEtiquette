import { useNavigate } from 'react-router-dom'
import { usePlayer } from '../lib/PlayerContext'
import { modules } from '../content/modules'
import {
  TOTAL_MODULES,
  isCertified,
  modulesPassed,
  playerTitle,
  rankingPoints,
} from '../lib/players'
import { formatPercent } from '../lib/quiz'
import BottomNav from '../components/BottomNav'

export default function Profile() {
  const { player, logout } = usePlayer()
  const navigate = useNavigate()
  if (!player) return null

  function changePlayer() {
    logout()
    navigate('/', { replace: true })
  }

  const passed = modulesPassed(player)

  return (
    <div className="screen screen--with-nav">
      <div className="center" style={{ margin: '8px 0 24px' }}>
        <span
          className="brandmark__monogram"
          style={{ width: 72, height: 72, fontSize: '2rem', margin: '0 auto' }}
        >
          {player.pseudo.charAt(0).toUpperCase()}
        </span>
        <h1 className="serif" style={{ fontSize: '1.9rem', marginTop: 14 }}>
          {player.pseudo}
        </h1>
        <p className="eyebrow" style={{ marginTop: 6 }}>
          {isCertified(player) ? '✦ ' : ''}
          {playerTitle(player)}
        </p>
      </div>

      <div className="card" style={{ marginBottom: 22 }}>
        <div className="module-card__meta" style={{ marginTop: 0 }}>
          <span className="muted">Modules validés</span>
          <span className="serif" style={{ fontSize: '1.1rem' }}>
            {passed} / {TOTAL_MODULES}
          </span>
        </div>
        <div className="module-card__meta">
          <span className="muted">Examen final</span>
          <span className="serif" style={{ fontSize: '1.1rem' }}>
            {player.final.attempts > 0 ? formatPercent(player.final.bestScore) : '—'}
          </span>
        </div>
        <div className="module-card__meta">
          <span className="muted">Points de classement</span>
          <span className="serif" style={{ fontSize: '1.1rem' }}>
            {rankingPoints(player)}
          </span>
        </div>
      </div>

      <div className="section-head">
        <h2>Détail par module</h2>
      </div>
      <div className="list">
        {modules.map((m) => {
          const prog = player.modules[m.id]
          return (
            <div key={m.id} className="rank-row">
              <span className="module-card__motif">{m.motif}</span>
              <span>
                <span className="rank-row__name">{m.title}</span>
                <span className="rank-row__title" style={{ display: 'block' }}>
                  {prog?.passed
                    ? 'Validé'
                    : prog?.attempts
                      ? 'En cours'
                      : 'Non commencé'}
                </span>
              </span>
              <span className="rank-row__pts">
                <strong>{prog?.attempts ? formatPercent(prog.bestScore) : '—'}</strong>
                <span>meilleur</span>
              </span>
            </div>
          )
        })}
      </div>

      <button
        className="btn btn--ghost btn--block"
        style={{ marginTop: 28 }}
        onClick={changePlayer}
      >
        Verrouiller &amp; changer de profil
      </button>

      <BottomNav />
    </div>
  )
}
