import './Hero.scss'
// import { Icons } from '../../images/icons/Icons'
import hero from '../../images/icons/hero.svg'
// import heroLeft from '../../images/icons/hero-left.svg'
// import jobHand from '../../images/jobhand.svg'
// import c from '../../images/c.png'
// import s from '../../images/s.png'
// import t from '../../images/t.png'
// import tsm from '../../images/t-small.png'
// import sr from '../../images/s-red.png'
import lines from '../../images/lines.svg'
// import js from '../../images/js.png'
// import react from '../../images/react.png'
// import node from '../../images/node.png'
// import redux from '../../images/redux.png'
// import sass from '../../images/sass.png'
// import vs from '../../images/vs.png'
// import v8 from '../../images/v8.png'
// import html from '../../images/html.png'

// import back from '../../images/s-red.png'

// import logo from '../../images/logo/darkLogo.svg'

export function Hero() {
  return (
    <section id="content" className="page-wrapper" tabIndex="-1">
      {/* <a href="/career" className="landingpage-badge">
        <div className="landingpage-badge__circle">
          <img
            src={jobHand}
            alt="job hand"
            className="landingpage-badge__rock-fingers"
          />
          <img src={heroLeft} alt="hero left" />
        </div>
      </a> */}

      <div className="intro">
        <div className="intro__center">
          <div className="intro__lines" aria-hidden="true">
            <img src={lines} alt="lines" className="layer" />
          </div>
          <div className="keyvisual">
            <img src={hero} alt="" />
          </div>
          <div className="intro-type">
            <div className="intro-type__slogan">
              {/* <Icons name="hero" color="white" /> */}
              {/* <h1>CYBER SPACE TECHNOLOGY</h1> */}
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
              {/* <img src={back} alt="flying smthng" width="64" /> */}
            </div>
            <div className="parallax__layer">
              {/* <img src={node} alt="flying smthng" width="128" /> */}
            </div>
            <div className="parallax__layer">
              {/* <img src={redux} alt="flying smthng" width="64" /> */}
            </div>
            <div className="parallax__layer">
              {/* <img src={logo} alt="flying smthng" width="64" /> */}
            </div>
            <div className="parallax__layer">
              {/* <img src={sass} alt="flying smthng" width="64" /> */}
            </div>
            <div className="parallax__layer">
              {/* <img src={js} alt="flying smthng" width="64" /> */}
            </div>
            <div className="parallax__layer">
              {/* <img src={v8} alt="flying smthng" width="64" /> */}
            </div>
            <div className="parallax__layer">
              {/* <img src={html} alt="flying smthng" width="64" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
