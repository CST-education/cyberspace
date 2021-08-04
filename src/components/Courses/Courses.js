import './Courses.scss'
import { Component } from 'react'
import axios from 'axios'
const baseUrl = `http://localhost:4344`
let endPoint = `/courses`
axios.defaults.baseURL = baseUrl

console.dir(axios)

export class Courses extends Component {
  state = {}
  componentDidMount() {
    axios
      .get(endPoint)
      .then((response) => {
        console.log(response)
        return response.data
      })
      .then((data) => {
        console.log(data)
        this.setState({ ...data })
      })
  }
  render() {
    const { headeDescription, headline, subtitle, courseslist } = this.state
    console.log(courseslist)
    return (
      <section className="courses">
        <div className="headline-group">
          <h2 className="headline-group__subline">
            <span>{subtitle}</span>
          </h2>
          <h1 className="headline-group__headline">{headline}</h1>
          <p className="headline-group__description">{headeDescription}</p>
        </div>
        <ul className="l-single-column">
          {courseslist &&
            courseslist.map((course) => {
              const { id, description, title, tags } = course
              const {
                what,
                whom,
                process,
                benefit,
                extensions,
                workLink,
                prices,
              } = description

              return (
                <li className="multi-teaser" key={id}>
                  <div className="multi-teaser__description">
                    <p>
                      <span className="multi-teaser__description-title">
                        Що це?
                      </span>
                      {what}
                    </p>

                    <p>
                      <span className="multi-teaser__description-title">
                        Для кого це?
                      </span>
                      {whom}
                    </p>
                    <p>
                      <p className="multi-teaser__description-title">
                        Як це відбувається?
                      </p>
                      {process}
                    </p>
                    <p>
                      <p className="multi-teaser__description-title">
                        Що це мені надає?
                      </p>
                      {benefit}
                      {workLink && (
                        <a
                          className="flicker-link"
                          href={workLink.path}
                          rel="nonopener"
                        >
                          {workLink.linkTitle}
                        </a>
                      )}
                    </p>
                    <p>
                      <p className="multi-teaser__description-title">
                        Який розвиток далі?
                      </p>
                      {extensions}
                    </p>
                    <p>
                      <p className="multi-teaser__description-title">
                        Скільки це коштує?
                      </p>
                      {/* {prices.byMonth},{prices.pieces},{prices.fullYear}, */}
                    </p>
                  </div>
                  <div className="multi-teaser__notes">
                    <h3 className="multi-teaser__notes-headline">{title}</h3>
                    <ul className="multi-teaser__tags">
                      {tags.map((tag) => {
                        return <li>{tag}</li>
                      })}
                    </ul>
                  </div>
                </li>
              )
            })}
        </ul>
      </section>
    )
  }
}
