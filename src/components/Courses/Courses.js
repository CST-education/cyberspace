import './Courses.scss'
import { Component } from 'react'
import { getAllCourses } from '../../redux/operations/courses'
import { connect } from 'react-redux'
// import axios from 'axios'
// const baseUrl = `http://localhost:4344`
// let endPoint = `/courses`
// axios.defaults.baseURL = baseUrl

// console.dir(axios)

class Courses extends Component {
  state = {}
  componentDidMount() {
    this.props.getFetchAllCourses()
    // axios
    //   .get(endPoint)
    //   .then((response) => {
    //     console.log(response)
    //     return response.data
    //   })
    //   .then((data) => {
    //     console.log(data)
    //     this.setState({ ...data })
    //   })
  }
  render() {
    const { description, headline, subtitle, courseslist } = this.state
    console.log(courseslist)
    return (
      <section className="courses">
        <div className="headline-group">
          <h2 className="headline-group__subline">
            <span>{subtitle}</span>
          </h2>
          <h1 className="headline-group__headline">{headline}</h1>

          <p className="headline-group__description">{description}</p>
        </div>
        <ul className="l-single-column">
          {courseslist &&
            courseslist.map((course) => {
              const { description, link, title, tags } = course
              return (
                <li className="multi-teaser">
                  <p className="multi-tesear__description">
                    {description}
                    <a className="flicker-link" href="" rel="nonopener">
                      {link}
                    </a>
                  </p>
                  <div className="multi-tesear__notes">
                    <h3 className="multi-tesear__notes-headline">{title}</h3>
                    <ul className="multi-tesear__tags">
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
// const mapStateToProps = {}
const mapDispatchToProps = {
  getFetchAllCourses: getAllCourses,
}
export default connect(null, mapDispatchToProps)(Courses)
