import Appbar from "./components/appbar"
import Contact from "./sections/Contact"
import About from "./sections/about"
import Intro from "./sections/intro"
import Projects from "./sections/projects"
import TechStack from "./sections/techStack"

const App = () => {
  return (
    <div style={{minHeight:"100vh", backgroundColor:"#fafafa"}}>
      <Appbar />
      <Intro />
      <TechStack />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App