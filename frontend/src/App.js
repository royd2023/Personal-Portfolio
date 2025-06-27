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

const projects = [
  {
    title: 'Boxure',
    description: 'An e-commerce website for selling custom-made blind boxes.',
    tech: ['React', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Firebase'],
    link: 'https://github.com/4rd2/Boxure',
    image: null
  },
  {
    title: 'Spotify Remote',
    description: 'A remote control for Spotify using C++ in Arduino. Uses bluetooth and ESP32 to control Spotify.',
    tech: ['Arduino', 'C++', 'ESP32', 'Bluetooth', 'Batch'],
    link: 'https://github.com/royd2023/SpotifyRemote',
    image: null
  },
  {
    title: 'FPS using Godot Engine',
    description: 'A first person shooter game using Godot Engine. Basic WASD controls, movement like crouching, jumping and sprinting and has enemies and a health bar. Different weapons as well.',
    tech: ['Godot Engine', 'GDScript'],
    link: 'https://github.com/royd2023/GodotFPS',
    image: null
  },
  {
    title: 'Hand Detection Zoom App',
    description: 'An app like zoom but with hand detection. Built for hackathon Code4Cause2025.',
    tech: ['React', 'JavaScript', 'CSS', 'Python'],
    link: 'https://github.com/royd2023/Code4Cause2025',
    image: null
  },
  {
    title: 'Red Black Tree Implementation',
    description: 'A red black tree implementation in C. Has insert, delete, search, and print functions.',
    tech: ['C++', 'Makefile'],
    link: 'https://github.com/royd2023/RedBlackTree',
    image: null
  },
  {
    title: 'Data Visualization for Data IO 2025',
    description: 'Uses Jupyter Notebook, pandas, python, and other libraries that visualizes data from a data set on EV charging stations around the United States.',
    tech: ['Python', 'Matplotlib', 'Jupyter Notebook', 'Pandas'],
    link: 'https://github.com/royd2023/DataI-O-2025',
    image: null
  }
  
  
];

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

      {/* Projects Section */}
      <Section id="projects">
        <motion.div className="section-content projects-section">
          <h2>Projects</h2>
          <motion.div className="projects-carousel" initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {projects.map((project, idx) => (
              <motion.div
                className="project-card"
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">View Repo</a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Section>

      <RoyAI />
    </div>
  );
}

export default App;
