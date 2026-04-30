import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Copy, CheckCircle2, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText('smeetpatil878@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:smeetpatil878@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <motion.div 
          className="contact__wrapper"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-line" style={{ margin: '0 auto 16px', background: 'var(--color-purple)' }}></div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Let's <span style={{ color: 'var(--color-purple)', WebkitTextFillColor: 'var(--color-purple)' }}>Connect</span>
          </h2>
          <p className="contact__subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="contact__grid">
            {/* Contact Form */}
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-name">NAME</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="contact__input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-email">EMAIL</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="contact__input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact__field">
                <label className="contact__label" htmlFor="contact-message">MESSAGE</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact__input contact__textarea"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="contact__submit-btn">
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>

            {/* Right Column: Email card + Social links */}
            <div className="contact__info">
              <motion.div 
                className="contact__email-card"
                whileTap={{ scale: 0.98 }}
                onClick={handleCopy}
              >
                <div className="contact__email-icon">
                  <Mail size={28} />
                </div>
                <div className="contact__email-info">
                  <span className="contact__email-label">EMAIL ME AT</span>
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
                        className="contact__copy-status contact__copy-status--success"
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
                  className="contact__social"
                  whileHover={{ x: -2, y: -2 }}
                >
                  <FaGithub size={28} />
                  <span>GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/smeet-patil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social"
                  whileHover={{ x: -2, y: -2 }}
                >
                  <FaLinkedin size={28} />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
