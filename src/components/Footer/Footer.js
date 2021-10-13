import './Footer.scss'
import { Icons } from '../../components/Icons'
import footerLogo from '../../images/logo/footerLogo.svg'
import { NavList } from '../Navigation/NavList'
import links from '../../routes/links.json'
import { NavLink } from 'react-router-dom'

export function Footer() {
  const link = links.find((link) => link.name.toLowerCase().includes('space'))
  return (
    <>
      <div className="footer__info">
        <div className="footer__brand">
          {link ? (
            <NavLink to={link.path} exact={link.exact}>
              <img src={footerLogo} alt="footer logo" />
            </NavLink>
          ) : (
            <img src={footerLogo} alt="logo" />
          )}
        </div>

        <nav
          id="navigation"
          role="navigation"
          aria-label="Main"
          className="footer-menu"
        >
          <NavList classList={'navListFooter'} classItem={'item'} />
        </nav>

        <address className="footer__address">
          <a href="tel:+38066288100">+38 066 2 888 100</a> <br />
          <a href="mailto:cyberspace4us@gmail.com">cyberspace4us@gmail.com</a>
          <p className="street-address">Київ, вул. Почайнинська, 35</p>
        </address>
      </div>
      <ul className="footer__social-media">
        <li>
          <a
            href="https://twitter.com/cybersp21773870"
            aria-label="CSTonTwitter"
          >
            <Icons name="twitter-icon" color="white" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/cyberspace4us"
            aria-label="CSTonFacebook"
          >
            <Icons name="facebook-icon" color="white" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/cyberspace4us/"
            aria-label="CSTonInstagram"
          >
            <Icons name="instagram-icon" color="white" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCm4PBzBONutFJdW9zyCzK2w"
            aria-label="CSTonTwitter"
          >
            <Icons name="youtube-icon" color="white" />
          </a>
        </li>
      </ul>

      <div className="footer__subline">
        <p>&copy; 2021 Cyber Space Technology</p>
      </div>
    </>
  )
}
