import logo from './logo.svg'
import './App.css'
import { Navigation } from './components/Navigation/Navigation'
import { MainMenu } from './components/Navigation/MainMenu'
import { LangSwitcher } from './components/Navigation/LangSwitcher'
function App() {
  return (
    <div className="App">
      <MainMenu />
      {/* <Navigation /> */}
      {/* <LangSwitcher /> */}
    </div>
  )
}

export default App
