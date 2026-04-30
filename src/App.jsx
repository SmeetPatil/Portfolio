import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      setTheme(saved);
      document.body.setAttribute('data-theme', saved);
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      if (prefersLight) {
        setTheme('light');
        document.body.setAttribute('data-theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
  }, []);

  // Scrollbar color cycling
  useEffect(() => {
    const colors = ['#FF3B30', '#FF6B00', '#FFD60A', '#34C759', '#007AFF', '#BF5AF2', '#00D4FF'];
    let currentIndex = 0;
    let lastScrollY = 0;
    const SCROLL_THRESHOLD = 200; // px of scroll to trigger a color change

    const handleScroll = () => {
      const delta = Math.abs(window.scrollY - lastScrollY);
      if (delta >= SCROLL_THRESHOLD) {
        lastScrollY = window.scrollY;
        currentIndex = (currentIndex + 1) % colors.length;
        document.documentElement.style.setProperty('--scrollbar-active', colors[currentIndex]);
      }
    };

    document.documentElement.style.setProperty('--scrollbar-active', colors[0]);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.body.setAttribute('data-theme', next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
  };

  return (
    <div className="app">
      <ParticlesBackground theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Skills />
        <Projects />
        {/* <About /> */}
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
