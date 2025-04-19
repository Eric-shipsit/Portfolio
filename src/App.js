import './App.css';

import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {

  return (
    <div className="App">
        <main>
          <Navbar/>
          <div className="responsive-div">
            <Hero/>
            <Experience/>
            <AboutMe/>
            <Projects/>
            <Skills/>
            <Contact/>
          </div>
        </main>
    </div>
  );
}

export default App;
