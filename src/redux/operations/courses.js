import {
  getCoursesListRequest,
  getCoursesListSuccess,
  getCoursesListError,
} from '../actions/courses'
import axios from 'axios'

axios.defaults.baseURL = `http://localhost:4344`
console.log(axios.defaults.baseURL)

// export const getAllCourses = (credentials) => (dispatch) => {
//   console.log(credentials)
//   dispatch(getCoursesListRequest())
//   return axios
//     .get('/courses')
//     .then((response) => {
//       console.log(response.data)
//       dispatch(getCoursesListSuccess(response.data))
//     })
//     .catch((error) => {
//       dispatch(getCoursesListError(error))
//     })
// }
export const getAllCourses = (credentials) => async (dispatch) => {
  dispatch(getCoursesListRequest())
  try {
    const response = await axios.get('/courses')
    console.log(response.data)
    dispatch(getCoursesListSuccess(response.data))
  } catch (error) {
    dispatch(getCoursesListError(error))
  }
}
