 
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Team from './components/team/team'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'
import   { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <> 
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Contact />
      <Projects />
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </>
  )
}

export default App
