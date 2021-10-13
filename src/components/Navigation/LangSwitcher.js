import './NavList.scss'
export function LangSwitcher() {
  return (
    <nav className="langSwitch">
      <ul className="languages">
        <li className="item">
          <a className="link" href="/">
            <span>Укр</span>
            <span>UA</span>
          </a>
        </li>
        <li className="item">
          <a className="link" href="/">
            <span>Рус</span>
            <span>RU</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
