import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('dark');

  // Dynamically calculate colors for inline styles based on the theme
  const themeBgRgb = theme === 'dark' ? '5, 5, 5' : '255, 255, 255';
  const themeTextMuted = theme === 'dark' ? '#a1a1aa' : '#4b5563';

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    // Scroll Animation Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('v');
        });
      },
      { threshold: 0.08 }
    );

    const animatedElements = document.querySelectorAll('.fu');
    animatedElements.forEach((el) => observer.observe(el));

    const heroEl = document.getElementById('hero-el');
    if (heroEl) heroEl.classList.add('v');

    // Mouse Move Glow Effect
    const handleMouseMove = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const glowCards = document.querySelectorAll('.glow-card');
    glowCards.forEach((card) => {
      card.addEventListener('mousemove', handleMouseMove);
    });

    // Cleanup listeners on unmount
    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
      glowCards.forEach((card) => {
        card.removeEventListener('mousemove', handleMouseMove);
      });
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="page">
      <nav>
        <div className="nav-logo">AB.</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>

          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      <div className="wrap">
        {/* HERO */}
        <div className="hero fu" id="hero-el">
          <div>
            <div className="badge">
              <div className="pulse"></div>Open to opportunities
            </div>
            <h1 className="name">
              Amit Ashok<br />
              <span className="last">Beloshe</span>
            </h1>
            <p className="role-line">
              <strong>Aspiring Software Developer</strong> — Java · Python · Spring Boot
            </p>
            <p className="hero-desc">
              I build backend systems and full-stack web applications with a focus on clean architecture, database management, and practical problem-solving. Looking for my first professional engineering role.
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-p">See my projects ↓</a>
              <a href="mailto:amitbeloshe007@gmail.com" className="btn btn-g">Get in touch</a>
            </div>
            <div className="meta-row">
              <div className="chip"><span>📍</span>Pune, India</div>
              <div className="chip"><span>📞</span>+91-7798193225</div>
              <div className="chip"><span>🎓</span>BBA-CA · SPPU</div>
              <div className="chip"><span>🏆</span>240hr Diploma · IT DESK</div>
            </div>
          </div>

          <div className="av-wrap">
            <div className="av-outer">
              {/* PROFILE IMAGE */}
              <img
                src="/profile.jpg"
                alt="Amit Beloshe"
                className="av-inner"
                style={{ objectFit: 'cover', padding: 0 }}
                onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="av-inner">AB</div>'; }}
              />
            </div>
            <div className="av-ring"></div>
            <div className="av-ring2"></div>
          </div>
        </div>

        {/* STATS */}
        <div className="stats fu">
          <div className="stat">
            <div className="stat-n">5+</div>
            <div className="stat-l">Languages known</div>
          </div>
          <div className="stat">
            <div className="stat-n">2</div>
            <div className="stat-l">Full-stack projects</div>
          </div>
          <div className="stat">
            <div className="stat-n">240h</div>
            <div className="stat-l">Professional training</div>
          </div>
          <div className="stat">
            <div className="stat-n">2025</div>
            <div className="stat-l">Ready to join</div>
          </div>
        </div>

        {/* PROJECTS */}
        <section id="projects" className="fu">
          <div className="eyebrow">Projects</div>
          <h2 className="sec-title">What I've built</h2>
          <div className="projects">

            {/* Shedula Task Management */}
            <div
              className="proj-card glow-card"
              style={{
                display: 'flex',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '450px'
              }}
            >
              {/* --- BACKGROUND IMAGE & GRADIENT OVERLAY --- */}
              <div
                style={{
                  position: 'absolute',
                  top: 0, left: 0, right: 0, bottom: 0,
                  zIndex: 0
                }}
              >
                <img
                  src="taskflow.jpg"
                  alt="Shedula Task Management"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'left top'
                  }}
                />
                {/* Dynamic Overlay: Adapts based on light/dark mode */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: `linear-gradient(to right, rgba(${themeBgRgb},0) 0%, rgba(${themeBgRgb},0.85) 45%, rgba(${themeBgRgb},1) 100%)`
                  }}
                />
              </div>

              {/* --- FOREGROUND TEXT --- */}
              <div
                className="proj-info glow-content"
                style={{
                  position: 'relative',
                  zIndex: 1,
                  marginLeft: 'auto',
                  width: '55%',
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}
              >
                <div className="tags">
                  <span className="tag tag-blue">Java</span>
                  <span className="tag tag-blue">Spring Boot</span>
                  <span className="tag tag-blue">React</span>
                  <span className="tag tag-green">MySQL</span>
                </div>
                <h3 style={{ margin: '15px 0', fontSize: '2rem' }}>Shedula</h3>

                {/* Dynamic Text Color */}
                <p style={{ color: themeTextMuted, marginBottom: '20px' }}>
                  An AI-powered Kanban task management application. Built with Spring Boot and structured around MVC architecture for high maintainability.
                </p>
                <div className="bullets" style={{ marginBottom: '20px' }}>
                  <div className="bullet">Built REST API endpoints for full CRUD operations</div>
                  <div className="bullet">Designed relational database schema in MySQL</div>
                  <div className="bullet">Applied MVC architecture for clean separation</div>
                </div>
                <div className="proj-links">
                  <a href="https://github.com/amti3109" target="_blank" rel="noreferrer" className="lk-main">
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>

            {/* Anime Streaming */}
            <div className="proj-card flip glow-card">
              <div className="proj-info glow-content">
                <div className="tags">
                  <span className="tag tag-pur">Python</span>
                  <span className="tag tag-amber">Full-Stack</span>
                  <span className="tag tag-green">MySQL</span>
                </div>
                <h3>Anime Streaming Platform</h3>
                <p>
                  A full-stack web application for browsing and streaming anime content, with user authentication, a searchable catalog, and responsive UI built from scratch.
                </p>
                <div className="bullets">
                  <div className="bullet">Built secure login and signup with database-backed authentication</div>
                  <div className="bullet">Implemented anime catalog management and search functionality</div>
                  <div className="bullet">Designed responsive frontend pages in HTML and CSS across all devices</div>
                  <div className="bullet">Handled video content and backend modules in Python with MySQL integration</div>
                </div>
                <div className="pills">
                  <span className="pill">Python</span>
                  <span className="pill">HTML</span>
                  <span className="pill">CSS</span>
                  <span className="pill">MySQL</span>
                  <span className="pill">Auth</span>
                  <span className="pill">Git</span>
                </div>
                <div className="proj-links">
                  <a href="https://github.com/amti3109" target="_blank" rel="noreferrer" className="lk-main">View on GitHub →</a>
                </div>
              </div>
              <div className="proj-vis glow-content" style={{ padding: 0, background: 'transparent' }}>
                <img
                  src="crunchy.png"
                  alt="Anime Streaming Platform"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'right top',
                    WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)',
                    maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 65%, rgba(0,0,0,0) 100%)'
                  }}
                />
              </div>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="fu">
          <div className="eyebrow">Technical skills</div>
          <h2 className="sec-title">What I work with</h2>
          <div className="skills-grid">
            <div className="sk-card glow-card">
              <div className="glow-content">
                <div className="sk-head">
                  <div className="sk-icon" style={{ background: 'rgba(96,165,250,0.1)', border: '1px solid rgba(96,165,250,0.2)' }}>💻</div>
                  <h4>Programming Languages</h4>
                </div>
                <div className="sk-items">
                  <span className="sk-item">Java</span>
                  <span className="sk-item">Python</span>
                  <span className="sk-item">JavaScript</span>
                  <span className="sk-item">C</span>
                  <span className="sk-item">C++</span>
                </div>
              </div>
            </div>

            <div className="sk-card glow-card">
              <div className="glow-content">
                <div className="sk-head">
                  <div className="sk-icon" style={{ background: 'rgba(167,139,250,0.1)', border: '1px solid rgba(167,139,250,0.2)' }}>⚙️</div>
                  <h4>Frameworks & Technologies</h4>
                </div>
                <div className="sk-items">
                  <span className="sk-item">Spring Boot</span>
                  <span className="sk-item">REST APIs</span>
                  <span className="sk-item">HTML</span>
                  <span className="sk-item">CSS</span>
                  <span className="sk-item">MySQL</span>
                  <span className="sk-item">SQL</span>
                </div>
              </div>
            </div>

            <div className="sk-card glow-card">
              <div className="glow-content">
                <div className="sk-head">
                  <div className="sk-icon" style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.2)' }}>🛠️</div>
                  <h4>Tools & Platforms</h4>
                </div>
                <div className="sk-items">
                  <span className="sk-item">Git</span>
                  <span className="sk-item">GitHub</span>
                  <span className="sk-item">VS Code</span>
                  <span className="sk-item">Linux Basics</span>
                </div>
              </div>
            </div>

            <div className="sk-card glow-card">
              <div className="glow-content">
                <div className="sk-head">
                  <div className="sk-icon" style={{ background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.2)' }}>🧠</div>
                  <h4>Core Concepts</h4>
                </div>
                <div className="sk-items">
                  <span className="sk-item">OOP</span>
                  <span className="sk-item">MVC Architecture</span>
                  <span className="sk-item">Database Design</span>
                  <span className="sk-item">Data Structures</span>
                  <span className="sk-item">Problem Solving</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION & CERTS */}
        <section id="education" className="fu">
          <div className="eyebrow">Education & Certifications</div>
          <h2 className="sec-title">Academic background</h2>
          <div className="edu-grid">
            <div className="edu-card glow-card">
              <div className="glow-content">
                <div className="edu-year">2025 — Expected 2026</div>
                <h4>Bachelor of Business Administration in Computer Applications</h4>
                <div className="org">Pratibha College of Commerce & Computer Studies<br />Savitribai Phule Pune University</div>
                <div className="detail">
                  BBA-CA programme covering computer applications, business fundamentals, software development, and database management.
                </div>
              </div>
            </div>

            <div className="edu-card glow-card">
              <div className="glow-content">
                <div className="cert-badge">🏆 Certification</div>
                <div className="edu-year">Professional Diploma — 240 Hours</div>
                <h4>Professional Diploma in Programming</h4>
                <div className="org">IT DESK</div>
                <div className="detail">
                  Intensive 240-hour programme covering Core Java, Advanced Java, Python, C, and C++ — with hands-on project work and programming fundamentals.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="fu">
          <div className="eyebrow">About me</div>
          <h2 className="sec-title">A little more context</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a fresh graduate from Pune, India, with a BBA in Computer Applications and a 240-hour professional programming diploma. I've spent the past couple of years building real projects — a Spring Boot task management backend and a full-stack Python streaming platform — to develop skills I can actually use on the job.
              </p>
              <p>
                I'm looking for a software engineering role where I can contribute backend or full-stack work, continue learning fast, and grow with a team that takes code quality seriously.
              </p>

              {/* SECONDARY PROFILE IMAGE */}
              <img
                src="/about-me.jpg"
                alt="Amit working"
                style={{ width: '100%', borderRadius: '16px', marginTop: '10px', marginBottom: '20px', border: '1px solid var(--bd)' }}
                onError={(e) => e.target.style.display = 'none'}
              />

              <p style={{ marginBottom: '10px', color: 'var(--text)', fontWeight: 600, fontSize: '0.9rem' }}>
                Languages
              </p>
              <div className="lang-row">
                <div className="lang-chip">English</div>
                <div className="lang-chip">Hindi</div>
                <div className="lang-chip">Marathi</div>
              </div>
            </div>

            <div className="strengths">
              <div className="strength glow-card">
                <div className="glow-content" style={{ display: 'flex', gap: '14px' }}>
                  <div className="str-icon">🔍</div>
                  <div className="str-body">
                    <strong>Analytical mindset.</strong> Strong problem-solving ability — breaks down complex requirements before writing a line of code.
                  </div>
                </div>
              </div>
              <div className="strength glow-card">
                <div className="glow-content" style={{ display: 'flex', gap: '14px' }}>
                  <div className="str-icon">⚡</div>
                  <div className="str-body">
                    <strong>Fast learner.</strong> Picked up Spring Boot, REST API design, and full-stack development through independent study and project work.
                  </div>
                </div>
              </div>
              <div className="strength glow-card">
                <div className="glow-content" style={{ display: 'flex', gap: '14px' }}>
                  <div className="str-icon">🤝</div>
                  <div className="str-body">
                    <strong>Team player.</strong> Strong communication skills, comfortable collaborating across disciplines and picking up context quickly.
                  </div>
                </div>
              </div>
              <div className="strength glow-card">
                <div className="glow-content" style={{ display: 'flex', gap: '14px' }}>
                  <div className="str-icon">📐</div>
                  <div className="str-body">
                    <strong>Architecture-aware.</strong> Understands MVC, OOP, and clean code principles — not just syntax, but how to structure a maintainable system.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="fu">
          <div className="cta-box">
            <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '18px', position: 'relative', zIndex: 2 }}>
              Get in touch
            </div>
            <h2 style={{ position: 'relative', zIndex: 2 }}>
              Ready to contribute<br />from day one.
            </h2>
            <p className="cta-sub" style={{ position: 'relative', zIndex: 2 }}>
              Seeking full-stack or backend engineering roles. Let's talk.
            </p>
            <div className="cta-btns">
              <a href="mailto:amitbeloshe007@gmail.com" className="btn btn-p">amitbeloshe007@gmail.com</a>
              <a href="https://linkedin.com/in/amit-beloshe-29162133b" target="_blank" rel="noreferrer" className="btn btn-g">LinkedIn</a>
            </div>
            <div className="socials">
              <a href="https://github.com/amti3109" target="_blank" rel="noreferrer">GitHub</a>
              <span className="dot-sep">●</span>
              <a href="https://linkedin.com/in/amit-beloshe-29162133b" target="_blank" rel="noreferrer">LinkedIn</a>
              <span className="dot-sep">●</span>
              <a href="tel:+917798193225">+91-7798193225</a>
            </div>
          </div>
        </section>

        <footer>
          <div className="footer-l">© 2026 Amit Ashok Beloshe. All rights reserved.</div>
          <div className="footer-r">Pune, India 🇮🇳</div>
        </footer>
      </div>
    </div>
  );
}

export default App;