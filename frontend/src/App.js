import './App.css';
import React, { useEffect, useRef } from 'react';
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
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const projectsTitleRef = useRef(null);
  const skillsTitleRef = useRef(null);
  const contactTitleRef = useRef(null);
  const contactContentRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe section titles
    if (projectsTitleRef.current) observer.observe(projectsTitleRef.current);
    if (skillsTitleRef.current) observer.observe(skillsTitleRef.current);
    if (contactTitleRef.current) observer.observe(contactTitleRef.current);

    // Observe sections for line animations
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    // Observe contact content
    if (contactContentRef.current) observer.observe(contactContentRef.current);

    // Observe project cards with staggered animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    // Observe skill categories with staggered animation
    const skillCategories = document.querySelectorAll('.skill-category');
    skillCategories.forEach((category, index) => {
      category.style.transitionDelay = `${index * 0.1}s`;
      observer.observe(category);
    });

    return () => observer.disconnect();
  }, []);

  // Mouse cursor tracking for interactive lines
  useEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;
    const shapes = hero.querySelectorAll('.shape');
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        shapes.forEach((shape) => {
          const shapeRect = shape.getBoundingClientRect();
          const shapeX = shapeRect.left - rect.left + shapeRect.width / 2;
          const shapeY = shapeRect.top - rect.top + shapeRect.height / 2;

          // Calculate distance from mouse to shape center
          const distance = Math.sqrt(
            Math.pow(mouseX - shapeX, 2) + Math.pow(mouseY - shapeY, 2)
          );

          // Remove all cursor classes
          shape.classList.remove('cursor-near', 'cursor-close', 'cursor-far');

          // Apply appropriate class based on distance
          if (distance < 80) {
            // Very close - brightest
            shape.classList.add('cursor-near');
          } else if (distance < 150) {
            // Close - medium brightness
            shape.classList.add('cursor-close');
          } else if (distance < 250) {
            // Far - dimmer
            shape.classList.add('cursor-far');
          }
          // Beyond 250px - default state (already handled by CSS)
        });
      });
    };

    const handleMouseLeave = () => {
      // Reset all shapes to default state when mouse leaves hero section
      shapes.forEach((shape) => {
        shape.classList.remove('cursor-near', 'cursor-close', 'cursor-far');
      });
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

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
      <section className="hero" ref={heroRef}>
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
            <div className="shape shape-6"></div>
            <div className="shape shape-7"></div>
            <div className="shape shape-8"></div>
            <div className="shape shape-9"></div>
            <div className="shape shape-10"></div>
            <div className="shape shape-11"></div>
            <div className="shape shape-12"></div>
            <div className="shape shape-13"></div>
            <div className="shape shape-14"></div>
            <div className="shape shape-15"></div>
            <div className="shape shape-16"></div>
            <div className="shape shape-17"></div>
            <div className="shape shape-18"></div>
            <div className="shape shape-19"></div>
            <div className="shape shape-20"></div>
            <div className="shape shape-21"></div>
            <div className="shape shape-22"></div>
            <div className="shape shape-23"></div>
            <div className="shape shape-24"></div>
            <div className="shape shape-25"></div>
            <div className="shape shape-26"></div>
            <div className="shape shape-27"></div>
            <div className="shape shape-28"></div>
            <div className="shape shape-29"></div>
            <div className="shape shape-30"></div>
            <div className="shape shape-31"></div>
            <div className="shape shape-32"></div>
            <div className="shape shape-33"></div>
            <div className="shape shape-34"></div>
            <div className="shape shape-35"></div>
            <div className="shape shape-36"></div>
            <div className="shape shape-37"></div>
            <div className="shape shape-38"></div>
            <div className="shape shape-39"></div>
            <div className="shape shape-40"></div>
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
      <section className="projects-section" ref={projectsRef}>
        <div className="container">
          <h2 className="section-title" ref={projectsTitleRef}>Projects</h2>
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
      <section className="skills-section" ref={skillsRef}>
        <div className="container">
          <h2 className="section-title" ref={skillsTitleRef}>Skills & Technologies</h2>
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
      <section className="contact-section" ref={contactRef}>
        <div className="container">
          <div className="contact-content" ref={contactContentRef}>
            <h2 className="section-title" ref={contactTitleRef}>Let's Work Together</h2>
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