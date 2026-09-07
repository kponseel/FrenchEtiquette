import { usePlayer } from '../lib/PlayerContext'
import { ranking, TOTAL_MODULES } from '../lib/players'
import { useT } from '../lib/i18n'
import BottomNav from '../components/BottomNav'

export default function Leaderboard() {
  const { player, players } = usePlayer()
  const t = useT()
  const board = ranking(players)

  return (
    <div className="screen screen--with-nav">
      <header style={{ marginBottom: 18 }}>
        <p className="eyebrow">{t('leaderboard.eyebrow')}</p>
        <h1 className="serif" style={{ fontSize: '2rem', marginTop: 4 }}>
          {t('leaderboard.title')}
        </h1>
      </header>

      {board.length === 0 ? (
        <p className="muted">{t('leaderboard.empty')}</p>
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
                  {t(entry.title)} ·{' '}
                  {t('leaderboard.modulesSuffix', {
                    passed: entry.modulesPassed,
                    total: TOTAL_MODULES,
                  })}
                </span>
              </span>
              <span className="rank-row__pts">
                <strong>{entry.points}</strong>
                <span>{t('leaderboard.points')}</span>
              </span>
            </div>
          ))}
        </div>
      )}

      <p className="faint" style={{ fontSize: '0.78rem', marginTop: 22 }}>
        {t('leaderboard.footnote')}
      </p>

      <BottomNav />
    </div>
  )
}
