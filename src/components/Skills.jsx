import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, PenTool, Database, LayoutTemplate, Coffee } from 'lucide-react';
import './Skills.css';

const getDevicon = (name) => {
  const icons = {
    "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "C": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    "HTML": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    "CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "SQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "Vite": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    "Windows": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/windows8/windows8-original.svg"
  };
  return icons[name] || null;
};

const Skills = () => {
  const categories = [
    {
      title: "Languages",
      icon: <Code2 className="skill-icon" />,
      skills: ["C++", "Java", "C"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="skill-icon" />,
      skills: ["HTML", "CSS", "JavaScript", "React", "React Router", "Vanilla CSS"]
    },
    {
      title: "Core Concepts",
      icon: <PenTool className="skill-icon" />,
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Problem Solving"]
    },
    {
      title: "Databases",
      icon: <Database className="skill-icon" />,
      skills: ["SQL", "Relational Databases", "Database Management"]
    },
    {
      title: "Tools & Platforms",
      icon: <LayoutTemplate className="skill-icon" />,
      skills: ["Git", "GitHub", "Vite", "VS Code", "Windows"]
    },
    {
      title: "Soft Skills",
      icon: <Coffee className="skill-icon" />,
      skills: ["Leadership", "Communication", "Teamwork", "Time Management", "Adaptability"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          My Arsenal
        </motion.h2>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((category, idx) => (
            <motion.div key={idx} variants={itemVariants} className="skill-card glass-card">
              <div className="skill-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, i) => {
                  const iconUrl = getDevicon(skill);
                  return (
                    <li key={i} className="skill-badge">
                      {iconUrl && <img src={iconUrl} alt={`${skill} icon`} className="skill-badge-icon" />}
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
