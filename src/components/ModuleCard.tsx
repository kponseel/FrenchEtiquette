import { Link } from 'react-router-dom'
import type { Module, ModuleProgress } from '../types'
import { formatPercent, MODULE_TEST_SIZE } from '../lib/quiz'
import { CheckIcon } from './icons'
import ProgressBar from './ProgressBar'

export default function ModuleCard({
  module,
  progress,
}: {
  module: Module
  progress?: ModuleProgress
}) {
  const passed = progress?.passed ?? false
  const attempted = (progress?.attempts ?? 0) > 0
  const best = progress?.bestScore ?? 0

  return (
    <Link
      to={`/module/${module.id}`}
      className={'module-card' + (passed ? ' is-passed' : '')}
    >
      <div className="module-card__head">
        <div>
          <div className="module-card__motif">{module.motif}</div>
          <div className="module-card__title">{module.title}</div>
          <div className="module-card__subtitle">{module.subtitle}</div>
        </div>
        {passed ? (
          <span className="badge badge--passed">
            <CheckIcon width={13} height={13} /> Validé
          </span>
        ) : attempted ? (
          <span className="badge badge--gold">{formatPercent(best)}</span>
        ) : null}
      </div>

      <div style={{ marginTop: 16 }}>
        <ProgressBar value={passed ? 1 : best} />
      </div>

      <div className="module-card__meta">
        <span>{Math.min(MODULE_TEST_SIZE, module.questions.length)} questions par essai</span>
        <span>
          {passed
            ? 'Module validé'
            : attempted
              ? `Meilleur score ${formatPercent(best)}`
              : 'À découvrir'}
        </span>
      </div>
    </Link>
  )
}
