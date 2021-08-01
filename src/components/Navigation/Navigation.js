import s from './Navigation.module.scss'
export function Navigation() {
  return (
    <nav className={s.topNav}>
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
        </li>
        <li className={s.item}>
          <a className={s.link} href="/how-we-work">
            How we work
          </a>
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
      </ul>
    </nav>
  )
}
