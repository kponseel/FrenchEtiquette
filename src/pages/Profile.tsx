import { useState } from 'react'
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
import { PIN_MAX, PIN_MIN } from '../lib/pin'
import BottomNav from '../components/BottomNav'

export default function Profile() {
  const { player, logout, renameProfile, changePin } = usePlayer()
  const navigate = useNavigate()

  const [editing, setEditing] = useState<null | 'pseudo' | 'pin'>(null)
  const [value, setValue] = useState('')
  const [err, setErr] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [flash, setFlash] = useState<string | null>(null)

  if (!player) return null

  function changePlayer() {
    logout()
    navigate('/', { replace: true })
  }

  function startEdit(which: 'pseudo' | 'pin') {
    setEditing(which)
    setValue(which === 'pseudo' ? player!.pseudo : '')
    setErr(null)
    setFlash(null)
  }

  function cancelEdit() {
    setEditing(null)
    setValue('')
    setErr(null)
  }

  async function save() {
    if (busy) return
    setBusy(true)
    const res = editing === 'pseudo' ? await renameProfile(value) : await changePin(value)
    setBusy(false)
    if (res.ok) {
      setFlash(editing === 'pseudo' ? 'Pseudo mis à jour.' : 'Code mis à jour.')
      cancelEdit()
    } else {
      setErr(res.error ?? 'Une erreur est survenue.')
    }
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

      <div className="section-head" style={{ marginTop: 28 }}>
        <h2>Compte</h2>
      </div>
      <div className="card">
        {flash && (
          <p style={{ color: 'var(--success)', fontSize: '0.9rem', marginBottom: 12 }}>
            {flash}
          </p>
        )}

        {editing === null && (
          <div className="stack" style={{ ['--gap' as string]: '10px' }}>
            <button className="btn btn--ghost btn--block" onClick={() => startEdit('pseudo')}>
              Changer de pseudo
            </button>
            <button className="btn btn--ghost btn--block" onClick={() => startEdit('pin')}>
              Changer de code
            </button>
          </div>
        )}

        {editing === 'pseudo' && (
          <div className="stack" style={{ ['--gap' as string]: '12px' }}>
            <label className="field">
              <span className="field__label">Nouveau pseudo</span>
              <input
                className={'input' + (err ? ' has-error' : '')}
                type="text"
                autoCapitalize="words"
                autoComplete="off"
                value={value}
                maxLength={24}
                autoFocus
                onChange={(e) => {
                  setValue(e.target.value)
                  if (err) setErr(null)
                }}
                aria-invalid={!!err}
              />
            </label>
            {err && <p className="form-error">{err}</p>}
            <button
              className="btn btn--primary btn--block"
              onClick={save}
              disabled={busy || !value.trim()}
            >
              {busy ? 'Un instant…' : 'Enregistrer'}
            </button>
            <button className="btn btn--ghost btn--block" onClick={cancelEdit} disabled={busy}>
              Annuler
            </button>
          </div>
        )}

        {editing === 'pin' && (
          <div className="stack" style={{ ['--gap' as string]: '12px' }}>
            <label className="field">
              <span className="field__label">
                Nouveau code · {PIN_MIN} à {PIN_MAX} chiffres
              </span>
              <input
                className={'input' + (err ? ' has-error' : '')}
                type="password"
                inputMode="numeric"
                autoComplete="off"
                value={value}
                autoFocus
                onChange={(e) => {
                  setValue(e.target.value.replace(/\D/g, '').slice(0, PIN_MAX))
                  if (err) setErr(null)
                }}
                aria-invalid={!!err}
              />
            </label>
            {err && <p className="form-error">{err}</p>}
            <button
              className="btn btn--primary btn--block"
              onClick={save}
              disabled={busy || value.length < PIN_MIN}
            >
              {busy ? 'Un instant…' : 'Enregistrer le code'}
            </button>
            <button className="btn btn--ghost btn--block" onClick={cancelEdit} disabled={busy}>
              Annuler
            </button>
          </div>
        )}
      </div>

      <button
        className="btn btn--ghost btn--block"
        style={{ marginTop: 16 }}
        onClick={changePlayer}
      >
        Se déconnecter
      </button>

      <BottomNav />
    </div>
  )
}
