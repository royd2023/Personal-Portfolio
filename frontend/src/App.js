import './App.css';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RoyAI from './components/RoyAI';
import './components/RoyAI.css';
import { FaGithub } from 'react-icons/fa';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

function Section({ children, id }) {
  return (
    <motion.section
      id={id}
      className="full-screen-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
}

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div className="App">
      <motion.div 
        className="top-bar"
        style={{ opacity }}
      >
        <motion.h1 
          className="top-left-name"
          variants={itemVariants}
        >
          Roy Dinh
        </motion.h1>
        <motion.a
          href="https://github.com/royd2023"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
          <span>GitHub</span>
        </motion.a>
      </motion.div>

      <Section id="intro">
        <motion.div className="section-content">
          <motion.header variants={itemVariants}>
            <h1>Hi, I'm Roy</h1>
            <p>
              I aspire to work in the field of Software Engineering, specializing in Artificial Intelligence!
            </p>
          </motion.header>

          <motion.div 
            className="profile-picture-container"
            variants={itemVariants}
          >
            <motion.div 
              className="profile-picture"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/siana-sunghee-park-mk2-small.jpg" 
                alt="Roy Dinh"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/siana-sunghee-park-mk2-small.jpg';
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Section>

      <Section id="languages">
        <motion.div className="section-content">
          <h2>Languages</h2>
          <motion.ul variants={itemVariants}>
            {['Python', 'JavaScript', 'Java', 'C++', 'C', 'SQL', 'x86-64 Assembly', 'HTML / CSS'].map((lang) => (
              <motion.li key={lang} variants={itemVariants}>
                {lang}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Section>

      <Section id="frontend">
        <motion.div className="section-content">
          <h2>Frontend</h2>
          <motion.ul variants={itemVariants}>
            {['React'].map((tech) => (
              <motion.li key={tech} variants={itemVariants}>
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Section>

      <Section id="backend">
        <motion.div className="section-content">
          <h2>Backend</h2>
          <motion.ul variants={itemVariants}>
            {['Node.js', 'Express.js', 'Flask'].map((tech) => (
              <motion.li key={tech} variants={itemVariants}>
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Section>

      <Section id="databases">
        <motion.div className="section-content">
          <h2>Databases</h2>
          <motion.ul variants={itemVariants}>
            {['PostgreSQL'].map((db) => (
              <motion.li key={db} variants={itemVariants}>
                {db}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Section>

      <Section id="tools">
        <motion.div className="section-content">
          <h2>Tools</h2>
          <motion.ul variants={itemVariants}>
            {['Git', 'Docker', 'VS Code', 'Jupyter Notebook'].map((tool) => (
              <motion.li key={tool} variants={itemVariants}>
                {tool}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Section>

      <Section id="learning">
        <motion.div className="section-content">
          <h2>Things I am learning</h2>
          <motion.ul variants={itemVariants}>
            {['Full Stack Development', 'TensorFlow', 'PyTorch', 'OpenAI API'].map((tool) => (
              <motion.li key={tool} variants={itemVariants}>
                {tool}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Section>

      <RoyAI />
    </div>
  );
}

export default App;
