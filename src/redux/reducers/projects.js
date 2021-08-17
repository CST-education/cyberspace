import { combineReducers, createReducer } from '@reduxjs/toolkit'
const initState = []
const projectsDataReducer = createReducer(initState, {})
const projectsErrorReducer = createReducer(null, {})
export const projectsReducer = combineReducers({
  data: projectsDataReducer,
  error: projectsErrorReducer,
})
