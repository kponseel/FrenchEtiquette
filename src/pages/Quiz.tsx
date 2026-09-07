import { useCallback, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { usePlayer } from '../lib/PlayerContext'
import { modulesFor, moduleById } from '../content/modules'
import { isFinalUnlocked } from '../lib/players'
import {
  buildFinalTest,
  computeResult,
  formatPercent,
  PASS_THRESHOLD,
  prepareQuiz,
  type PreparedQuestion,
} from '../lib/quiz'
import { useI18n, type TranslationKey } from '../lib/i18n'
import type { AttemptResult } from '../types'
import ProgressBar from '../components/ProgressBar'
import RichText from '../components/RichText'
import ScoreRing from '../components/ScoreRing'
import { ChevronLeft } from '../components/icons'

const KEYS = ['A', 'B', 'C', 'D']

/** Classe CSS du badge de difficulté affiché pendant le quiz. */
const DIFF_CLASS: Record<string, string> = {
  Fondamental: 'qchip--base',
  Intermédiaire: 'qchip--mid',
  Piège: 'qchip--piege',
}

interface Answer {
  q: PreparedQuestion
  chosen: number
}

export default function Quiz({ mode }: { mode: 'module' | 'final' }) {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { player, saveModuleResult, saveFinalResult } = usePlayer()
  const { t, locale } = useI18n()

  const mod = mode === 'module' ? moduleById(id ?? '', locale) : undefined

  // Les questions ne sont tirées qu'au montage (et au « Recommencer ») : changer
  // de langue en cours d'épreuve ne réinitialise donc pas la session en cours.
  const build = useCallback(
    (): PreparedQuestion[] =>
      mode === 'final'
        ? buildFinalTest(modulesFor(locale))
        : prepareQuiz(mod?.questions ?? []),
    [mode, mod, locale],
  )

  const [questions, setQuestions] = useState<PreparedQuestion[]>(build)
  const [index, setIndex] = useState(0)
  const [chosen, setChosen] = useState<number | null>(null)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [result, setResult] = useState<AttemptResult | null>(null)

  // Garde-fous d'accès
  if (!player) return <Navigate to="/" replace />
  if (mode === 'module' && !mod) return <Navigate to="/accueil" replace />
  if (mode === 'final' && !isFinalUnlocked(player)) return <Navigate to="/accueil" replace />

  const title = mode === 'final' ? t('home.finalExam') : mod!.title
  const current = questions[index]
  const revealed = chosen !== null
  const isLast = index + 1 >= questions.length

  function handleContinue() {
    const entry: Answer = { q: current, chosen: chosen! }
    const next = [...answers, entry]
    if (isLast) {
      const correct = next.filter((a) => a.chosen === a.q.correctIndex).length
      const res = computeResult(correct, questions.length)
      if (mode === 'final') saveFinalResult(res)
      else saveModuleResult(mod!.id, res)
      setAnswers(next)
      setResult(res)
    } else {
      setAnswers(next)
      setIndex(index + 1)
      setChosen(null)
    }
  }

  function restart() {
    setQuestions(build())
    setIndex(0)
    setChosen(null)
    setAnswers([])
    setResult(null)
  }

  // ----------------------------------------------------------- Résultats
  if (result) {
    const wrong = answers.filter((a) => a.chosen !== a.q.correctIndex)
    const certifiedNow = mode === 'final' && result.passed
    const unlockedNow = mode === 'module' && result.passed && isFinalUnlocked(player)

    return (
      <div className="screen">
        <div className="center" style={{ paddingTop: 12 }}>
          <p className="eyebrow">{title}</p>
          <h1 className="serif" style={{ fontSize: '1.9rem', margin: '6px 0 22px' }}>
            {result.passed ? t('quiz.brilliant') : t('quiz.notQuite')}
          </h1>
          <ScoreRing value={result.score} passed={result.passed} />
          <p className="lead" style={{ marginTop: 20 }}>
            {t('quiz.correctCount', { correct: result.correct, total: result.total })}
          </p>
          <p className="muted" style={{ fontSize: '0.9rem', marginTop: 6 }}>
            {result.passed
              ? certifiedNow
                ? t('quiz.nowCertified')
                : t('quiz.modulePassed')
              : t('quiz.needThreshold', { threshold: formatPercent(PASS_THRESHOLD) })}
          </p>

          {unlockedNow && (
            <div className="badge badge--gold" style={{ marginTop: 16 }}>
              {t('quiz.finalUnlocked')}
            </div>
          )}
        </div>

        <div className="stack" style={{ ['--gap' as string]: '12px', marginTop: 28 }}>
          {certifiedNow ? (
            <Link to="/certificat" className="btn btn--gold btn--block" replace>
              {t('quiz.seeCertificate')}
            </Link>
          ) : (
            <button className="btn btn--primary btn--block" onClick={restart}>
              {t('quiz.restart')}
            </button>
          )}
          <button
            className="btn btn--ghost btn--block"
            onClick={() => navigate('/accueil', { replace: true })}
          >
            {t('quiz.backHome')}
          </button>
        </div>

        {wrong.length > 0 && (
          <div style={{ marginTop: 34 }}>
            <div className="section-head">
              <h2>{t('quiz.toReview')}</h2>
              <span className="faint">{wrong.length}</span>
            </div>
            {wrong.map((a) => (
              <div key={a.q.id} className="review-item">
                <p className="review-item__q">
                  <RichText>{a.q.prompt}</RichText>
                </p>
                <p className="review-item__a ko">
                  {t('quiz.yourAnswer')}&nbsp;: <RichText>{a.q.choices[a.chosen]}</RichText>
                </p>
                <p className="review-item__a ok">
                  {t('quiz.rightAnswer')}&nbsp;:{' '}
                  <RichText>{a.q.choices[a.q.correctIndex]}</RichText>
                </p>
                <p className="muted" style={{ fontSize: '0.88rem', marginTop: 6 }}>
                  <RichText>{a.q.explanation}</RichText>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  // ------------------------------------------------------------- En cours
  return (
    <div className="screen">
      <div className="topbar">
        <button
          className="topbar__back"
          onClick={() => navigate('/accueil')}
          aria-label={t('quiz.quit')}
        >
          <ChevronLeft /> {t('quiz.quit')}
        </button>
        <span className="topbar__title" style={{ fontSize: '1rem' }}>
          {title}
        </span>
        <span style={{ width: 60 }} />
      </div>

      <div style={{ marginBottom: 26 }}>
        <div
          className="module-card__meta"
          style={{ marginTop: 0, marginBottom: 10 }}
        >
          <span className="eyebrow">
            {t('quiz.question', { index: index + 1, total: questions.length })}
          </span>
          {current.difficulty && (
            <span className={'qchip ' + (DIFF_CLASS[current.difficulty] ?? '')}>
              {t(`difficulty.${current.difficulty}` as TranslationKey)}
            </span>
          )}
        </div>
        <ProgressBar value={(index + (revealed ? 1 : 0)) / questions.length} />
      </div>

      <div className="qblock" key={current.id}>
        <h1
          className="serif"
          style={{ fontSize: '1.6rem', lineHeight: 1.2, marginBottom: 22 }}
        >
          <RichText>{current.prompt}</RichText>
        </h1>

        <div className="stack" style={{ ['--gap' as string]: '12px' }}>
        {current.choices.map((choice, i) => {
          let cls = 'choice'
          let mark = ''
          if (revealed) {
            if (i === current.correctIndex) {
              cls += ' is-correct'
              mark = '✓'
            } else if (i === chosen) {
              cls += ' is-wrong'
              mark = '✕'
            } else {
              cls += ' is-dimmed'
            }
          }
          return (
            <button
              key={i}
              className={cls}
              disabled={revealed}
              onClick={() => setChosen(i)}
            >
              <span className="choice__key">{KEYS[i]}</span>
              <span className="choice__text">
                <RichText>{choice}</RichText>
              </span>
              {mark && <span className="choice__mark">{mark}</span>}
            </button>
          )
        })}
        </div>
      </div>

      {revealed && (
        <>
          <div
            className={
              'explain ' +
              (chosen === current.correctIndex ? 'explain--ok' : 'explain--ko')
            }
            style={{ marginTop: 20 }}
          >
            <p className="explain__label">
              {chosen === current.correctIndex
                ? t('quiz.wellSpotted')
                : t('quiz.remember')}
            </p>
            <p className="explain__body">
              <RichText>{current.explanation}</RichText>
            </p>
          </div>

          <button
            className="btn btn--primary btn--block"
            style={{ marginTop: 20 }}
            onClick={handleContinue}
          >
            {isLast ? t('quiz.seeResult') : t('quiz.continue')}
          </button>
        </>
      )}
    </div>
  )
}
