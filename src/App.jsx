import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  useEffect(function() {
    const host = window.location.hostname;
    if (host !== 'localhost' && host !== '127.0.0.1') {
      alert('This website only works on localhost!');
      window.location.href = 'http://localhost:5173';
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;

