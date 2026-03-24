import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Activity, GraduationCap } from 'lucide-react';
import './About.css';

const About = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      location: "Punjab, India",
      date: "Since August 2023",
      score: "CGPA: 7.01"
    },
    {
      institution: "St. John's School",
      degree: "Intermediate",
      location: "Ghazipur, U.P",
      date: "Apr 2021 - Mar 2022",
      score: "Percentage: 81%"
    },
    {
      institution: "St. John's School",
      degree: "Matriculation",
      location: "Ghazipur, U.P",
      date: "Apr 2019 - Mar 2020",
      score: "Percentage: 84%"
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
    <section id="about" className="about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3><BookOpen className="inline-icon" /> My Journey</h3>
            <p>
              I am a passionate Computer Science student and aspiring developer who thrives on solving complex problems. 
              My journey involves building efficient applications in C++ and Java while creating modern, responsive web experiences. 
              I am dedicated to continuous learning and leveraging my problem-solving skills to build impactful software.
            </p>
            
            <div className="highlights">
              <div className="highlight-item">
                <Award className="highlight-icon" />
                <div>
                  <h4>Achievements</h4>
                  <p>Solved 200+ problems on LeetCode demonstrating strong analytical and algorithm skills. Certified in C++ Programming and Generative AI.</p>
                </div>
              </div>
              <div className="highlight-item">
                <Activity className="highlight-icon" />
                <div>
                  <h4>Extracurriculars</h4>
                  <p>Active badminton player focusing on teamwork and discipline. Volunteer mentor for NGO underprivileged students.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="about-education"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="mb-6"><GraduationCap className="inline-icon" /> Education</h3>
            <div className="timeline">
              {education.map((edu, idx) => (
                <motion.div key={idx} variants={itemVariants} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content glass-card p-6">
                    <h4 className="text-xl font-bold">{edu.institution}</h4>
                    <span className="text-accent text-sm font-semibold">{edu.date}</span>
                    <p className="mt-2 text-gray">{edu.degree}</p>
                    <div className="education-meta mt-4 flex justify-between text-sm">
                      <span className="location">{edu.location}</span>
                      <span className="score gradient-text font-bold">{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
