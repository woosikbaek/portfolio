import React, { useEffect } from 'react';
import Header from './components/layout/Header/Header';
import Hero from './components/sections/Hero/Hero';
import About from './components/sections/About/About';
import Skills from './components/sections/Skills/Skills';
import Projects from './components/sections/Projects/Projects';
import Experience from './components/sections/Experience/Experience';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/layout/Footer/Footer';
import Lenis from '@studio-freight/lenis';
import PhysicsBackground from './components/sections/PhysicsBackground';
import './App.css';
import { Analytics } from '@vercel/analytics/react';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <PhysicsBackground />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
