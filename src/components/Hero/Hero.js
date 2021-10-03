import './Hero.scss'
import logo from '../../images/logo/logo.svg'
import { SolidTitle } from '../SolidTitle/SolidTitle'

export function Hero() {
  return (
    <section id="content" className="page-wrapper" tabIndex="-1">
      <div className="intro">
        <div className="intro__center">
          <img src={logo} alt="logo" className="mainLogo"/>
          <p className="intro-type__second intro-type__small">
            {/* the world is wide
            <br /> */}
            {/* development education */}
            <SolidTitle
              // className="intro-type__second intro-type__small"
              titleText="the world is wide"
            />
            <SolidTitle
              // className="intro-type__second intro-type__small"
              titleText="development"
            />
            <SolidTitle
              // className="intro-type__second intro-type__small"
              titleText="education"
            />
          </p>
        </div>
      </div>
    </section>
  )
}
