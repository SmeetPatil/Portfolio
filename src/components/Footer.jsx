import { useState, useEffect } from 'react';
import { Code2, Eye } from 'lucide-react';
import './Footer.css';

function Footer() {
  const [views, setViews] = useState(null);

  useEffect(() => {
    // Only increment the view count on your actual deployed Vercel website.
    // On localhost, it will just retrieve the current count without artificially inflating it!
    const isProduction = window.location.hostname === 'smeet-patil.vercel.app';
    const endpoint = isProduction 
      ? 'https://api.counterapi.dev/v1/smeetpatil-portfolio/visits/up'
      : 'https://api.counterapi.dev/v1/smeetpatil-portfolio/visits/';

    fetch(endpoint)
      .then(res => res.json())
      .then(data => setViews(data.count))
      .catch(err => console.error('Error fetching view count', err));
  }, []);

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
          {views !== null && (
            <p className="footer__views">
              <Eye size={14} />
              <span>{views.toLocaleString()} Profile Views</span>
            </p>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
