import { useState, useEffect } from 'react';
import { Code2, Eye } from 'lucide-react';
import './Footer.css';

function Footer() {
  const [views, setViews] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const isProduction = window.location.hostname === 'smeet-patil.vercel.app';
    const endpoint = isProduction
      ? 'https://api.counterapi.dev/v1/smeetpatil-portfolio/visits/up'
      : 'https://api.counterapi.dev/v1/smeetpatil-portfolio/visits/';

    fetch(endpoint)
      .then(res => {
        if (!res.ok) throw new Error('API error');
        return res.json();
      })
      .then(data => setViews(data.count))
      .catch(err => {
        console.error('Error fetching view count', err);
        setError(true);
      });
  }, []);

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo-row">
              <Code2 size={24} color="var(--accent-orange)" />
              <span className="footer__logo-text">SP</span>
            </div>
            <p className="footer__tagline">Code is like humor. When you have to explain it, it's bad.</p>
          </div>

          <div className="footer__links">
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer__counter">
            <Eye size={18} />
            <span className="footer__counter-value">
              {views !== null
                ? `${views.toLocaleString()} views`
                : error
                  ? '—'
                  : '...'}
            </span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Smeet Patil. Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
