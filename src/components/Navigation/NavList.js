import { NavLink } from 'react-router-dom'
import './NavList.scss'
import logo from '../../images/logo/logo.svg'
import links from '../../routes/links.json'
console.log(links)

export function NavList({ classList, classItem, classLink }) {
  return (
    <ul className={classList}>
      {links.map((link) => (
        <li className={classItem} key={link.id}>
          {link.name.toLowerCase().includes('space') ? (
            <NavLink
              className={classLink}
              to={link.path}
              exact={link.exact}
            >
              <img src={logo} alt="logo" width="64" />
            </NavLink>
          ) : (
            <NavLink className={classLink} to={link.path} exact={link.exact}>
              {link.name}
            </NavLink>
          )}
          {/* <NavLink className={classLink} to={link.path} exact={link.exact}>
            {link.name}
          </NavLink> */}
        </li>
      ))}
    </ul>
  )
}
