import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Menu, X, Download } from 'lucide-react';
import logo from '../assets/logo.png';
import resume from '../assets/resume.pdf';
import './Navbar.css';

function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', color: 'var(--color-red)' },
    { name: 'Skills', href: '#skills', color: 'var(--color-yellow)' },
    { name: 'Projects', href: '#projects', color: 'var(--color-green)' },
    { name: 'Contact', href: '#contact', color: 'var(--color-purple)' },
  ];

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <div className="navbar__container">
        <a href="#home" className="navbar__logo">
          <div className="navbar__logo-icon">
            <img src={logo} alt="Smeet Patil Logo" style={{ width: '32px', height: '32px' }} />
          </div>
          <span className="navbar__logo-text">Smeet Patil</span>
        </a>

        {/* Desktop Menu */}
        <div className="navbar__menu">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="navbar__link"
              style={{ '--link-color': link.color }}
            >
              {link.name}
            </a>
          ))}
          <a href={resume} download="resume.pdf" className="navbar__link resume-nav-btn">
            <Download size={18} />
            <span>Resume</span>
          </a>
          <button className="navbar__theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="navbar__mobile-actions">
          <button className="navbar__theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="navbar__hamburger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="navbar__mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="navbar__mobile-link"
                style={{ '--link-color': link.color }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={resume} 
              download="resume.pdf" 
              className="navbar__mobile-link resume-nav-btn--mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={18} style={{ marginRight: '8px' }} />
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
