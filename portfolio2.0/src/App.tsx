 
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Team from './components/team/team'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'
import DW from './components/dark/dark_white' 
import   { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <> 
      <Navbar />
      <Hero />
      <About />
      <Team />
      
      <Projects />
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
<Contact />
<DW />
    </>
  )
}

export default App
