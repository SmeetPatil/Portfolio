import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Globe, Smartphone, Calculator, ShieldCheck, Gamepad2, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Projects.css';

const getProjectIcon = (name) => {
  switch(name) {
    case 'Hemisphere': return <Globe size={28} />;
    case 'RentSphere': return <Smartphone size={28} />;
    case 'TaxKar': return <Calculator size={28} />;
    case 'PassVault': return <ShieldCheck size={28} />;
    case 'AR Tic-Tac-Toe': return <Gamepad2 size={28} />;
    case 'Tech Nexus': return <ShoppingCart size={28} />;
    default: return <Globe size={28} />;
  }
};

const projects = [
  {
    name: 'Hemisphere',
    description: 'A neighborhood hub app that connects communities with real-time chat, posts, and social features powered by Firebase.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    github: 'https://github.com/SmeetPatil/hemisphere',
    featured: true,
    gradient: 'linear-gradient(135deg, #7c3aed, #a855f7)',
  },
  {
    name: 'RentSphere',
    description: 'A secure online tech-based rental service connecting users directly for seamless rental transactions.',
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/SmeetPatil/RentSphere',
    live: 'https://rentsphere-hzo2.onrender.com/',
    featured: true,
    gradient: 'linear-gradient(135deg, #06b6d4, #2b6cb0)',
  },
  {
    name: 'TaxKar',
    description: 'An online G2C platform to assess income tax, GST on items, and forex exchange rates with real-time calculations.',
    tech: ['React', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/SmeetPatil/taxkar',
    featured: true,
    gradient: 'linear-gradient(135deg, #ec4899, #f43f5e)',
  },
  {
    name: 'PassVault',
    description: 'Full-featured password manager with secure generation, encrypted storage, multi-user support, and credential management.',
    tech: ['Java', 'Cryptography', 'MySQL'],
    github: 'https://github.com/SmeetPatil/PassVault',
    featured: false,
    gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
  },
  {
    name: 'AR Tic-Tac-Toe',
    description: 'Classic Tic-Tac-Toe reimagined with Augmented Reality, bringing the game into the physical world through AR frameworks.',
    tech: ['Python', 'OpenCV', 'AR Framework'],
    github: 'https://github.com/SmeetPatil/AR_TicTacToe',
    featured: false,
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
  },
  {
    name: 'Tech Nexus',
    description: 'Full-featured e-commerce web application specializing in electronics with a smooth shopping experience.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/SmeetPatil/tech-nexus',
    featured: false,
    gradient: 'linear-gradient(135deg, #6366f1, #4f46e5)',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.95 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-container">
        <div className="projects__header">
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            A showcase of my best projects spanning robust backend architectures, sleek frontends, and experimental AR mobile apps.
          </p>
        </div>

        <motion.div 
          className="projects__carousel-wrapper"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={1}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.projects-swiper-button-prev',
              nextEl: '.projects-swiper-button-next',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="projects__swiper"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={project.name}>
                <motion.div variants={cardVariants} className="projects__tilt-wrapper">
                  <Tilt
                    tiltMaxAngleX={8}
                    tiltMaxAngleY={8}
                    perspective={1200}
                    scale={1.02}
                    transitionSpeed={2000}
                    gyroscope={true}
                    className={`projects__card glass-card ${project.featured ? 'projects__card--featured' : ''}`}
                  >
                    {/* Glow Effect Background */}
                    <div 
                      className="projects__card-glow" 
                      style={{ background: project.gradient }}
                    ></div>

                    {project.featured && (
                      <div className="projects__badge">⭐ Featured</div>
                    )}

                    <div className="projects__card-top">
                      <div className="projects__card-icon" style={{ background: project.gradient }}>
                        {getProjectIcon(project.name)}
                      </div>
                      
                      <div className="projects__links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link-icon" aria-label="GitHub Repository">
                          <FaGithub size={20} />
                        </a>
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__link-icon projects__link-icon--live" aria-label="Live Site">
                            <ExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="projects__card-content">
                      <h3 className="projects__card-title">{project.name}</h3>
                      <p className="projects__card-desc">{project.description}</p>
                    </div>

                    <div className="projects__tags">
                      {project.tech.map((t) => (
                        <span className="projects__tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </Tilt>
                </motion.div>
              </SwiperSlide>
            ))}
            
            <div className="custom-swiper-navigation">
              <button aria-label="Previous Slide" className="custom-swiper-button-prev projects-swiper-button-prev">
                <ChevronLeft size={24} />
              </button>
              <button aria-label="Next Slide" className="custom-swiper-button-next projects-swiper-button-next">
                <ChevronRight size={24} />
              </button>
            </div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
