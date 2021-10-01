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
        <img src={footerLogo} alt="" />
      </div>

      <nav
        id="navigation"
        role="navigation"
        aria-label="Main"
        className="footer-menu"
      >
        <ul className="footer-menu__main-menu">
          <li className="footer-menu_main-item">
            <a href="/">головна</a>
          </li>
          <li className="footer-menu_main-item">
            <a href="/projects">проекти</a>
          </li>
          <li className="footer-menu_main-item">
            <a href="/company">про компанію</a>
            <ul className="footer-menu__submenu">
              <li className="footer-menu__sub-item">
                <a href="/team">команда</a>
              </li>
              <li className="footer-menu__sub-item">
                <a href="/career">кар'єра</a>
              </li>
            </ul>
          </li>
          <li className="footer-menu_main-item">
            <a href="/how-we-work">how we work</a>
            <ul className="footer-menu__submenu">
              <li className="footer-menu__sub-item">
                <a href="/technologies">technologies</a>
              </li>
              <li className="footer-menu__sub-item">
                <a href="/courses">курси</a>
              </li>
            </ul>
          </li>
          <li className="footer-menu_main-item">
            <a href="/blog">blog</a>
          </li>
          <li className="footer-menu_main-item">
            <a href="/press">press</a>
          </li>
          <li className="footer-menu_main-item">
            <a href="/contact">contact</a>
          </li>

          <li className="footer-menu_main-item">
            <a href="/security">security</a>
          </li>

          <li className="footer-menu_main-item">
            <a href="/design">design</a>
          </li>
        </ul>
      </nav>

      <address className="footer__address">
        <p className="street-address">проспект Героїв Сталінграда 6 корпус 2</p>
        <p className="postal-code">04211</p>
        <p className="locality">Київ</p>
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
