import { v4 as idb } from 'uuid'
import './Courses.scss'
import { Component } from 'react'
import { getAllCourses } from '../../redux/operations/courses'
import { connect } from 'react-redux'
import {
  getCoursesArray,
  getCoursesDescription,
  getCoursesSubTitle,
  getCoursesHeadline,
} from '../../redux/ selectors/courses'
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
    // const { description, headline, subtitle, courseslist } = this.state
    // console.log(courseslist)
    const { coursesList, description, headline, subTitle } = this.props
    console.log(coursesList)
    return (
      <section className="courses">
        <div className="headline-group">
          <h2 className="headline-group__subline">
            <span>{subTitle}</span>
          </h2>
          <h1 className="headline-group__headline">{headline}</h1>

          <p className="headline-group__description">{description}</p>
        </div>
        <ul className="l-single-column">
          {coursesList &&
            coursesList.map((course) => {
              const { id, description, link, title, tags } = course
              return (
                <li key={id} className="multi-teaser">
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
                        return <li key={idb()}>{tag}</li>
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
const mapStateToProps = (state) => {
  return {
    coursesList: getCoursesArray(state),
    subTitle: getCoursesSubTitle(state),
    headline: getCoursesHeadline(state),
    description: getCoursesDescription(state),
  }
}
const mapDispatchToProps = {
  getFetchAllCourses: getAllCourses,
}
export default connect(mapStateToProps, mapDispatchToProps)(Courses)
