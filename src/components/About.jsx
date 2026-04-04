import { motion } from 'framer-motion';
import { Target, Lightbulb, GitMerge } from 'lucide-react';
import './About.css';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className="about" id="about">
      <div className="section-container">
        <div className="about__grid">
          <motion.div 
            className="about__image-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <div className="about__image-wrapper">
              <div className="about__image-frame">
                <img
                  src="https://avatars.githubusercontent.com/u/89266682?v=4"
                  alt="Smeet Patil"
                  className="about__avatar"
                />
              </div>
              <div className="about__image-decoration"></div>
              <div className="about__image-dots"></div>
            </div>
          </motion.div>

          <motion.div 
            className="about__text-col"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="gradient-line"></motion.div>
            <motion.h2 variants={itemVariants} className="section-title">
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="about__bio">
              I'm a passionate full-stack developer from <span className="highlight-strong">Mumbai, India</span> who
              loves to code and create. I build innovative web applications and
              explore emerging technologies like AR/VR.
            </motion.p>
            <motion.p variants={itemVariants} className="about__bio">
              With expertise spanning frontend, backend, and DevOps, I bring ideas
              to life through clean code and creative solutions. I'm always eager
              to learn, contribute to open-source, and tackle challenging problems.
            </motion.p>

            <motion.div variants={containerVariants} className="about__highlights">
              <motion.div variants={itemVariants} className="about__highlight glass-card">
                <div className="about__highlight-icon about__highlight-icon--violet">
                  <Target size={28} />
                </div>
                <div>
                  <h4>Problem Solver</h4>
                  <p>Turning complex challenges into elegant solutions</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="about__highlight glass-card">
                <div className="about__highlight-icon about__highlight-icon--cyan">
                  <Lightbulb size={28} />
                </div>
                <div>
                  <h4>Innovation Driven</h4>
                  <p>Exploring AR/VR, DevOps, and cutting-edge tech</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="about__highlight glass-card">
                <div className="about__highlight-icon about__highlight-icon--pink">
                  <GitMerge size={28} />
                </div>
                <div>
                  <h4>Open Source</h4>
                  <p>Active contributor to open-source projects</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
