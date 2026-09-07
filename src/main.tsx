import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { I18nProvider } from './lib/i18n'
import { PlayerProvider } from './lib/PlayerContext'
import './index.css'

// I18nProvider englobe PlayerProvider : ce dernier traduit ses messages
// d'erreur et l'ordre garantit que la langue est connue avant le premier appel.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <I18nProvider>
        <PlayerProvider>
          <App />
        </PlayerProvider>
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>,
)
