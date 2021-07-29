import s from './Navigation.module.scss'
export function LangSwitcher() {
  return (
    <nav className={s.langSwitch}>
      <ul className={s.languages}>
        <li className={s.item}>
          <a className={s.link}>
            <span>Укр</span>
            <span>UA</span>
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link}>
            <span>Рус</span>
            <span>RU</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
