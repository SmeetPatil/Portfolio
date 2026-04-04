import { motion } from 'framer-motion';
import { Layers, Server, Terminal, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiCplusplus, SiJenkins, SiFirebase, SiFlutter, SiDart, SiKotlin, SiSelenium } from 'react-icons/si';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layers size={32} />,
    color: '#8b5cf6',
    description: 'Creating visually stunning, responsive, and performance-optimized user interfaces.',
    skills: [
      { name: 'HTML5', level: 95, Icon: FaHtml5 },
      { name: 'CSS3', level: 90, Icon: FaCss3Alt },
      { name: 'JavaScript', level: 88, Icon: FaJs },
      { name: 'React', level: 85, Icon: FaReact },
      { name: 'Next.js', level: 75, Icon: SiNextdotjs },
    ],
  },
  {
    title: 'Backend & Context',
    icon: <Server size={32} />,
    color: '#06b6d4',
    description: 'Building robust APIs, scalable architectures, and efficient server-side logic.',
    skills: [
      { name: 'Node.js', level: 82, Icon: FaNodeJs },
      { name: 'Express.js', level: 80, Icon: SiExpress },
      { name: 'Python', level: 85, Icon: FaPython },
      { name: 'Java', level: 88, Icon: FaJava },
      { name: 'C++', level: 80, Icon: SiCplusplus },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: <Terminal size={32} />,
    color: '#ec4899',
    description: 'Streamlining deployment workflows, managing cloud infrastructure, and continuous integration.',
    skills: [
      { name: 'Git & GitHub', level: 90, Icon: FaGithub },
      { name: 'Docker', level: 72, Icon: FaDocker },
      { name: 'Jenkins', level: 68, Icon: SiJenkins },
      { name: 'AWS', level: 65, Icon: FaAws },
      { name: 'Firebase', level: 78, Icon: SiFirebase },
    ],
  },
  {
    title: 'Mobile & AR',
    icon: <Smartphone size={32} />,
    color: '#f59e0b',
    description: 'Developing high-performance cross-platform applications and exploring immersive AR.',
    skills: [
      { name: 'Flutter', level: 75, Icon: SiFlutter },
      { name: 'Dart', level: 73, Icon: SiDart },
      { name: 'React Native', level: 65, Icon: FaReact },
      { name: 'Kotlin', level: 60, Icon: SiKotlin },
      { name: 'Selenium', level: 70, Icon: SiSelenium },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <motion.div
          className="skills__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="gradient-line"></div>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <motion.div
          className="skills__carousel-wrapper"
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
              rotate: -5,
              stretch: -30,
              depth: 120,
              modifier: 2,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: '.skills-swiper-button-prev',
              nextEl: '.skills-swiper-button-next',
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="skills__swiper"
          >
            {skillCategories.map((cat, idx) => (
              <SwiperSlide key={cat.title}>
                <motion.div
                  className="skills__card"
                  variants={cardVariants}
                  style={{ '--cat-color': cat.color }}
                >
                  <div className="skills__card-glow" style={{ background: cat.color }}></div>
                  <div className="skills__card-header">
                    <div className="skills__card-icon" style={{ color: cat.color }}>
                      {cat.icon}
                    </div>
                    <h3 className="skills__card-title">{cat.title}</h3>
                  </div>
                  
                  <p className="skills__card-desc">{cat.description}</p>

                  <div className="skills__grid">
                    {cat.skills.map((skill) => (
                      <div className="skill-circle-container" key={skill.name}>
                        <div 
                          className="skill-circle"
                          style={{ '--cat-color': cat.color, '--level': skill.level }}
                        >
                          <div className="skill-circle-inner">
                            <skill.Icon size={24} color={cat.color} />
                          </div>
                        </div>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}

            <div className="custom-swiper-navigation">
              <button aria-label="Previous Slide" className="custom-swiper-button-prev skills-swiper-button-prev">
                <ChevronLeft size={28} />
              </button>
              <button aria-label="Next Slide" className="custom-swiper-button-next skills-swiper-button-next">
                <ChevronRight size={28} />
              </button>
            </div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
