import { motion } from 'framer-motion';
import { Layers, Server, Terminal, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaJava, FaAws, FaDocker, FaGithub } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiCplusplus, SiJenkins, SiFirebase, SiFlutter, SiDart, SiKotlin, SiSelenium } from 'react-icons/si';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: <Layers size={28} />,
    color: '#FF6B00',
    tagline: '// building interfaces',
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
    icon: <Server size={28} />,
    color: '#00D4FF',
    tagline: '// server-side logic',
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
    icon: <Terminal size={28} />,
    color: '#10b981',
    tagline: '// automation & infra',
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
    icon: <Smartphone size={28} />,
    color: '#f59e0b',
    tagline: '// cross-platform apps',
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
          <div className="gradient-line" style={{ background: 'var(--color-yellow)' }}></div>
          <h2 className="section-title">
            My <span className="skills__title-accent">Tech Stack</span>
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
              rotate: 0,
              stretch: -20,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            navigation={{
              prevEl: '.skills-swiper-button-prev',
              nextEl: '.skills-swiper-button-next',
            }}
            modules={[EffectCoverflow, Navigation]}
            className="skills__swiper"
          >
            {skillCategories.map((cat) => (
              <SwiperSlide key={cat.title}>
                <motion.div
                  className="skills__card"
                  variants={cardVariants}
                  style={{ '--cat-color': cat.color }}
                >
                  {/* Colored accent bar on top */}
                  <div className="skills__card-accent" style={{ background: cat.color }}></div>
                  
                  {/* Header */}
                  <div className="skills__card-header">
                    <div className="skills__card-icon-box" style={{ borderColor: cat.color, color: cat.color }}>
                      {cat.icon}
                    </div>
                    <div className="skills__card-header-text">
                      <h3 className="skills__card-title">{cat.title}</h3>
                      <span className="skills__card-tagline" style={{ color: cat.color }}>{cat.tagline}</span>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="skills__list">
                    {cat.skills.map((skill) => (
                      <div className="skills__item" key={skill.name}>
                        <div className="skills__item-left">
                          <div className="skills__item-icon" style={{ color: cat.color }}>
                            <skill.Icon size={18} />
                          </div>
                          <span className="skills__item-name">{skill.name}</span>
                        </div>
                        <div className="skills__item-bar-container">
                          <div 
                            className="skills__item-bar" 
                            style={{ width: `${skill.level}%`, background: cat.color }}
                          ></div>
                        </div>
                        <span className="skills__item-pct">{skill.level}%</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation OUTSIDE Swiper */}
          <div className="skills__nav-row">
            <button aria-label="Previous Slide" className="skills__nav-btn skills-swiper-button-prev">
              <ChevronLeft size={24} />
              <span>Prev</span>
            </button>
            <div className="skills__nav-divider"></div>
            <button aria-label="Next Slide" className="skills__nav-btn skills-swiper-button-next">
              <span>Next</span>
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
