import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import './Hero.css';

const words = ["Developer", "Problem Solver", "C++ Programmer"];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout);
  }, [blink]);

  // Typing effect
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), 1500);
      return;
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 40 : 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hello, I am
            </motion.p>
            
            <motion.h1 
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Prakhar Upadhyay
            </motion.h1>
            
            <div className="hero-typing-container">
              <span className="hero-role">A </span>
              <span className="hero-typing gradient-text">{words[index].substring(0, subIndex)}</span>
              <span className={`hero-cursor ${blink ? 'visible' : 'hidden'}`}>|</span>
            </div>
            
            <motion.div 
              className="hero-cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <a href="/resume1.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Download size={18} /> Download Resume
              </a>
              <a href="#projects" className="btn btn-outline">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-image-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="profile-img-wrapper">
              <img src="/avatar1.png" alt="Prakhar Upadhyay" className="profile-img" />
              <div className="profile-img-backdrop"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} className="bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
