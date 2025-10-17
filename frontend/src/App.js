import './App.css';
import React, { useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { FaReact, FaNodeJs, FaDatabase, FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiFlask, SiPostgresql, SiJupyter, SiCplusplus, SiC, SiArduino, SiFirebase, SiTailwindcss, SiGodotengine, SiNextdotjs, SiStripe, SiSupabase } from 'react-icons/si';

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
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });
  const [parallaxOffset, setParallaxOffset] = React.useState(0);

  // Scroll progress and parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      // Show back to top button after scrolling down
      setShowBackToTop(scrollTop > 500);

      // Parallax effect for hero background
      setParallaxOffset(scrollTop * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom cursor tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  // Mouse cursor tracking for interactive particles and Dyson spheres
  useEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;
    const particles = hero.querySelectorAll('.particle');
    const dysonSpheres = hero.querySelectorAll('.dyson-sphere');
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Make particles react to cursor
        particles.forEach((particle) => {
          const particleRect = particle.getBoundingClientRect();
          const particleX = particleRect.left - rect.left + particleRect.width / 2;
          const particleY = particleRect.top - rect.top + particleRect.height / 2;

          const distance = Math.sqrt(
            Math.pow(mouseX - particleX, 2) + Math.pow(mouseY - particleY, 2)
          );

          if (distance < 150) {
            const scale = 1 + (150 - distance) / 150;
            particle.style.transform = `translate(-50%, -50%) scale(${scale})`;
            particle.style.opacity = '1';
          } else {
            particle.style.transform = 'translate(-50%, -50%) scale(1)';
            particle.style.opacity = '0.6';
          }
        });

        // Make Dyson spheres react to cursor
        dysonSpheres.forEach((sphere) => {
          const sphereRect = sphere.getBoundingClientRect();
          const sphereX = sphereRect.left - rect.left + sphereRect.width / 2;
          const sphereY = sphereRect.top - rect.top + sphereRect.height / 2;

          const distance = Math.sqrt(
            Math.pow(mouseX - sphereX, 2) + Math.pow(mouseY - sphereY, 2)
          );

          if (distance < 250) {
            sphere.classList.add('hover-active');
          } else {
            sphere.classList.remove('hover-active');
          }
        });
      });
    };

    const handleMouseLeave = () => {
      particles.forEach((particle) => {
        particle.style.transform = 'translate(-50%, -50%) scale(1)';
        particle.style.opacity = '0.6';
      });
      dysonSpheres.forEach((sphere) => {
        sphere.classList.remove('hover-active');
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      {/* Custom Cursor Trail */}
      <div
        className="cursor-trail"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`
        }}
      ></div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}

      {/* Header */}
      <header className="header">
        <div className="container">
          <h1 className="name">Roy Dinh</h1>
          <nav className="nav">
            <a href="https://github.com/royd2023" target="_blank" rel="noopener noreferrer" className="nav-link">
              <FaGithub /> GitHub
            </a>
            <a href="https://drive.google.com/file/d/1pK-H7N1TVTU82HiGQTP0eTQjLHxqjDGE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="nav-link">
              Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-background" style={{ transform: `translateY(${parallaxOffset}px)` }}>
          {/* Animated Particles */}
          <div className="particles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`particle particle-${i + 1}`}></div>
            ))}
          </div>

          {/* Dyson Sphere Wireframes */}
          <div className="dyson-spheres">
            {/* Large Dyson Sphere */}
            <div className="dyson-sphere dyson-large">
              <div className="sphere-container">
                {[...Array(12)].map((_, i) => (
                  <div key={`lat-${i}`} className="latitude-ring" style={{ '--ring-index': i }}></div>
                ))}
                {[...Array(12)].map((_, i) => (
                  <div key={`lon-${i}`} className="longitude-ring" style={{ '--ring-index': i }}></div>
                ))}
              </div>
            </div>

            {/* Medium Dyson Sphere */}
            <div className="dyson-sphere dyson-medium">
              <div className="sphere-container">
                {[...Array(10)].map((_, i) => (
                  <div key={`lat-${i}`} className="latitude-ring" style={{ '--ring-index': i }}></div>
                ))}
                {[...Array(10)].map((_, i) => (
                  <div key={`lon-${i}`} className="longitude-ring" style={{ '--ring-index': i }}></div>
                ))}
              </div>
            </div>

            {/* Small Dyson Sphere */}
            <div className="dyson-sphere dyson-small">
              <div className="sphere-container">
                {[...Array(8)].map((_, i) => (
                  <div key={`lat-${i}`} className="latitude-ring" style={{ '--ring-index': i }}></div>
                ))}
                {[...Array(8)].map((_, i) => (
                  <div key={`lon-${i}`} className="longitude-ring" style={{ '--ring-index': i }}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient Orbs */}
          <div className="gradient-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2 className="hero-title">
                <span className="title-word">Full</span> <span className="title-word">Stack</span> <span className="title-word">Developer</span> <span className="title-word">&</span> <span className="title-word">CS</span> <span className="title-word">Student</span>
              </h2>
              <p className="hero-description">
                Fully committed to the philosophy of life-long learning, I'm a full stack developer with a deep passion for JavaScript, React and all things web development. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for software engineering. 
              </p>
              <div className="hero-details">
                <p className="detail-item"><strong>🎓 Computer Science @ The Ohio State University (Class of 2027)</strong></p>
                <p className="detail-item"><strong>Currently:</strong> Building Boxure (e-commerce platform) • Contributing as undergraduate reasearch assistant • Teaching programming through Code 4 Community</p>
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

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h3 className="footer-name">Roy Dinh</h3>
              <p className="footer-tagline">Full Stack Developer & CS Student</p>
            </div>
            <div className="footer-links">
              <a href="https://github.com/royd2023" target="_blank" rel="noopener noreferrer" className="footer-link">
                <FaGithub /> GitHub
              </a>
              <a href="mailto:rdinh2023@gmail.com" className="footer-link">
                <FaExternalLinkAlt /> Email
              </a>
              <a href="https://drive.google.com/file/d/1pK-H7N1TVTU82HiGQTP0eTQjLHxqjDGE/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="footer-link">
                Resume
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Roy Dinh. Built with React.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;