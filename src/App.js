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
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <a href="/resume.pdf" download className="resume-button">
                Download Resume
              </a>
            </div>
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
