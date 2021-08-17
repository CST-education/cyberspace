import { createReducer } from '@reduxjs/toolkit'
import {
  getCoursesListRequest,
  getCoursesListSuccess,
  getCoursesListError,
} from '../actions/courses'
const initState = {}
export const coursesReducer = createReducer(initState, {
  [getCoursesListRequest]: (state, action) => {
    console.log(`request`, state, action)
  },
  [getCoursesListSuccess]: (state, action) => {
    console.log(`success`, state, action)
    console.log(action.payload)
    return action.payload
  },
  [getCoursesListError]: (state, action) => {
    console.log(`error`, state, action)
  },
})
