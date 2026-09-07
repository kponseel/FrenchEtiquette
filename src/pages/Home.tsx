import { Link } from 'react-router-dom'
import { usePlayer } from '../lib/PlayerContext'
import { modules, modulesFor } from '../content/modules'
import {
  TOTAL_MODULES,
  isCertified,
  isFinalUnlocked,
  modulesPassed,
  playerTitle,
} from '../lib/players'
import { FINAL_TEST_SIZE, PASS_THRESHOLD, formatPercent } from '../lib/quiz'
import { useI18n } from '../lib/i18n'
import BottomNav from '../components/BottomNav'
import LanguageToggle from '../components/LanguageToggle'
import ModuleCard from '../components/ModuleCard'
import ProgressBar from '../components/ProgressBar'
import { LockIcon, SealIcon } from '../components/icons'

// Le nombre de questions est identique dans les deux langues (l'anglais est un
// calque du français), la liste canonique suffit donc pour ce décompte.
const totalQuestions = modules.reduce((n, m) => n + m.questions.length, 0)
const finalCount = Math.min(FINAL_TEST_SIZE, totalQuestions)

export default function Home() {
  const { player } = usePlayer()
  const { t, locale } = useI18n()
  if (!player) return null

  const greeting = t(new Date().getHours() < 18 ? 'home.morning' : 'home.evening')
  const threshold = formatPercent(PASS_THRESHOLD)
  const passed = modulesPassed(player)
  const unlocked = isFinalUnlocked(player)
  const certified = isCertified(player)

  return (
    <div className="screen screen--with-nav">
      <header
        style={{
          marginBottom: 22,
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <div>
          <p className="eyebrow">{t(playerTitle(player))}</p>
          <h1 className="serif" style={{ fontSize: '2rem', marginTop: 4 }}>
            {t('home.greeting', { greeting, pseudo: player.pseudo })}
          </h1>
        </div>
        <LanguageToggle />
      </header>

      <div className="card" style={{ marginBottom: 26 }}>
        <div className="module-card__meta" style={{ marginTop: 0, marginBottom: 12 }}>
          <span className="eyebrow">{t('home.progress')}</span>
          <span className="serif" style={{ fontSize: '1.1rem' }}>
            {passed} / {TOTAL_MODULES}
          </span>
        </div>
        <ProgressBar value={passed / TOTAL_MODULES} />
        <p className="muted" style={{ fontSize: '0.85rem', marginTop: 12 }}>
          {certified
            ? t('home.certifiedMsg')
            : unlocked
              ? t('home.unlockedMsg')
              : t('home.lockedMsg', { threshold })}
        </p>
      </div>

      <div className="section-head">
        <h2>{t('home.modules')}</h2>
      </div>
      <div className="list">
        {modulesFor(locale).map((m) => (
          <ModuleCard key={m.id} module={m} progress={player.modules[m.id]} />
        ))}
      </div>

      {/* Examen final */}
      <div className="section-head" style={{ marginTop: 30 }}>
        <h2>{t('home.finalExam')}</h2>
      </div>

      {certified ? (
        <Link to="/certificat" className="certificate" style={{ display: 'block' }}>
          <div className="certificate__seal">
            <SealIcon width={30} height={30} />
          </div>
          <p className="eyebrow center">{t('home.graduate')}</p>
          <p className="serif center" style={{ fontSize: '1.4rem', margin: '4px 0' }}>
            {t('title.certified')}
          </p>
          <p className="muted center" style={{ fontSize: '0.85rem' }}>
            {t('home.seeCertificate')}
          </p>
        </Link>
      ) : unlocked ? (
        <div className="card" style={{ borderColor: 'var(--gold-soft)' }}>
          <p className="serif" style={{ fontSize: '1.4rem' }}>
            {t('home.finalTitle')}
          </p>
          <p className="muted" style={{ fontSize: '0.9rem', margin: '8px 0 18px' }}>
            {t('home.finalDesc', { count: finalCount, threshold })}
          </p>
          <Link to="/examen" className="btn btn--gold btn--block">
            {t('home.takeExam')}
          </Link>
        </div>
      ) : (
        <div className="card" style={{ opacity: 0.75 }}>
          <div className="badge badge--locked" style={{ marginBottom: 12 }}>
            <LockIcon /> {t('home.locked')}
          </div>
          <p className="muted" style={{ fontSize: '0.92rem' }}>
            {t('home.lockedDesc', {
              count: finalCount,
              total: TOTAL_MODULES,
              passed,
            })}
          </p>
        </div>
      )}

      <BottomNav />
    </div>
  )
}
