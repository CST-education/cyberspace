import { configureStore } from '@reduxjs/toolkit'
import { coursesReducer } from './reducers/courses.js'
import { blogReducer } from './reducers/blog.js'
import { projectsReducer } from './reducers/projects.js'
const store = configureStore({
  reducer: {
    courses: coursesReducer,
    blog: blogReducer,
    projects: projectsReducer,
  },
})
export default store
