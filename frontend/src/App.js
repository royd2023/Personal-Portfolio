import './App.css';
import React from 'react';
import { motion } from 'framer-motion';
import RoyAI from './components/RoyAI';
import './components/RoyAI.css';
import { FaGithub } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
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

function App() {
  return (
    <motion.div 
      className="App"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="top-bar">
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

      <motion.div 
        className="info"
        variants={containerVariants}
      >
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

        <motion.section variants={itemVariants}>
          <h2>Languages</h2>
          <motion.ul
            variants={containerVariants}
          >
            {['Python', 'JavaScript', 'Java', 'C++', 'C', 'SQL', 'x86-64 Assembly', 'HTML / CSS'].map((lang, index) => (
              <motion.li key={lang} variants={itemVariants}>
                {lang}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2>Frontend</h2>
          <motion.ul variants={containerVariants}>
            {['React'].map((tech, index) => (
              <motion.li key={tech} variants={itemVariants}>
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2>Backend</h2>
          <motion.ul variants={containerVariants}>
            {['Node.js', 'Express.js', 'Flask'].map((tech, index) => (
              <motion.li key={tech} variants={itemVariants}>
                {tech}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2>Databases</h2>
          <motion.ul variants={containerVariants}>
            {['PostgreSQL'].map((db, index) => (
              <motion.li key={db} variants={itemVariants}>
                {db}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2>Tools</h2>
          <motion.ul variants={containerVariants}>
            {['Git', 'Docker', 'VS Code', 'Jupyter Notebook'].map((tool, index) => (
              <motion.li key={tool} variants={itemVariants}>
                {tool}
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
      </motion.div>

      <RoyAI />
    </motion.div>
  );
}

export default App;
