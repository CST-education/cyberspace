import { NavLink } from 'react-router-dom'
import s from './Navigation.module.scss'

import links from '../../routes/links.json'
console.log(links)
export function Navigation() {
  return (
    <nav className={s.topNav}>
      <ul className={s.navList}>
        {links.map((link) => (
          <li className={s.item} key={link.id}>
            <NavLink className={s.link} to={link.path} exact={link.exact}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
