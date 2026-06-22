import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePlayer } from '../lib/PlayerContext'
import { playerTitle } from '../lib/players'

export default function Login() {
  const { loginNew, resume, players } = usePlayer()
  const navigate = useNavigate()
  const [pseudo, setPseudo] = useState('')
  const [error, setError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const res = loginNew(pseudo)
    if (res.ok) {
      navigate('/accueil', { replace: true })
    } else {
      setError(res.error ?? 'Une erreur est survenue.')
    }
  }

  function handleResume(id: string) {
    resume(id)
    navigate('/accueil', { replace: true })
  }

  return (
    <div className="screen screen--centered">
      <div className="center" style={{ marginBottom: 36 }}>
        <div className="brandmark">
          <span className="brandmark__monogram">É</span>
        </div>
        <h1 className="display" style={{ marginTop: 18 }}>
          L’Étiquette
        </h1>
        <hr className="rule rule--center" />
        <p className="lead" style={{ maxWidth: 300, margin: '0 auto' }}>
          Maîtrisez l’art du savoir-vivre à la française&nbsp;— et devenez
          Gentleman.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="stack" style={{ ['--gap' as string]: '16px' }}>
        <label className="field">
          <span className="field__label">Choisissez votre nom</span>
          <input
            className={'input' + (error ? ' has-error' : '')}
            type="text"
            inputMode="text"
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
        {error && <p className="form-error">{error}</p>}
        <button type="submit" className="btn btn--primary btn--block" disabled={!pseudo.trim()}>
          Entrer dans le cercle
        </button>
      </form>

      {players.length > 0 && (
        <div style={{ marginTop: 34 }}>
          <p className="eyebrow center" style={{ marginBottom: 14 }}>
            Reprendre une session
          </p>
          <div className="list">
            {players.map((p) => (
              <button
                key={p.id}
                type="button"
                className="rank-row"
                style={{ width: '100%', textAlign: 'left' }}
                onClick={() => handleResume(p.id)}
              >
                <span className="brandmark__monogram" style={{ width: 40, height: 40, fontSize: '1.1rem' }}>
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
                  ›
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
