import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, filter: 'blur(10px)' },
    visible: {
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="hero" id="home">
      {/* Background Orbs */}
      <div className="hero__orb hero__orb--1"></div>
      <div className="hero__orb hero__orb--2"></div>
      <div className="hero__orb hero__orb--3"></div>

      <motion.div 
        className="hero__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero__badge">
          <span className="hero__badge-dot"></span>
          Available for opportunities
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero__title">
          <span className="premium-title">Hi, I'm</span> <span className="gradient-text">Smeet Patil</span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="hero__subtitle">
          Full-Stack Developer & Creative Coder
        </motion.h2>

        <motion.p variants={itemVariants} className="hero__description">
          I love to code and create! Building innovative web applications,
          exploring AR/VR, and turning ideas into reality with clean code
          and creative solutions.
        </motion.p>

        <motion.div variants={itemVariants} className="hero__cta">
          <a href="#projects" className="hero__btn hero__btn--primary">
            <span>View My Work</span>
            <ArrowRight size={20} className="hero__btn-icon" />
          </a>
          <a href="https://github.com/SmeetPatil" target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--secondary">
            <FaGithub size={20} />
            <span>GitHub</span>
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">24+</span>
            <span className="hero__stat-label">Repositories</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">5+</span>
            <span className="hero__stat-label">Years Coding</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">10+</span>
            <span className="hero__stat-label">Projects Built</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="hero__scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="hero__scroll-text">Scroll to explore</span>
        <div className="hero__scroll-line">
          <motion.div 
            className="hero__scroll-dot"
            animate={{ top: ['-20px', '60px', '60px'] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
