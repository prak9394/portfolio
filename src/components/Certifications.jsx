import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      duration: "300 Hours",
      description: "Demonstrated proficiency in building responsive websites using HTML and CSS, representing approximately 300 hours of coursework.",
      icon: <Award className="cert-icon" />,
      image: "/freecode.png",
      link: "https://www.freecodecamp.org/certification/fcc816bb742-6929-4ed3-9bd2-259ad4ecfe07/responsive-web-design"
    },
    {
      title: "C++ Programming",
      issuer: "CSE Pathshala",
      date: "2024",
      description: "Demonstrated strong foundational and advanced skills in C++ programming and problem solving.",
      icon: <Award className="cert-icon" />,
      image: "/cse pathsala.png"
    },
    {
      title: "Generative AI",
      issuer: "Udemy",
      date: "2024",
      description: "Explored the fundamentals of Generative AI, including working with large language models and prompt engineering.",
      icon: <Award className="cert-icon" />,
      image: "/udemy.png"
    },
    {
      title: "ChatGPT 4 Prompt Engineering, Gen AI & ML",
      issuer: "Infosys Springboard",
      date: "Aug 12, 2025",
      description: "Advanced certification covering ChatGPT 4 prompt engineering strategies, alongside core concepts in Generative AI and Machine Learning.",
      icon: <Award className="cert-icon" />,
      image: "/infosyis.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="certifications" className="certifications-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Certifications
        </motion.h2>

        <motion.div 
          className="certifications-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {certifications.map((cert, index) => (
            <motion.div key={index} variants={itemVariants} className="cert-card glass-card">
              <div className="cert-image-container">
                <img src={cert.image} alt={cert.title} className="cert-image" loading="lazy" />
              </div>
              <div className="cert-header">
                <div className="icon-wrapper gradient-bg">
                  {cert.icon}
                </div>
                <div className="cert-meta">
                  <span className="cert-date">{cert.date}</span>
                  {cert.duration && <span className="cert-duration" style={{marginLeft: '10px', fontSize: '0.9rem', color: 'var(--primary)'}}>• {cert.duration}</span>}
                </div>
              </div>
              
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <h4 className="cert-issuer gradient-text">{cert.issuer}</h4>
                <p className="cert-desc text-gray">{cert.description}</p>
              </div>
              
              <div className="cert-footer">
                {cert.link ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link-btn flex items-center gap-2" style={{textDecoration: 'none'}}>
                    View Credential <ExternalLink size={16} />
                  </a>
                ) : (
                  <button className="cert-link-btn flex items-center gap-2">
                    View Credential <ExternalLink size={16} />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
