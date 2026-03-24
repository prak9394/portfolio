import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-copyright">
            &copy; {year} Prakhar Upadhyay. All Rights Reserved.
          </p>
          <div className="footer-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
