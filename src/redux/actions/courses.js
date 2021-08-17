import { createAction } from '@reduxjs/toolkit'
export const getCoursesListRequest = createAction('GET_COURSES_LIST_REQUEST')
export const getCoursesListSuccess = createAction('GET_COURSES_LIST_SUCCESS')
export const getCoursesListError = createAction('GET_COURSES_LIST_ERROR')
