import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlayer } from '../lib/PlayerContext'
import { playerTitle } from '../lib/players'
import { PIN_MAX, PIN_MIN } from '../lib/pin'
import type { Player } from '../types'

type View = 'home' | 'unlock' | 'saved'

export default function Login() {
  const { createProfile, loginExisting, players } = usePlayer()
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
  // Email saisi uniquement pour s'envoyer le code à la création — jamais stocké.
  const [email, setEmail] = useState('')

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
      setError(res.error ?? 'Une erreur est survenue.')
    }
  }

  async function openDirect(id: string, code: string) {
    setBusy(true)
    const res = await loginExisting(id, code)
    setBusy(false)
    if (res.ok) enter()
    else setError(res.error ?? 'Code incorrect.')
  }

  function selectProfile(p: Player) {
    // Profil hérité sans code : accès direct, sans demander de PIN.
    if (!p.pinHash) {
      void openDirect(p.id, '')
      return
    }
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
      setError('Copie impossible — notez le code à la main.')
    }
  }

  function mailtoHref(to: string) {
    const subject = 'Mon code d’accès — L’Étiquette'
    const body =
      `Bonjour,\n\n` +
      `Voici le code d’accès à mon profil « ${pseudo} » sur L’Étiquette :\n\n` +
      `Code : ${createdPin}\n\n` +
      `À conserver pour retrouver ma progression. 🎩`
    return `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  function sendByEmail() {
    const to = email.trim()
    if (!/^\S+@\S+\.\S+$/.test(to)) {
      setError('Indiquez une adresse email valide pour recevoir le code.')
      return
    }
    // Ouvre l'app mail avec le code pré-rempli ; l'adresse n'est pas conservée.
    window.location.href = mailtoHref(to)
  }

  return (
    <div className="screen screen--centered">
      <div className="center" style={{ marginBottom: 28 }}>
        <div className="brandmark">
          <span className="brandmark__monogram">É</span>
        </div>
        <h1 className="display" style={{ marginTop: 18 }}>
          L’Étiquette
        </h1>
        <hr className="rule rule--center" />
        {view === 'home' && (
          <p className="lead" style={{ maxWidth: 300, margin: '0 auto' }}>
            Maîtrisez l’art du savoir-vivre à la française&nbsp;— et devenez
            Gentleman.
          </p>
        )}
      </div>

      {view === 'home' && (
        <>
          <form onSubmit={handleCreate} className="stack" style={{ ['--gap' as string]: '16px' }}>
            <label className="field">
              <span className="field__label">Choisissez votre nom</span>
              <input
                className={'input' + (error ? ' has-error' : '')}
                type="text"
                autoCapitalize="words"
                autoComplete="off"
                placeholder="ex. Philéas Fogg"
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
                Créez un code · {PIN_MIN} à {PIN_MAX} chiffres
              </span>
              <input
                className={'input' + (error ? ' has-error' : '')}
                type="text"
                inputMode="numeric"
                autoComplete="off"
                placeholder="ex. 1837"
                value={pin}
                onChange={(e) => onPinChange(e.target.value)}
                aria-invalid={!!error}
              />
              <span className="faint" style={{ display: 'block', marginTop: 8, fontSize: '0.78rem' }}>
                Il protège l’accès à votre profil sur cet appareil.
              </span>
            </label>
            {error && <p className="form-error">{error}</p>}
            <button
              type="submit"
              className="btn btn--primary btn--block"
              disabled={busy || !pseudo.trim() || pin.length < PIN_MIN}
            >
              {busy ? 'Un instant…' : 'Créer mon profil'}
            </button>
          </form>

          {players.length > 0 && (
            <div style={{ marginTop: 34 }}>
              <p className="eyebrow center" style={{ marginBottom: 14 }}>
                Profils sur cet appareil
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
                      <span className="rank-row__title">{playerTitle(p)}</span>
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
              Entrez votre code d’accès
            </p>
          </div>
          <label className="field">
            <span className="field__label">Code</span>
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
            {busy ? 'Vérification…' : 'Déverrouiller'}
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
            ← Retour
          </button>
        </form>
      )}

      {view === 'saved' && (
        <div className="stack" style={{ ['--gap' as string]: '16px' }}>
          <div className="center">
            <p className="eyebrow">Profil créé</p>
            <h2 className="serif" style={{ fontSize: '1.4rem', margin: '6px 0 4px' }}>
              Notez votre code
            </h2>
            <p className="muted" style={{ fontSize: '0.88rem', maxWidth: 300, margin: '0 auto 14px' }}>
              Il vous sera demandé pour rouvrir le profil «&nbsp;{pseudo}&nbsp;».
              Conservez-le précieusement.
            </p>
            <div className="pincode">{createdPin}</div>
          </div>
          <button type="button" className="btn btn--ghost btn--block" onClick={copyPin}>
            {copied ? 'Copié ✓' : 'Copier le code'}
          </button>
          <label className="field">
            <span className="field__label">Recevoir le code par email (facultatif)</span>
            <input
              className="input"
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="vous@exemple.fr"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) setError(null)
              }}
            />
            <span className="faint" style={{ display: 'block', marginTop: 8, fontSize: '0.78rem' }}>
              Utilisée une seule fois pour vous envoyer le code — jamais enregistrée.
            </span>
          </label>
          <button type="button" className="btn btn--ghost btn--block" onClick={sendByEmail}>
            Envoyer le code par email
          </button>
          {error && <p className="form-error">{error}</p>}
          <button
            type="button"
            className="btn btn--primary btn--block"
            onClick={() => openDirect(createdId, createdPin)}
            disabled={busy}
          >
            {busy ? 'Un instant…' : 'Entrer dans le cercle'}
          </button>
        </div>
      )}
    </div>
  )
}
