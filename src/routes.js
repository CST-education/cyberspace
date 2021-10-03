import { lazy } from 'react'
import links from './routes/links.json'
// console.log(links)
export const routes = links.map((link) => {
  const { id, exact, component, path, props } = link
  return {
    key: id,
    exact,
    path,
    component: lazy(() => import(`${component}`)),
    private: props.private,
    restricted: props.restricted,
  }
})
