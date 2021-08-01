import s from './Navigation.module.scss'
export function MainMenu() {
  return (
    <>
    <button>M</button>
    <nav role="navigation" className={s.globalMenu}>
      <ul className={s.navList}>
        <li className={s.item}>
          <a className={s.link} href="/">
            Home
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/projects">
            Projects
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/company">
            Company
          </a>
          <ul className={s.subMenu}>
            <li className={s.subItem}>
              <a href="/team">Team</a>
            </li>
            <li className={s.subItem}>
              <a href="/career">Career</a>
            </li>
          </ul>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/how-we-work">
            How we work
          </a>
          <ul className={s.subMenu}>
            <li className={s.subItem}>
              <a href="/tehnologies">Tehnologies</a>
            </li>
          </ul>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/blog">
            Blog
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/contacts">
            Contacts
          </a>
        </li>
        <li className={s.item}>
          <a href="/security">Security</a>
          <a href="/ru">Русская версия</a>
        </li>
      </ul>
      <button className={s.menuTogal} className={s.isHidden}>
        Close Navigation
      </button>
    </nav>
    </>
  )
}
