import './Hero.scss'
import { Icons } from '../../images/icons/Icons'
import hero from '../../images/icons/hero.svg'
import heroLeft from '../../images/icons/hero-left.svg'
import jobHand from '../../images/jobhand.svg'

export function Hero() {
  return (
    <section id="content" className="page-wrapper" tabIndex="-1">
      <a href="/career" className="landingpage-badge">
        <div className="landingpage-badge__circle">
          <img
            src={jobHand}
            alt="job hand"
            className="landingpage-badge__rock-fingers"
          />
          <img src={heroLeft} alt="hero left" />
        </div>
      </a>

      <div className="intro">
        <div className="intro__center">
          <div className="intro__lines" aria-hidden="true">
            <img src="" alt="lines" className="layer" />
          </div>
          <div className="keyvisual">
            <img src={hero} alt="" />
          </div>
          <div className="intro-type">
            <div className="intro-type__slogan">
              <Icons name="hero" />
            </div>
            <p className="intro-type__second intro-type__small">
              Development with Love! <br />
              Education with Pleasure!
            </p>
          </div>
        </div>

        <div className="parallax-container" aria-hidden="true">
          <div className="parallax" id="scene">
            <div className="parallax__layer">
              <img src="" alt="flying smthng" />
            </div>
            <div className="parallax__layer">
              <img src="" alt="flying smthng" />
            </div>
            <div className="parallax__layer">
              <img src="" alt="flying smthng" />
            </div>
            <div className="parallax__layer">
              <img src="" alt="flying smthng" />
            </div>
            <div className="parallax__layer">
              <img src="" alt="flying smthng" />
            </div>
            <div className="parallax__layer">
              <img src="" alt="flying smthng" />
            </div>
          </div>

        </div>
     
      </div>
    </section>
  )
}
