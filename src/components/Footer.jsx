import { Code2 } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <div className="navbar__logo-icon" style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '8px' }}>
            <Code2 size={24} color="var(--accent-violet)" />
          </div>
          <span className="navbar__logo-text gradient-text">SP</span>
          <p className="footer__tagline">Code is like humor. When you have to explain it, it's bad.</p>
        </div>

        <div className="footer__links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Smeet Patil. Built with React & ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
