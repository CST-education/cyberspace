import s from "./Navigation.module.scss";
export function Navigation() {
  return (
    <nav className={s.topNav}>
      <ul className={s.navList}>
        {/* <li className={s.item}>
          <a className={s.link} href="/">
            На головну
          </a>
        </li> */}
        <li className={s.item}>
          <a className={s.link} href="/about">
            Про нас
          </a>
        </li>
        {/* <li className={s.item}>
          <a className={s.link} href="/company">
            Company
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/how-we-work">
            How we work
          </a>
        </li> */}
        <li className={s.item}>
          <a className={s.link} href="/courses">
            Курси
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="/contacts">
            Контакти
          </a>
        </li>
      </ul>
    </nav>
  );
}
