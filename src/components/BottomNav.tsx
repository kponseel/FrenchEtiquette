import { NavLink } from 'react-router-dom'
import { HomeIcon, TrophyIcon, UserIcon } from './icons'
import { useT, type TranslationKey } from '../lib/i18n'

const items: { to: string; label: TranslationKey; Icon: typeof HomeIcon }[] = [
  { to: '/accueil', label: 'nav.modules', Icon: HomeIcon },
  { to: '/classement', label: 'nav.leaderboard', Icon: TrophyIcon },
  { to: '/profil', label: 'nav.profile', Icon: UserIcon },
]

export default function BottomNav() {
  const t = useT()

  return (
    <nav className="bottomnav" aria-label={t('nav.aria')}>
      {items.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            'bottomnav__item' + (isActive ? ' is-active' : '')
          }
        >
          <Icon />
          <span>{t(label)}</span>
        </NavLink>
      ))}
    </nav>
  )
}
