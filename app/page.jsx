"use client";

import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Code, Mail, ExternalLink, Award, Briefcase, GraduationCap, Cpu, Terminal, Menu, X,ArrowRight,Download } from 'lucide-react';

export default function Page() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'achievements'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
    title: "Price Optimizer for E-commerce Sellers",
    description:
      "A data-driven pricing engine that helps e-commerce sellers identify optimal product prices by modeling demand and maximizing profit under different market scenarios.",
    tech: ["Python", "Flask", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/AayushP06/price-optimization",
    highlights: [
      "Designed demand estimation logic to model price-sensitivity of products",
      "Implemented profit-maximization strategies under multiple pricing scenarios",
      "Built a full-stack system with API-driven architecture for real-time recommendations"
    ]
  },

    {
  title: "AI-Powered News Summarizer",
  description:
    "An automated news summarization tool that extracts and condenses long articles into concise, readable summaries using transformer-based NLP models.",
  tech: ["Python", "C++", "NLP", "BeautifulSoup"],
  github: "https://github.com/AayushP06/news-summarizer",
  highlights: [
    "Handled long articles using intelligent text chunking strategies",
    "Integrated Python NLP models with a C++ application pipeline",
    "Built robust fallback parsing logic for unreliable article sources"
  ]
},
    {
  title: "Cache Simulator",
  description:
    "A low-level systems project to analyze cache behavior, memory access patterns, and performance trade-offs in modern architectures.",
  tech: ["C++", "Systems Programming"],
  highlights: [
    "Implemented LRU and FIFO cache replacement policies from scratch",
    "Simulated hit-miss behavior to study performance trade-offs",
    "Strengthened understanding of memory hierarchy and systems design"
  ]
}

  ];

  const experience = [
    {
      title: "Eco-House - Hackathon",
      organization: "IIIT Bhubaneswar",
      date: "March 2025",
      points: [
        "Collaborated in a team of 4 to build eco-friendly waste management with real-time monitoring features",
        "Integrated user-feedback and enabled chat-based community",
        "Applied rapid prototyping under hackathon time constraints"
      ]
    }
  ];

  const skills = {
    "Languages": ["C++", "C", "JavaScript", "Python"],
    "Web Technologies": ["Flask", "React", "Express.js"],
    "Frameworks & Libraries": ["Scikit-learn", "TensorFlow", "NumPy", "Django", "FastAPI"],
    "Developer Tools": ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
    "Cloud/Databases": ["Google Cloud", "Firebase", "MySQL"]
  };

  const achievements = [
    "solved 300+ problems on Codeforces and Leetcode",
    "Finalist – Advaita Hackathon, IIIT Bhubaneswar (2025)",
    "IIT Bhubaneswar D3 Hackathon Finalist (2024)"
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-95 border-b border-gray-800' : 'bg-transparent'
      }`} style={{ backdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-emerald-400" style={{ fontFamily: 'monospace' }}>
            &lt;AKP /&gt;
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['home', 'about', 'projects', 'experience', 'skills', 'achievements'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize text-sm transition-colors ${
                  activeSection === section ? 'text-emerald-400' : 'text-gray-400 hover:text-emerald-400'
                }`}
                style={{ fontFamily: 'monospace' }}
              >
                {section}
              </button>
            ))}
          </div>
            
            
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black bg-opacity-98 border-b border-gray-800">
            <div className="px-6 py-4 flex flex-col gap-4">
              {['home', 'about', 'projects', 'experience', 'skills', 'achievements'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm text-left ${
                    activeSection === section ? 'text-emerald-400' : 'text-gray-400'
                  }`}
                  style={{ fontFamily: 'monospace' }}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl w-full">
          <div className="mb-6">
            <p className="text-emerald-400 mb-3 font-mono text-lg md:text-xl">
  Hi, my name is
</p>

          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gray-100">
            Aayush Kumar Prasad
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-500">
            I build <span className="text-emerald-400">innovative solutions</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8" style={{ maxWidth: '42rem', lineHeight: '1.75' }}>
            I'm a Computer Science UnderGrad specializing in algorithms, machine learning and backend development. Currently focused on building innovative solutions and solving complex problems.
          </p>
          <div className="flex gap-6 mb-12">
            <a 
              href="mailto:aayushprasad42@gmail.com" 
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/aayush-prasad-78672a329/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/AayushP06" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://codeforces.com/profile/TLE_Enjoyer" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-emerald-400 transition-colors"
              aria-label="Codeforces"
            >
              <Code size={24} />
            </a>
          </div>
          <div className="flex gap-4">
          <a
            href="https://drive.google.com/file/d/1g_VJN12M_V2UTAhyksPiMOV0sgvg6-Vt/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-400 text-black rounded-lg hover:bg-emerald-500 transition-colors"
          >
            <Download size={18} />
            View Resume
          </a>
        </div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-100" style={{ fontFamily: 'monospace' }}>
              <span className="text-emerald-400">01.</span> About Me
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="text-gray-400 space-y-4 mb-8">
                  I’m a Computer Science Engineering undergraduate at <span className="text-gray-300">VSSUT Burla</span>,
                  currently maintaining a <span className="text-emerald-400 font-semibold">CGPA of 9.07</span>.
                  I enjoy working at the intersection of <span className="text-gray-300">algorithms, systems, and backend development</span>.
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Academic Interests</h3>
                <p className="text-gray-400">
                  Data Structures and Algorithms, Systems Programming, Machine Learning, Backend Development
                </p>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-100 mb-4">Relevant Coursework</h3>
                <div className="grid grid-cols-2 gap-2">
                  {["OOPS", "DBMS", "Data Structures and Algorithms", "Digital Logic and Design"].map((course) => (
                    <div key={course} className="flex items-start gap-2 text-gray-400">
                      <span className="text-emerald-400 mt-1">▹</span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded border border-gray-800 p-6">
              <GraduationCap className="text-emerald-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-gray-100 mb-2">Education</h3>
              <p className="text-gray-400 text-sm mb-2">VSSUT Burla</p>
              <p className="text-gray-500 text-sm mb-2">B.Tech in CSE</p>
              <p className="text-gray-500 text-sm mb-2">2024 - 2028</p>
              <p className="text-emerald-400 font-semibold">CGPA: 9.07/10.0</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-100" style={{ fontFamily: 'monospace' }}>
              <span className="text-emerald-400"></span> Some Things I've Built
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-4 items-center">
                <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''}`}>
                  <p className="text-sm text-emerald-400 mb-2" style={{ fontFamily: 'monospace' }}>Featured Project</p>
                  <h3 className="text-2xl font-bold text-gray-100 mb-4">{project.title}</h3>
                  <div className="bg-gray-900 p-6 rounded border border-gray-800">
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                          <span className="text-emerald-400">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4 text-sm" style={{ fontFamily: 'monospace' }}>
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-gray-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        className="text-gray-400 hover:text-emerald-400 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
                <div className={`md:col-span-5 relative ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-emerald-900 to-gray-900 rounded border border-gray-800 flex items-center justify-center" style={{ aspectRatio: '16/9', opacity: 0.2 }}>
                    <Terminal className="text-emerald-400" size={64} style={{ opacity: 0.3 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-100" style={{ fontFamily: 'monospace' }}>
              <span className="text-emerald-400"></span> Experience
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          {experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-800 pl-8 relative">
              <div className="absolute w-4 h-4 rounded-full bg-emerald-400" style={{ left: '-9px', top: 0 }}></div>
              <p className="text-sm text-emerald-400 mb-1" style={{ fontFamily: 'monospace' }}>{exp.date}</p>
              <h3 className="text-xl font-bold text-gray-100 mb-1">{exp.title}</h3>
              <p className="text-gray-400 mb-4">{exp.organization}</p>
              <ul className="space-y-3">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-gray-400 flex items-start gap-3">
                    <span className="text-emerald-400 mt-1">▹</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-gray-100" style={{ fontFamily: 'monospace' }}>
              <span className="text-emerald-400">04.</span> Technical Skills
            </h2>
            <div className="flex-1 h-px bg-gray-800"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-900 rounded border border-gray-800 p-6">
                <h3 className="text-lg font-semibold text-emerald-400 mb-4" style={{ fontFamily: 'monospace' }}>{category}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {items.map((skill) => (
                    <div key={skill} className="flex items-start gap-2 text-gray-400">
                      <span className="text-emerald-400 mt-1">▹</span>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-12" style={{ fontFamily: 'monospace' }}>
            <span className="text-emerald-400"></span> Achievements
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-emerald-400 transition-all">
              <div className="text-4xl mb-4">🏆</div>
              <p className="text-sm text-gray-400">300+ problems solved</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-emerald-400 transition-all">
              <div className="text-4xl mb-4">🥇</div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">Advaita Finalist</h3>
              <p className="text-sm text-gray-400">IIIT Bhubaneswar 2025</p>
            </div>
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-emerald-400 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-emerald-400 mb-2">D3 Hackathon Finalist</h3>
              <p className="text-sm text-gray-400">IIIT Bhubaneswar 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl text-center">
          <p className="text-emerald-400 mb-4" style={{ fontFamily: 'monospace' }}> What's Next?</p>
          <h2 className="text-5xl font-bold text-gray-100 mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-8" style={{ lineHeight: '1.75' }}>
            I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:aayushprasad42@gmail.com"
            className="inline-block px-8 py-4 border border-emerald-400 text-emerald-400 rounded hover:bg-emerald-400 hover:bg-opacity-10 transition-colors"
            style={{ fontFamily: 'monospace' }}
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex gap-6 justify-center mb-4">
            <a href="mailto:aayushprasad42@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://www.linkedin.com/in/aayush-prasad-78672a329/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/AayushP06" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://codeforces.com/profile/TLE_Enjoyer" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Code size={20} />
            </a>
          </div>
          <p className="text-gray-500 text-sm" style={{ fontFamily: 'monospace' }}>Built by Aayush</p>
        </div>
      </footer>
    </div>
  );
};

