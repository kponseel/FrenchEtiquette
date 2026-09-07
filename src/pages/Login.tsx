import { useState, type FormEvent } from 'react'
import { api } from '../lib/api'
import { useNavigate } from 'react-router-dom'
import { usePlayer } from '../lib/PlayerContext'
import { playerTitle } from '../lib/players'
import { PIN_MAX, PIN_MIN } from '../lib/pin'
import { useT } from '../lib/i18n'
import LanguageToggle from '../components/LanguageToggle'
import type { Player } from '../types'

type View = 'home' | 'unlock' | 'saved'

export default function Login() {
  const t = useT()
  const { createProfile, loginExisting, players, loadError } = usePlayer()
  const navigate = useNavigate()

  const [view, setView] = useState<View>('home')
  const [pseudo, setPseudo] = useState('')
  const [pin, setPin] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  const [selected, setSelected] = useState<Player | null>(null)
  const [createdId, setCreatedId] = useState('')
  const [createdPin, setCreatedPin] = useState('')
  const [copied, setCopied] = useState(false)
  const [email, setEmail] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  function onPinChange(value: string) {
    setPin(value.replace(/\D/g, '').slice(0, PIN_MAX))
    if (error) setError(null)
  }

  function enter() {
    navigate('/accueil', { replace: true })
  }

  async function handleCreate(e: FormEvent) {
    e.preventDefault()
    if (busy) return
    setBusy(true)
    const res = await createProfile(pseudo, pin)
    setBusy(false)
    if (res.ok && res.id) {
      setCreatedId(res.id)
      setCreatedPin(pin)
      setError(null)
      setView('saved')
    } else {
      setError(res.error ?? t('error.generic'))
    }
  }

  async function openDirect(id: string, code: string) {
    setBusy(true)
    const res = await loginExisting(id, code)
    setBusy(false)
    if (res.ok) enter()
    else setError(res.error ?? t('error.wrongCode'))
  }

  function selectProfile(p: Player) {
    setSelected(p)
    setPin('')
    setError(null)
    setView('unlock')
  }

  async function handleUnlock(e: FormEvent) {
    e.preventDefault()
    if (busy || !selected) return
    await openDirect(selected.id, pin)
  }

  async function copyPin() {
    try {
      await navigator.clipboard.writeText(createdPin)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setError(t('login.copyFailed'))
    }
  }

  async function sendByEmail() {
    const to = email.trim()
    if (!/^\S+@\S+\.\S+$/.test(to)) {
      setError(t('login.emailInvalid'))
      return
    }
    setBusy(true)
    try {
      await api.sendPin(to, pseudo, createdPin)
      setEmailSent(true)
      setError(null)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : t('login.emailFailed'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="screen screen--centered">
      {/* Premier contact : la bascule de langue doit être visible d'emblée. */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <LanguageToggle />
      </div>
      <div className="center" style={{ marginBottom: 28 }}>
        <div className="brandmark">
          <span className="brandmark__monogram">É</span>
        </div>
        <h1 className="display" style={{ marginTop: 18 }}>
          {t('brand.name')}
        </h1>
        <hr className="rule rule--center" />
        {view === 'home' && (
          <p className="lead" style={{ maxWidth: 300, margin: '0 auto' }}>
            {t('brand.tagline')}
          </p>
        )}
      </div>

      {view === 'home' && (
        <>
          {loadError && (
            <p
              className="form-error"
              style={{ textAlign: 'center', marginBottom: 16 }}
            >
              {t('login.loadError', { error: loadError })}
            </p>
          )}
          <form onSubmit={handleCreate} className="stack" style={{ ['--gap' as string]: '16px' }}>
            <label className="field">
              <span className="field__label">{t('login.pseudoLabel')}</span>
              <input
                className={'input' + (error ? ' has-error' : '')}
                type="text"
                autoCapitalize="words"
                autoComplete="off"
                placeholder={t('login.pseudoPlaceholder')}
                value={pseudo}
                maxLength={24}
                onChange={(e) => {
                  setPseudo(e.target.value)
                  if (error) setError(null)
                }}
                aria-invalid={!!error}
              />
            </label>
            <label className="field">
              <span className="field__label">
                {t('login.pinLabel', { min: PIN_MIN, max: PIN_MAX })}
              </span>
              <input
                className={'input' + (error ? ' has-error' : '')}
                type="text"
                inputMode="numeric"
                autoComplete="off"
                placeholder={t('login.pinPlaceholder')}
                value={pin}
                onChange={(e) => onPinChange(e.target.value)}
                aria-invalid={!!error}
              />
              <span className="faint" style={{ display: 'block', marginTop: 8, fontSize: '0.78rem' }}>
                {t('login.pinHint')}
              </span>
            </label>
            {error && <p className="form-error">{error}</p>}
            <button
              type="submit"
              className="btn btn--primary btn--block"
              disabled={busy || !pseudo.trim() || pin.length < PIN_MIN}
            >
              {busy ? t('common.wait') : t('login.create')}
            </button>
          </form>

          {players.length > 0 && (
            <div style={{ marginTop: 34 }}>
              <p className="eyebrow center" style={{ marginBottom: 14 }}>
                {t('login.resume')}
              </p>
              <div className="list">
                {players.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className="rank-row"
                    style={{ width: '100%', textAlign: 'left' }}
                    onClick={() => selectProfile(p)}
                  >
                    <span
                      className="brandmark__monogram"
                      style={{ width: 40, height: 40, fontSize: '1.1rem' }}
                    >
                      {p.pseudo.charAt(0).toUpperCase()}
                    </span>
                    <span>
                      <span className="rank-row__name" style={{ display: 'block' }}>
                        {p.pseudo}
                      </span>
                      <span className="rank-row__title">{t(playerTitle(p))}</span>
                    </span>
                    <span className="spacer" />
                    <span className="faint" aria-hidden="true">
                      🔒
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {view === 'unlock' && selected && (
        <form onSubmit={handleUnlock} className="stack" style={{ ['--gap' as string]: '16px' }}>
          <div className="center" style={{ marginBottom: 4 }}>
            <span
              className="brandmark__monogram"
              style={{ width: 56, height: 56, fontSize: '1.5rem', margin: '0 auto' }}
            >
              {selected.pseudo.charAt(0).toUpperCase()}
            </span>
            <p className="serif" style={{ fontSize: '1.3rem', marginTop: 10 }}>
              {selected.pseudo}
            </p>
            <p className="muted" style={{ fontSize: '0.88rem' }}>
              {t('login.enterCode')}
            </p>
          </div>
          <label className="field">
            <span className="field__label">{t('login.code')}</span>
            <input
              className={'input' + (error ? ' has-error' : '')}
              type="password"
              inputMode="numeric"
              autoComplete="off"
              autoFocus
              value={pin}
              onChange={(e) => onPinChange(e.target.value)}
              aria-invalid={!!error}
            />
          </label>
          {error && <p className="form-error">{error}</p>}
          <button
            type="submit"
            className="btn btn--primary btn--block"
            disabled={busy || pin.length < PIN_MIN}
          >
            {busy ? t('login.checking') : t('login.unlock')}
          </button>
          <button
            type="button"
            className="btn btn--ghost btn--block"
            onClick={() => {
              setView('home')
              setSelected(null)
              setPin('')
              setError(null)
            }}
          >
            {t('login.back')}
          </button>
        </form>
      )}

      {view === 'saved' && (
        <div className="stack" style={{ ['--gap' as string]: '16px' }}>
          <div className="center">
            <p className="eyebrow">{t('login.created')}</p>
            <h2 className="serif" style={{ fontSize: '1.4rem', margin: '6px 0 4px' }}>
              {t('login.noteCode')}
            </h2>
            <p className="muted" style={{ fontSize: '0.88rem', maxWidth: 300, margin: '0 auto 14px' }}>
              {t('login.noteCodeHint', { pseudo })}
            </p>
            <div className="pincode">{createdPin}</div>
          </div>
          <button type="button" className="btn btn--ghost btn--block" onClick={copyPin}>
            {copied ? t('login.copied') : t('login.copy')}
          </button>
          <label className="field">
            <span className="field__label">{t('login.emailLabel')}</span>
            <input
              className="input"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={t('login.emailPlaceholder')}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) setError(null)
              }}
            />
            <span className="faint" style={{ display: 'block', marginTop: 8, fontSize: '0.78rem' }}>
              {t('login.emailHint')}
            </span>
          </label>
          <button type="button" className="btn btn--ghost btn--block" onClick={sendByEmail} disabled={busy || emailSent}>
            {busy ? t('login.emailSending') : emailSent ? t('login.emailSent') : t('login.emailSend')}
          </button>
          {error && <p className="form-error">{error}</p>}
          <button
            type="button"
            className="btn btn--primary btn--block"
            onClick={() => openDirect(createdId, createdPin)}
            disabled={busy}
          >
            {busy ? t('common.wait') : t('login.enterCircle')}
          </button>
        </div>
      )}
    </div>
  )
}
