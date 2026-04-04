import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('smeetpatil878@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <motion.div 
          className="contact__wrapper"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <div className="contact__glow"></div>

          <div className="gradient-line" style={{ margin: '0 auto 24px' }}></div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="contact__subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <motion.div 
            className="contact__email-card glass-card"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopy}
          >
            <div className="contact__email-icon">
              <Mail size={32} />
            </div>
            <div className="contact__email-info">
              <span className="contact__email-label">Email me at</span>
              <span className="contact__email-address">smeetpatil878@gmail.com</span>
            </div>
            <div className="contact__copy-btn">
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="copied"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="contact__copy-status"
                  >
                    <CheckCircle2 size={16} /> Copied!
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="contact__copy-status"
                  >
                    <Copy size={16} /> Copy
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          <div className="contact__links">
            <motion.a
              href="https://github.com/SmeetPatil"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social glass-card"
              whileHover={{ y: -5, borderColor: 'var(--accent-violet)' }}
            >
              <FaGithub size={24} />
              <span>GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/smeet-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__social glass-card"
              whileHover={{ y: -5, borderColor: '#0077b5' }}
            >
              <FaLinkedin size={24} />
              <span>LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
