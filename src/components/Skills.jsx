import { motion } from 'framer-motion';
import { Layers, Server, Terminal, Smartphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Layers size={32} />,
    color: '#8b5cf6',
    skills: [
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'JavaScript', level: 88 },
      { name: 'React', level: 85 },
      { name: 'Next.js', level: 75 },
    ],
  },
  {
    title: 'Backend & Languages',
    icon: <Server size={32} />,
    color: '#06b6d4',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 88 },
      { name: 'C++', level: 80 },
    ],
  },
  {
    title: 'Tools & DevOps',
    icon: <Terminal size={32} />,
    color: '#ec4899',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 72 },
      { name: 'Jenkins', level: 68 },
      { name: 'AWS', level: 65 },
      { name: 'Firebase', level: 78 },
    ],
  },
  {
    title: 'Mobile & AR',
    icon: <Smartphone size={32} />,
    color: '#f59e0b',
    skills: [
      { name: 'Flutter', level: 75 },
      { name: 'Dart', level: 73 },
      { name: 'AR Development', level: 65 },
      { name: 'Kotlin', level: 60 },
      { name: 'Selenium', level: 70 },
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

const barVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1.5, ease: "easeOut" }
  })
};

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <motion.div 
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
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
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
                  className="skills__card glass-card"
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

                  <div className="skills__list">
                    {cat.skills.map((skill) => (
                      <div className="skills__item" key={skill.name}>
                        <div className="skills__item-header">
                          <span className="skills__item-name">{skill.name}</span>
                          <span className="skills__item-level">{skill.level}%</span>
                        </div>
                        <div className="skills__bar">
                          <motion.div
                            className="skills__bar-fill"
                            style={{ '--fill-color': cat.color }}
                            custom={skill.level}
                            variants={barVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                          ></motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
            
            <div className="custom-swiper-navigation">
              <button aria-label="Previous Slide" className="custom-swiper-button-prev skills-swiper-button-prev">
                <ChevronLeft size={24} />
              </button>
              <button aria-label="Next Slide" className="custom-swiper-button-next skills-swiper-button-next">
                <ChevronRight size={24} />
              </button>
            </div>
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
