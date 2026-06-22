import { Navigate, Route, Routes } from 'react-router-dom'
import { usePlayer } from './lib/PlayerContext'
import Login from './pages/Login'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Certificate from './pages/Certificate'
import Leaderboard from './pages/Leaderboard'
import Profile from './pages/Profile'
import type { JSX } from 'react'

function RequireAuth({ children }: { children: JSX.Element }) {
  const { player } = usePlayer()
  return player ? children : <Navigate to="/" replace />
}

function RootRedirect() {
  const { player } = usePlayer()
  return player ? <Navigate to="/accueil" replace /> : <Login />
}

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route
          path="/accueil"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/module/:id"
          element={
            <RequireAuth>
              <Quiz mode="module" />
            </RequireAuth>
          }
        />
        <Route
          path="/examen"
          element={
            <RequireAuth>
              <Quiz mode="final" />
            </RequireAuth>
          }
        />
        <Route
          path="/certificat"
          element={
            <RequireAuth>
              <Certificate />
            </RequireAuth>
          }
        />
        <Route
          path="/classement"
          element={
            <RequireAuth>
              <Leaderboard />
            </RequireAuth>
          }
        />
        <Route
          path="/profil"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}
