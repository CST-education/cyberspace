// import logo from './logo.svg'
import "./App.css";
import Container from "./components/Container/Container";
import { Navigation } from "./components/Navigation/Navigation";
// import { MainMenu } from './components/Navigation/MainMenu'
// import { LangSwitcher } from './components/Navigation/LangSwitcher'
import { Slider } from "./components/About/About";
import { Courses } from "./components/Courses/Courses";

// import logo1 from './images/logo/CS Tech Darkblue logo Sign — копия.svg'
// import logo2 from './images/logo/CS Tech Darkblue logo Sign.svg'
// import logo3 from './images/logo/CS Tech Darkblue logo.svg'
// import logo4 from './images/logo/lightLogo.svg'
// import logo5 from './images/logo/CS Tech Lightblue logo.svg'

import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Container>
        <Navigation />
      </Container>
      <Container>
        <Hero />
      </Container>
      <Container>
        <Slider />
      </Container>
      <Container>
        <Courses />
      </Container>
      {/* <MainMenu /> */}
      {/* <LangSwitcher /> */}
      <Container>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
