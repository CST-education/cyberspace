import { Component, createRef } from 'react'
import { NavLink } from 'react-router-dom'
import links from '../../routes/links.json'
import './About.scss'
import { AnimateBorderCard } from '../Cards/AnimateBorderCard'

class Slide extends Component {
  constructor(props) {
    super(props)

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.handleSlideClick = this.handleSlideClick.bind(this)
    this.imageLoaded = this.imageLoaded.bind(this)
    this.slide = createRef()
  }

  handleMouseMove = (e) => {
    const el = this.slide.current
    const r = el.getBoundingClientRect()

    el.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
  }

  handleMouseLeave = (e) => {
    this.slide.current.style.setProperty('--x', 0)
    this.slide.current.style.setProperty('--y', 0)
  }
  handleSlideClick = (e) => {
    this.props.handleSlideClick(this.props.slide.index)
  }
  imageLoaded = (e) => {
    e.target.style.opacity = 1
  }

  render() {
    const { src, accent, content, index } = this.props.slide
    const current = this.props.current
    let classNames = 'slide'

    if (current === index) classNames += ' slide--current'
    else if (current - 1 === index) classNames += ' slide--previous'
    else if (current + 1 === index) classNames += ' slide--next'

    return (
      <AnimateBorderCard
        ref={this.slide}
        className={classNames}
        onClick={this.handleSlideClick}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
        currentSelector="mainItem"
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
      </AnimateBorderCard>
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

  handlePreviousClick = () => {
    const previous = this.state.current - 1
    this.setState({
      current: previous < 0 ? aboutLinks.length - 1 : previous,
    })
  }

  handleNextClick = () => {
    const next = this.state.current + 1
    this.setState({
      current: next === aboutLinks.length ? 0 : next,
    })
  }

  handleSlideClick = (index) => {
    if (this.state.current !== index) {
      this.setState({
        current: index,
      })
    }
  }

  render() {
    const { current } = this.state
    const headingId = `slider-heading__${heading
      .replace(/\s+/g, '-')
      .toLowerCase()}`
    const wrapperTransform = {
      transform: `translateX(-${current * (100 / aboutLinks.length)}%)`,
    }

    return (
      <div className="slider" aria-labelledby={headingId}>
        <ul className="slider__wrapper" style={wrapperTransform}>
          <h3 id={headingId} className="visuallyhidden">
            {heading}
          </h3>
          {aboutLinks.map((el) => {
            console.log(el)
            return (
              <Slide
                key={el.id}
                slide={el.sliderData}
                current={current}
                handleSlideClick={this.handleSlideClick}
              />
            )
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
