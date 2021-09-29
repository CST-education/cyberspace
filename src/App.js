import { Suspense } from 'react'
import { routes } from './routes'
import { Switch, Route } from 'react-router'
import { Container } from './components/Container/Container'
import { Navigation } from './components/Navigation/Navigation'
import { Footer } from './components/Footer/Footer'
import './App.css'

console.log(routes)

function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Suspense fallback="load...">
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </Suspense>
      <Container>
        <Footer />
      </Container>
    </div>
  )
}

export default App
