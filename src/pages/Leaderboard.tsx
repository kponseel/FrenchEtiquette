import { usePlayer } from '../lib/PlayerContext'
import { ranking, TOTAL_MODULES } from '../lib/players'
import BottomNav from '../components/BottomNav'

export default function Leaderboard() {
  const { player, players } = usePlayer()
  const board = ranking(players)

  return (
    <div className="screen screen--with-nav">
      <header style={{ marginBottom: 18 }}>
        <p className="eyebrow">Le cercle</p>
        <h1 className="serif" style={{ fontSize: '2rem', marginTop: 4 }}>
          Classement
        </h1>
      </header>

      {board.length === 0 ? (
        <p className="muted">Aucun joueur pour l’instant.</p>
      ) : (
        <div className="list">
          {board.map((entry) => (
            <div
              key={entry.player.id}
              className={'rank-row' + (entry.player.id === player?.id ? ' is-me' : '')}
            >
              <span
                className={'rank-row__pos' + (entry.rank <= 3 ? ' is-podium' : '')}
              >
                {entry.rank}
              </span>
              <span>
                <span className="rank-row__name">{entry.player.pseudo}</span>
                <span className="rank-row__title" style={{ display: 'block' }}>
                  {entry.certified ? '✦ ' : ''}
                  {entry.title} · {entry.modulesPassed}/{TOTAL_MODULES} modules
                </span>
              </span>
              <span className="rank-row__pts">
                <strong>{entry.points}</strong>
                <span>points</span>
              </span>
            </div>
          ))}
        </div>
      )}

      <p className="faint" style={{ fontSize: '0.78rem', marginTop: 22 }}>
        Classement commun à tous les joueurs, mis à jour en direct.
      </p>

      <BottomNav />
    </div>
  )
}
