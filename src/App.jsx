import Aos from "aos"
import "aos/dist/aos.css"
import Appbar from "./components/appbar"
import Contact from "./sections/Contact"
import About from "./sections/about"
import Intro from "./sections/intro"
import Projects from "./sections/projects"
import TechStack from "./sections/techStack"
import Footer from "./components/footer"

const App = () => {
  Aos.init({
    duration: 800,
  })
  return (
    <div style={{minHeight:"100vh", backgroundColor:"#fafafa"}}>
      <Appbar />
      <Intro />
      <TechStack />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App