import './App.css';
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import RoyAI from './components/RoyAI';
import './components/RoyAI.css';
import { FaGithub } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiFlask, SiPostgresql, SiJupyter, SiCplusplus, SiC, SiArduino, SiFirebase, SiTailwindcss, SiGnubash, SiGodotengine, SiPandas, SiMongodb, SiTypescript, SiGnubash as SiBash, SiGnubash as SiBatch, SiGnubash as SiMakefile } from 'react-icons/si';

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
    image: 'ece2360final.jpg'
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
    image: 'redblacktree.jpg'
  },
  {
    title: 'Data Visualization for Data IO 2025',
    description: 'Uses Jupyter Notebook, pandas, python, and other libraries that visualizes data from a data set on EV charging stations around the United States.',
    tech: ['Python', 'Matplotlib', 'Jupyter Notebook', 'Pandas'],
    link: 'https://github.com/royd2023/DataI-O-2025',
    image: null
  }
  
  
];

const languageList = [
  { name: 'Python', icon: <FaPython title="Python" /> },
  { name: 'JavaScript', icon: <FaJs title="JavaScript" /> },
  { name: 'Java', icon: <FaJava title="Java" /> },
  { name: 'C++', icon: <SiCplusplus title="C++" /> },
  { name: 'C', icon: <SiC title="C" /> },
  { name: 'SQL', icon: <FaDatabase title="SQL" /> },
  { name: 'x86-64 Assembly', icon: null },
  { name: 'HTML / CSS', icon: <><FaHtml5 title="HTML5" style={{marginRight: '0.2em'}} /><FaCss3Alt title="CSS3" /></> },
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
        <div className="top-bar-links">
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
          <motion.a
            href="https://drive.google.com/file/d/1kBNecPuSunH1yplM9ANGcgYTxrLY1uPv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            Resume
          </motion.a>
        </div>
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
                src="20230429_185703.jpg" 
                alt="Roy Dinh"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '20230429_185703.jpg';
                }}
              />
            </motion.div>
          </motion.div>
          <motion.div className="extra-photos-row" variants={itemVariants}>
            {["20230430_171031(1).jpg", "20230430_174045.jpg"].map((filename, idx) => (
              <div className="extra-photo-frame" key={filename}>
                <img src={filename} alt={`Roy extra ${idx + 1}`} />
              </div>
            ))}
          </motion.div>
          <motion.p variants={itemVariants} className="intro-bio">
          <span className="bio-greeting">👋 Hi, I'm <b>Roy Dinh</b>!</span><br /><br />
          <b><span className="osu-uni"><img src="osu-logo.svg" alt="Ohio State University Logo" className="osu-icon" /> CS @ The Ohio State University (Class of 2027)</span></b> <br />
          <span className="bio-highlight">Web dev, game design, and educational tech enthusiast.</span>
          <br /><br />
          <b>What I'm building:</b>
          <ul className="bio-list">
            <li>
              <b>Boxure</b>: A fullstack e-commerce platform for blind box collectibles.<br />
              <span className="bio-tech">Node.js, Express, PostgreSQL, Firebase, Stripe, React</span>
            </li>
            <li>
              <b>Code 4 Community</b>: Volunteering to teach programming through games.<br />
              <span className="bio-tech">Phaser, JavaScript, HTML, CSS</span>
            </li>
            <li>
              <b>OSU Underwater Robotics Team</b>: GUI and web interface contributions.
            </li>
          </ul>
          <b>What I love:</b>
          <ul className="bio-list">
            <li>Building things that are <span className="bio-highlight">engaging, visual, and fun</span></li>
            <li>Collaborating with creative, driven people</li>
            <li>Learning new tech and sharing what I know</li>
          </ul>
          <b>Outside of code:</b> 🎸 Guitar, 🏋️‍♂️ working out, 🎮 video games, 📚 reading sci-fi & tech blogs.<br />
          <span className="bio-highlight">Always looking for ways to blend creativity and code!</span>
        </motion.p>
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
                  {project.image && (
                    <img src={project.image} alt={project.title} className="project-image" />
                  )}
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

      <Section id="languages">
        <motion.div className="section-content">
          <h2>Languages</h2>
          <motion.ul variants={itemVariants}>
            {languageList.map(({ name, icon }) => (
              <motion.li key={name} variants={itemVariants} className="language-li">
                {icon && <span className="lang-icon">{icon}</span>}
                {name}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </Section>

      {/* Tech Stack Section */}
      <Section id="tech-stack">
        <motion.div className="section-content tech-stack-section">
          <h2>Tech Stack</h2>
          <div className="tech-stack-boxes">
            {/* Frontend */}
            <div className="tech-box">
              <h3>Frontend</h3>
              <div className="tech-icons">
                <FaReact title="React" />
                <FaHtml5 title="HTML5" />
                <FaCss3Alt title="CSS3" />
                <SiTailwindcss title="Tailwind CSS" />
                <FaJs title="JavaScript" />
              </div>
              <ul>
                <li>React</li>
                <li>HTML / CSS</li>
                <li>Tailwind CSS</li>
                <li>JavaScript</li>
              </ul>
            </div>
            {/* Backend */}
            <div className="tech-box">
              <h3>Backend</h3>
              <div className="tech-icons">
                <FaNodeJs title="Node.js" />
                <SiExpress title="Express.js" />
                <SiFlask title="Flask" />
                <SiGnubash title="Bash" />
              </div>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Flask</li>
                <li>Bash</li>
              </ul>
            </div>
            {/* Database */}
            <div className="tech-box">
              <h3>Database</h3>
              <div className="tech-icons">
                <SiPostgresql title="PostgreSQL" />
                <SiFirebase title="Firebase" />
                <FaDatabase title="SQL" />
              </div>
              <ul>
                <li>PostgreSQL</li>
                <li>Firebase</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
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
