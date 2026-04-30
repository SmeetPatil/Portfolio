import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, Globe, Smartphone, Calculator, ShieldCheck, Gamepad2, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaGithub, FaReact, FaNodeJs, FaJava, FaPython, FaLock, FaVrCardboard, FaJs, FaServer } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiFirebase, SiMysql, SiPostgresql, SiFlutter, SiDart, SiOpencv } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';       

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './Projects.css';

const getProjectIcon = (name) => {
  switch(name) {
    case 'Hemisphere': return <Globe size={24} />;
    case 'RentSphere': return <Smartphone size={24} />;
    case 'TaxKar': return <Calculator size={24} />;
    case 'PassVault': return <ShieldCheck size={24} />;
    case 'AR Tic-Tac-Toe': return <Gamepad2 size={24} />;
    case 'Tech Nexus': return <ShoppingCart size={24} />;
    default: return <Globe size={24} />;
  }
};

const getTechIcon = (techName) => {
  switch(techName) {
    case 'React': return <FaReact size={20} />;
    case 'Node.js': return <FaNodeJs size={20} />;
    case 'Next.js': return <SiNextdotjs size={20} />;
    case 'Express': return <SiExpress size={20} />;
    case 'MongoDB': return <SiMongodb size={20} />;
    case 'Firebase': return <SiFirebase size={20} />;
    case 'Firestore': return <SiFirebase size={20} />;
    case 'Flutter': return <SiFlutter size={20} />;
    case 'Dart': return <SiDart size={20} />;
    case 'Java': return <FaJava size={20} />;
    case 'MySQL': return <SiMysql size={20} />;
    case 'Python': return <FaPython size={20} />;
    case 'OpenCV': return <SiOpencv size={20} />;
    case 'PostgreSQL': return <SiPostgresql size={20} />;
    case 'JavaScript': return <FaJs size={20} />;
    case 'REST APIs': return <FaServer size={20} />;
    case 'Cryptography': return <FaLock size={20} />;
    case 'AR Framework': return <FaVrCardboard size={20} />;
    default: return null;
  }
}

const projects = [
  {
    name: 'Hemisphere',
    description: 'A neighborhood hub app that connects communities with real-time chat, posts, and social features powered by Firebase.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Firestore'],
    github: 'https://github.com/SmeetPatil/hemisphere',
    featured: true,
    color: '#FF6B00',
    number: '01',
  },
  {
    name: 'RentSphere',
    description: 'A secure online tech-based rental service connecting users directly for seamless rental transactions.',
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/SmeetPatil/RentSphere',
    live: 'https://rentsphere-hzo2.onrender.com/',
    featured: true,
    color: '#00D4FF',
    number: '02',
  },
  {
    name: 'TaxKar',
    description: 'An online G2C platform to assess income tax, GST on items, and forex exchange rates with real-time calculations.',
    tech: ['React', 'JavaScript', 'REST APIs'],
    github: 'https://github.com/SmeetPatil/taxkar',
    featured: true,
    color: '#10b981',
    number: '03',
  },
  {
    name: 'PassVault',
    description: 'Full-featured password manager with secure generation, encrypted storage, multi-user support, and credential management.',
    tech: ['Java', 'Cryptography', 'MySQL'],
    github: 'https://github.com/SmeetPatil/PassVault',
    featured: false,
    color: '#f59e0b',
    number: '04',
  },
  {
    name: 'AR Tic-Tac-Toe',
    description: 'Classic Tic-Tac-Toe reimagined with Augmented Reality, bringing the game into the physical world through AR frameworks.',
    tech: ['Python', 'OpenCV', 'AR Framework'],
    github: 'https://github.com/SmeetPatil/AR_TicTacToe',
    featured: false,
    color: '#ec4899',
    number: '05',
  },
  {
    name: 'Tech Nexus',
    description: 'Full-featured e-commerce web application specializing in electronics with a smooth shopping experience.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/SmeetPatil/tech-nexus',
    featured: false,
    color: '#8b5cf6',
    number: '06',
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
          <div className="gradient-line" style={{ background: 'var(--color-green)' }}></div>
          <h2 className="section-title">
            Featured <span style={{ color: 'var(--color-green)', WebkitTextFillColor: 'var(--color-green)' }}>Work</span>
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
              stretch: -20,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            navigation={{
              prevEl: '.projects-swiper-button-prev',
              nextEl: '.projects-swiper-button-next',
            }}
            modules={[EffectCoverflow, Navigation]}
            className="projects__swiper"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.name}>
                <motion.div variants={cardVariants} className="projects__tilt-wrapper">
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={1200}
                    scale={1.01}
                    transitionSpeed={2000}
                    gyroscope={true}
                    className="projects__card"
                    style={{ '--project-color': project.color }}
                  >
                    {/* Left accent bar */}
                    <div className="projects__card-accent" style={{ background: project.color }}></div>
                    
                    {/* Project number watermark */}
                    <div className="projects__card-number" style={{ color: project.color }}>{project.number}</div>

                    {/* Header Row */}
                    <div className="projects__card-top">
                      <div className="projects__card-icon-box" style={{ borderColor: project.color, color: project.color }}>
                        {getProjectIcon(project.name)}
                      </div>
                      <div className="projects__card-meta">
                        <h3 className="projects__card-title">{project.name}</h3>
                        {project.featured && (
                          <span className="projects__badge" style={{ background: project.color }}>Featured</span>
                        )}
                      </div>
                      <div className="projects__links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="projects__link-btn" aria-label="GitHub Repository">
                          <FaGithub size={18} />
                        </a>
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noopener noreferrer" className="projects__link-btn projects__link-btn--live" aria-label="Live Site">
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="projects__card-desc">{project.description}</p>

                    {/* Tech Tags */}
                    <div className="projects__tech-row">
                      {project.tech.map((t) => {
                        const icon = getTechIcon(t);
                        return (
                          <div className="projects__tech-tag" key={t} style={{ borderColor: project.color }}>
                            {icon && <span className="projects__tech-tag-icon" style={{ color: project.color }}>{icon}</span>}
                            <span>{t}</span>
                          </div>
                        );
                      })}
                    </div>
                  </Tilt>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation OUTSIDE Swiper */}
          <div className="projects__nav-row">
            <button aria-label="Previous Slide" className="projects__nav-btn projects-swiper-button-prev">
              <ChevronLeft size={24} />
              <span>Prev</span>
            </button>
            <div className="projects__nav-divider"></div>
            <button aria-label="Next Slide" className="projects__nav-btn projects-swiper-button-next">
              <span>Next</span>
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
