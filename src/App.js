import { Suspense } from 'react'
import { routes } from './routes'
import { Switch, Route } from 'react-router'
import { Container } from './components/Container/Container'
import { NavList } from './components/Navigation/NavList'
import { Footer } from './components/Footer/Footer'
import './App.css'
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu'

function App() {
  return (
    <>
      <header className="app-header">
        <nav>
          <BurgerMenu>
            <NavList classList={'menuBoxMobile'} classItem={'menuItemMobile'} />
          </BurgerMenu>
          <NavList
            classList={'navList'}
            classItem={'item'}
            classLink={'link'}
          />
        </nav>
      </header>
      <main>
        {/* <Suspense fallback="load...">
        <Switch>
        {routes.map((route) => (
          <Route {...route} />
          ))}
          </Switch>
        </Suspense> */}
        {/* <Container>
      </Container> */}
      </main>
      <footer className="footer" id="footer">
        <Footer />
      </footer>
    </>
  )
}

export default App
