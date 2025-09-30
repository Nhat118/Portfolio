import React, { useState, useEffect } from 'react';
import './App.css';
import PreLoader from './Components/PreLoader/PreLoader';
import Navbar from './Components/Navbar.jsx';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Languages from './Components/Languages';
import Education from './Components/Education';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000); // 6 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading && <PreLoader />}
      <Navbar />
      <main className="main-content">
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="languages">
          <Languages />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
