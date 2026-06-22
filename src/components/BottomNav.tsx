import { NavLink } from 'react-router-dom'
import { HomeIcon, TrophyIcon, UserIcon } from './icons'

const items = [
  { to: '/accueil', label: 'Modules', Icon: HomeIcon },
  { to: '/classement', label: 'Classement', Icon: TrophyIcon },
  { to: '/profil', label: 'Profil', Icon: UserIcon },
]

export default function BottomNav() {
  return (
    <nav className="bottomnav" aria-label="Navigation principale">
      {items.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            'bottomnav__item' + (isActive ? ' is-active' : '')
          }
        >
          <Icon />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
