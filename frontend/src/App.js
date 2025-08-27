import './App.css';
import React from 'react';
import RoyAI from './components/RoyAI';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiFlask, SiPostgresql, SiJupyter, SiCplusplus, SiC, SiArduino, SiFirebase, SiTailwindcss, SiGodotengine, SiNextdotjs, SiStripe, SiSupabase, SiYolo } from 'react-icons/si';

const projects = [
  {
    title: 'Boxure',
    description: 'E-commerce platform for blind box collectibles with Stripe payments.',
    tech: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    link: 'https://github.com/4rd2/Boxure',
    image: null
  },
  {
    title: 'Spotify Remote',
    description: 'Arduino-based hardware remote for Spotify control via Bluetooth.',
    tech: ['Arduino', 'C++', 'ESP32', 'Bluetooth'],
    link: 'https://github.com/royd2023/SpotifyRemote',
    image: 'ece2360final.jpg'
  },
  {
    title: 'Furniture Detection',
    description: 'ML model comparing YOLOv8 with custom furniture detection.',
    tech: ['Python', 'YOLO', 'Computer Vision'],
    link: 'https://github.com/royd2023/Furniture-Detection',
    image: null
  },
  {
    title: 'Hand Detection App',
    description: 'Video app with gesture detection for Code4Cause2025.',
    tech: ['React', 'Python', 'OpenCV'],
    link: 'https://github.com/royd2023/Code4Cause2025',
    image: null
  },
  {
    title: 'Red Black Tree',
    description: 'Complete red-black tree implementation with CRUD operations.',
    tech: ['C++', 'Data Structures'],
    link: 'https://github.com/royd2023/RedBlackTree',
    image: 'redblacktree.jpg'
  },
  {
    title: 'FPS Game',
    description: 'First-person shooter with combat and enemy AI systems.',
    tech: ['Godot', 'GDScript'],
    link: 'https://github.com/royd2023/GodotFPS',
    image: null
  }
];

function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="name">Roy Dinh</h1>
          <nav className="nav">
            <a href="https://github.com/royd2023" target="_blank" rel="noopener noreferrer" className="nav-link">
              <FaGithub /> GitHub
            </a>
            <a href="https://drive.google.com/file/d/1kBNecPuSunH1yplM9ANGcgYTxrLY1uPv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-link">
              Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-title">
                <span className="title-word">Full</span> <span className="title-word">Stack</span> <span className="title-word">Developer</span> <span className="title-word">&</span> <span className="title-word">CS</span> <span className="title-word">Student</span>
              </h2>
              <p className="hero-description">
                Fully committed to the philosophy of life-long learning, I'm a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for software engineering. When I'm not at my computer I like to spend my time playing guitar, working out and reading sci-fi novels.
              </p>
              <div className="hero-details">
                <p className="detail-item"><strong>🎓 Computer Science @ The Ohio State University (Class of 2027)</strong></p>
                <p className="detail-item"><strong>Currently:</strong> Building Boxure (e-commerce platform) • Contributing to OSU Underwater Robotics • Teaching programming through Code 4 Community</p>
              </div>
            </div>
            <div className="hero-image">
              <div className="image-container">
                <img 
                  src="20230429_185703.jpg" 
                  alt="Roy Dinh"
                  className="profile-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '20230429_185703.jpg';
                  }}
                />
                <div className="image-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.title} className="project-card">
                {project.image && (
                  <div className="project-image-container">
                    <img src={project.image} alt={project.title} className="project-image" />
                  </div>
                )}
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub /> View Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-items">
                <span className="skill-item magnetic-item"><FaPython /> Python</span>
                <span className="skill-item magnetic-item"><FaJs /> JavaScript</span>
                <span className="skill-item magnetic-item"><SiCplusplus /> C++</span>
                <span className="skill-item magnetic-item"><FaJava /> Java</span>
                <span className="skill-item magnetic-item"><SiC /> C</span>
                <span className="skill-item magnetic-item"><FaDatabase /> SQL</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <span className="skill-item magnetic-item"><FaReact /> React</span>
                <span className="skill-item magnetic-item"><SiNextdotjs /> Next.js</span>
                <span className="skill-item magnetic-item"><FaHtml5 /> HTML5</span>
                <span className="skill-item magnetic-item"><FaCss3Alt /> CSS3</span>
                <span className="skill-item magnetic-item"><SiTailwindcss /> Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <span className="skill-item magnetic-item"><FaNodeJs /> Node.js</span>
                <span className="skill-item magnetic-item"><SiExpress /> Express.js</span>
                <span className="skill-item magnetic-item"><SiFlask /> Flask</span>
                <span className="skill-item magnetic-item"><SiPostgresql /> PostgreSQL</span>
                <span className="skill-item magnetic-item"><SiFirebase /> Firebase</span>
                <span className="skill-item magnetic-item"><SiSupabase /> Supabase</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <div className="skill-items">
                <span className="skill-item magnetic-item"><FaGitAlt /> Git</span>
                <span className="skill-item magnetic-item"><FaDocker /> Docker</span>
                <span className="skill-item magnetic-item"><SiArduino /> Arduino</span>
                <span className="skill-item magnetic-item"><SiGodotengine /> Godot</span>
                <span className="skill-item magnetic-item"><SiJupyter /> Jupyter</span>
                <span className="skill-item magnetic-item"><SiStripe /> Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <h2 className="section-title">Let's Work Together</h2>
            <p className="contact-description">
              Have a question or want to work together? I'm always interested in new opportunities and collaborations.
            </p>
            <div className="contact-links">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rdinh2023@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-link"
              >
                <FaExternalLinkAlt /> Email Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;