/** Anneau de score circulaire, tracé en SVG. */
export default function ScoreRing({
  value,
  passed,
}: {
  /** Ratio 0..1 */
  value: number
  passed: boolean
}) {
  const size = 168
  const stroke = 6
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const pct = Math.max(0, Math.min(1, value))
  const color = passed ? 'var(--success)' : 'var(--gold-deep)'

  return (
    <div className="score-ring">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}
        aria-hidden="true"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--line)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct)}
          style={{ transition: 'stroke-dashoffset 0.8s cubic-bezier(0.22,1,0.36,1)' }}
        />
      </svg>
      <div className="center">
        <div className="score-ring__value">{Math.round(pct * 100)}%</div>
        <div className="score-ring__caption">de réussite</div>
      </div>
    </div>
  )
}
