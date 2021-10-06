import './Footer.scss'
import { Icons } from '../../components/Icons'
// import logo from '../../images/logo/CS Tech Darkblue logo Sign.svg'
// import logo2 from '../../images/logo/CS Tech Lightblue logo Sign.svg'
// import logo1 from '../../images/logo/CS Tech Darkblue logo.svg'
// import logo3 from '../../images/logo/CS Tech Lightblue logo.svg'
import footerLogo from '../../images/logo/footerLogo.svg'

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__brand">
        <img src={footerLogo} alt="footer logo" />
      </div>

      <nav
        id="navigation"
        role="navigation"
        aria-label="Main"
        className="footer-menu"
      >
        <ul className="footer-menu__main-menu">
          <li className="footer-menu_main-item">
            <a href="/">cyber space</a>
            <ul className="footer-menu__submenu">
              <li className="footer-menu__sub-item">
                <a href="/cyber-team">cyber team</a>
              </li>
              <li className="footer-menu__sub-item">
                <a href="/cyber-contacts">cyber contacts</a>
              </li>
            </ul>
          </li>
          <li className="footer-menu_main-item">
            <a href="/cyber-masters">cyber masters</a>
          </li>
          <li className="footer-menu_main-item">
            <a href="/cyber-kids">cyber kids</a>
          </li>
        </ul>
      </nav>

      <address className="footer__address">
        <p className="locality">Київ</p>
        <p className="street-address">вул. Почайнинська, 35</p>
        <p className="country-name">Україна</p>
        <a href="tel:+38066288100">+38 066 2 888 100</a> <br />
        <a href="mailto:cyberspace4us@gmail.com">cyberspace4us@gmail.com</a>
      </address>

      <div className="footer__social-media">
        <a href="/twitter" aria-label="CSTonTwitter">
          <Icons name="twitter-icon" color="white" />
        </a>
        <a href="/facebook" aria-label="CSTonFacebook">
          <Icons name="facebook-icon" color="white" />
        </a>
        <a href="/instagram" aria-label="CSTonInstagram">
          <Icons name="instagram-icon" color="white" />
        </a>
        <a href="/youtube" aria-label="CSTonTwitter">
          <Icons name="youtube-icon" color="white" />
        </a>
        <a href="/dribbble" aria-label="CSTonDribbble">
          <Icons name="dribbble-icon" color="white" />
        </a>
        <a href="/github" aria-label="CSTonGithub">
          <Icons name="github-icon" color="white" />
        </a>
      </div>

      <div className="footer__subline">
        <p>&copy; 2021 Cyber Space Technology</p>
      </div>
    </footer>
  )
}
