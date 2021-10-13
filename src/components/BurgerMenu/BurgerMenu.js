import logo from '../../images/logo/logo.svg'
import burger from '../../images/icons/burger.svg'
import './BurgerMenu.css'
export function BurgerMenu({ children }) {
  return (
    <div className="burgerMenu">
      <input id="menuToggle" type="checkbox" />
      <label className="menuBtn" htmlFor="menuToggle">
        <span></span>
        {/* <img src={logo} alt="logo" width="64" /> */}
        {/* <img src={burger} alt="burger" width="64" /> */}
      </label>
      {children}
    </div>
  )
}
