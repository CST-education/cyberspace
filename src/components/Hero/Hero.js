import './Hero.scss'
import logo from '../../images/logo/logo.svg'

export function Hero() {
  return (
    <section id="content" className="page-wrapper" tabIndex="-1">
      <div className="intro">
        <div className="intro__center">
          <img src={logo} alt="logo" />
          <p className="intro-type__second intro-type__small">
            Development with Love! <br />
            Education with Pleasure!
          </p>
        </div>
      </div>
    </section>
  )
}
