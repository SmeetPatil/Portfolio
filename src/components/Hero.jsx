import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Hero.css';

function Hero() {
  const [text, setText] = useState('');
  const fullName = 'Smeet Patil';

  useEffect(() => {
    let timeout;
    let currentIndex = 0;
    let isDeleting = false;

    const type = () => {
      if (!isDeleting) {
        setText(fullName.substring(0, currentIndex + 1));
        currentIndex++;
        if (currentIndex === fullName.length) {
          isDeleting = true;
          timeout = setTimeout(type, 2000);
        } else {
          timeout = setTimeout(type, 150);
        }
      } else {
        setText(fullName.substring(0, currentIndex - 1));
        currentIndex--;
        if (currentIndex === 0) {
          isDeleting = false;
          timeout = setTimeout(type, 500);
        } else {
          timeout = setTimeout(type, 100);
        }
      }
    };

    timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);

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
          <span className="premium-title">Hi, I'm </span>
          <span className="red-animated-name">
            {text}
            <span className="typing-cursor">|</span>
          </span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="hero__subtitle">
          Full-Stack Developer :)
        </motion.h2>

        <motion.p variants={itemVariants} className="hero__description">
          Prolific in multiple programming languages for both frontend and backend development, with proficiency in DSA and Devops. Currently familiarizing myself with AI and machine learning and Android Development. Always eager to collaborate and take on new challenges.
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
          <div className="hero__stat" style={{ '--stat-color': 'var(--color-red)' }}>
            <span className="hero__stat-number">24+</span>
            <span className="hero__stat-label">Repositories</span>
          </div>
          <div className="hero__stat" style={{ '--stat-color': 'var(--color-blue)' }}>
            <span className="hero__stat-number">5+</span>
            <span className="hero__stat-label">Years Coding</span>
          </div>
          <div className="hero__stat" style={{ '--stat-color': 'var(--color-green)' }}>
            <span className="hero__stat-number">10+</span>
            <span className="hero__stat-label">Projects Built</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
