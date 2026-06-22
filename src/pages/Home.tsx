import { Link } from 'react-router-dom'
import { usePlayer } from '../lib/PlayerContext'
import { modules } from '../content/modules'
import {
  TOTAL_MODULES,
  isCertified,
  isFinalUnlocked,
  modulesPassed,
  playerTitle,
} from '../lib/players'
import { FINAL_TEST_SIZE } from '../lib/quiz'
import BottomNav from '../components/BottomNav'
import ModuleCard from '../components/ModuleCard'
import ProgressBar from '../components/ProgressBar'
import { LockIcon, SealIcon } from '../components/icons'

const totalQuestions = modules.reduce((n, m) => n + m.questions.length, 0)
const finalCount = Math.min(FINAL_TEST_SIZE, totalQuestions)

export default function Home() {
  const { player } = usePlayer()
  if (!player) return null

  const greeting = new Date().getHours() < 18 ? 'Bonjour' : 'Bonsoir'
  const passed = modulesPassed(player)
  const unlocked = isFinalUnlocked(player)
  const certified = isCertified(player)

  return (
    <div className="screen screen--with-nav">
      <header style={{ marginBottom: 22 }}>
        <p className="eyebrow">{playerTitle(player)}</p>
        <h1 className="serif" style={{ fontSize: '2rem', marginTop: 4 }}>
          {greeting}, {player.pseudo}.
        </h1>
      </header>

      <div className="card" style={{ marginBottom: 26 }}>
        <div className="module-card__meta" style={{ marginTop: 0, marginBottom: 12 }}>
          <span className="eyebrow">Votre progression</span>
          <span className="serif" style={{ fontSize: '1.1rem' }}>
            {passed} / {TOTAL_MODULES}
          </span>
        </div>
        <ProgressBar value={passed / TOTAL_MODULES} />
        <p className="muted" style={{ fontSize: '0.85rem', marginTop: 12 }}>
          {certified
            ? 'Félicitations, vous êtes certifié Gentleman.'
            : unlocked
              ? 'Tous les modules sont validés. L’examen final vous attend.'
              : `Validez chaque module (90 % requis) pour débloquer l’examen final.`}
        </p>
      </div>

      <div className="section-head">
        <h2>Les modules</h2>
      </div>
      <div className="list">
        {modules.map((m) => (
          <ModuleCard key={m.id} module={m} progress={player.modules[m.id]} />
        ))}
      </div>

      {/* Examen final */}
      <div className="section-head" style={{ marginTop: 30 }}>
        <h2>Examen de certification</h2>
      </div>

      {certified ? (
        <Link to="/certificat" className="certificate" style={{ display: 'block' }}>
          <div className="certificate__seal">
            <SealIcon width={30} height={30} />
          </div>
          <p className="eyebrow center">Diplômé</p>
          <p className="serif center" style={{ fontSize: '1.4rem', margin: '4px 0' }}>
            Gentleman Certifié
          </p>
          <p className="muted center" style={{ fontSize: '0.85rem' }}>
            Voir mon certificat ›
          </p>
        </Link>
      ) : unlocked ? (
        <div className="card" style={{ borderColor: 'var(--gold-soft)' }}>
          <p className="serif" style={{ fontSize: '1.4rem' }}>
            L’épreuve finale
          </p>
          <p className="muted" style={{ fontSize: '0.9rem', margin: '8px 0 18px' }}>
            {finalCount} questions tirées de l’ensemble des modules. Atteignez 90 %
            pour être certifié Gentleman.
          </p>
          <Link to="/examen" className="btn btn--gold btn--block">
            Passer l’examen
          </Link>
        </div>
      ) : (
        <div className="card" style={{ opacity: 0.75 }}>
          <div className="badge badge--locked" style={{ marginBottom: 12 }}>
            <LockIcon /> Verrouillé
          </div>
          <p className="muted" style={{ fontSize: '0.92rem' }}>
            L’examen final de {finalCount} questions se débloque une fois les{' '}
            {TOTAL_MODULES} modules validés ({passed}/{TOTAL_MODULES} pour l’instant).
          </p>
        </div>
      )}

      <BottomNav />
    </div>
  )
}
