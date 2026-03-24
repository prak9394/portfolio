import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Monitor, Server, Globe, Cpu } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Disaster Management Website",
      date: "Apr 2025",
      type: "Web Application",
      image: "/disaster.png",
      icon: <Globe className="project-icon" />, 
      description: "Developed a disaster management web application with a chat-style interface to guide users during emergencies. Implemented keyword-based query processing to provide relevant safety measures and disaster resources. Designed a modular architecture to support future integration of NLP models and APIs.",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Smart City Traffic Management System",
      date: "Feb 2026",
      type: "Algorithm & Simulation",
      image: "/traafic.png",
      icon: <Server className="project-icon" />,
      description: "Developed a smart traffic management system to optimize city traffic flow using shortest path and congestion control algorithms. Applied DSA concepts to simulate efficient route planning and reduce congestion. Built a web-based interface for route visualization.",
      tech: ["HTML", "CSS", "JavaScript", "DSA Concepts"],
      links: {
        github: "https://github.com/prak9394/Smart-Traffic-Control-System",
        live: "#"
      }
    },
    {
      title: "AI-Powered Analytics Generative Agent",
      date: "Jul 2025",
      type: "Artificial Intelligence",
      image: "/ai.png",
      icon: <Cpu className="project-icon" />,
      description: "Designed and developed an AI agent capable of contextual reasoning, generating real-time data insights, and drafting technical summaries. Integrated ChatGPT-4 algorithms for intelligent prompt engineering, streamlining analytical workflows up to 40%.",
      tech: ["React.js", "Python", "LangChain", "OpenAI"],
      links: {
        github: "https://github.com/prak9394/AI-Generative-Agent",
        live: "#"
      }
    }
  ];

  /* I am hardcoding icon mapping here to prevent error, replacing Globe with Monitor */
  
  const getIcon = (type) => {
    if (type === "Artificial Intelligence") return <Cpu className="project-icon" />;
    return type === "Web Application" ? <Monitor className="project-icon" /> : <Server className="project-icon" />;
  }

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" loading="lazy" />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <div className="project-meta">
                    {getIcon(project.type)}
                    <span className="project-date">{project.date}</span>
                  </div>
                  <div className="project-links">
                    <a href={project.links.github} aria-label="Github Repo" className="icon-link">
                      <Github size={20} />
                    </a>
                    <a href={project.links.live} aria-label="Live Demo" className="icon-link">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-type gradient-text">{project.type}</p>
                
                <p className="project-description">
                  {project.description}
                </p>
                
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
