import { useState, Component, createRef } from 'react'
import { NavLink } from 'react-router-dom'
import links from '../../routes/links.json'
import './About.scss'

// const sliderData = [
//   {
//     index: 0,
//     accent: 'Cyber Space Technology',
//     content:
//       ' - це необмежений простір, в якому пізнають та навчаються створювати футуристичні новітні проекти. Світ змінюється кожну мить, ми повинні знати у якому саме напрямку, розуміти істину змін, опановувати їх та творити технологічно-інформаційну синергію.',
//     button: 'Більше',
//     src: 'https://www.legalbites.in/wp-content/uploads/2020/03/cyber-space.jpg',
//   },
//   {
//     index: 1,
//     accent: 'Cyber MASTER',
//     content:
//       ' - програми для дорослих, що вирішили кардинально змінити діяльність або спеціалісти що бажають підвищити свій існуючий рівень, створені за потребами сучасного ринку IT. Кожен отримає все необхідне, щоб після навчання отримати завітний оффер, адже ведучі рекрутери завжди з нами!',
//     button: 'Більше',
//     src:
//       'https://i0.wp.com/nypost.com/wp-content/uploads/sites/2/2017/09/feature.jpg?quality=80&strip=all&ssl=1',
//   },
//   {
//     index: 2,
//     accent: 'Cyber KIDS ',
//     content:
//       " - дитячі програми розвинуть здібності та таланти, сформують надійний фундамент для подальших досягнень вашої дитини. У Cyber Space Kids вже з дев'яти років маленькі генії опановують безмежний простір технологій, пізнають та підкорюють цифровий всесвіт. Для них це захоплююча подорож у всесвіт в якому людина та технології створюють шедеври!",
//     button: 'Більше',
//     src:
//       'https://img1.wallspic.com/originals/8/1/1/4/6/164118-astronaut_phone-astronaut-astronomical_object-art-liquid-2160x3840.jpg',
//   },
//   {
//     index: 3,
//     accent: 'Get started! ',
//     content:
//       'Все починається з малого, з простого бажання пізнати технологію, саме тому Cyber Space Technology створили адаптивні курси, які дадуть змогу опанувати сферу IT та прокласти свій шлях у цифрове майбутнє кожному бажаючому!',
//     button: 'Більше',
//     src:
//       'https://media.istockphoto.com/vectors/lets-get-started-neon-style-design-elements-vector-id1203621233?k=20&m=1203621233&s=612x612&w=0&h=ddaJAJWwr73W_YWURU24Re-W8DmKszZ_0FhcXn2BKgc=',
//   },
// ]

class Slide extends Component {
  constructor(props) {
    super(props)

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
    this.slide = createRef()
  }

  handleMouseMove(event) {
    const el = this.slide.current
    const r = el.getBoundingClientRect()

    el.style.setProperty(
      '--x',
      event.clientX - (r.left + Math.floor(r.width / 2)),
    )
    el.style.setProperty(
      '--y',
      event.clientY - (r.top + Math.floor(r.height / 2)),
    )
  }

  handleMouseLeave(event) {
    this.slide.current.style.setProperty('--x', 0)
    this.slide.current.style.setProperty('--y', 0)
  }

  handleSlideClick(event) {
    this.props.handleSlideClick(this.props.slide.index)
  }

  imageLoaded(event) {
    event.target.style.opacity = 1
  }

  render() {
    const { src, accent, content, index } = this.props.slide
    const current = this.props.current
    let classNames = 'slide'

    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'

    return (
      <li
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="slide__image-wrapper">
          <img
            className="slide__image"
            alt={accent}
            src={src}
            onLoad={this.imageLoaded}
          />
        </div>

        <article className="slide__content">
          <h2 className="slide__headline">
            <NavLink to="/">{accent}</NavLink>
            <span>{content}</span>
          </h2>
          {/* <button className="slide__action btn">{button}</button> */}
        </article>
      </li>
    )
  }
}

// =========================
// Slider control
// =========================

const SliderControl = ({ type, title, handleClick }) => {
  return (
    <button className={`btn btn--${type}`} title={title} onClick={handleClick}>
      <svg className="icon" viewBox="0 0 24 24">
        <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
      </svg>
    </button>
  )
}

// =========================
// Slider
// =========================
const heading = 'title'
const aboutLinks = links.filter((el) => el.sliderData.inAbout)
export class Slider extends Component {
  constructor(props) {
    super(props)

    this.state = { current: 0 }
    this.handlePreviousClick = this.handlePreviousClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
  }

  handlePreviousClick() {
    const previous = this.state.current - 1

    this.setState({
      current: previous < 0 ? aboutLinks.length - 1 : previous,
    })
  }

  handleNextClick() {
    const next = this.state.current + 1

    this.setState({
      current: next === aboutLinks.length ? 0 : next,
    })
  }

  handleSlideClick(index) {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      })
    }
  }

  render() {
    const { current } = this.state
    // const { slides, heading } = this.props;
    // console.log(slides, heading);
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, '-')
      .toLowerCase()}`
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / links.length)}%)`,
    }

    return (
      <div className="slider" aria-labelledby={headingId}>
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} className="visuallyhidden">
            {heading}
          </h3>
          {links.map((el) => {
            console.log(el)
            if (el.sliderData.inAbout) {
              // {sliderData.map((slide) => {
              return (
                <Slide
                  key={el.id}
                  slide={el.sliderData}
                  current={current}
                  handleSlideClick={this.handleSlideClick}
                  // key={slide.index}
                  // slide={slide}
                  // current={current}
                  // handleSlideClick={this.handleSlideClick}
                />
              )
              // })}
            }
          })}
        </ul>

        <div className="slider__controls">
          <SliderControl
            type="previous"
            title="Go to previous slide"
            handleClick={this.handlePreviousClick}
          />

          <SliderControl
            type="next"
            title="Go to next slide"
            handleClick={this.handleNextClick}
          />
        </div>
      </div>
    )
  }
}
