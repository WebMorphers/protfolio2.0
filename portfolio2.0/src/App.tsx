 import './app.css'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import About from './components/about/about'
import Team from './components/team/team'
import Contact from './components/contact/contact'
import Projects from './components/projects/projects'
import   { Toaster } from 'react-hot-toast';
import  {  createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  toggletheme: () => {},
});

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
    console.log(theme)
  };

  return (
    <ThemeContext.Provider value={{ theme, toggletheme: toggleTheme }}>
    <div id={theme}>
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
    </div>
  </ThemeContext.Provider>
  )
}

export default App
