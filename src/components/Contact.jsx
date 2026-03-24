import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="contact-icon" />,
      label: "Email",
      value: "uprakhar142@gmail.com",
      href: "mailto:uprakhar142@gmail.com"
    },
    {
      icon: <Phone className="contact-icon" />,
      label: "Mobile",
      value: "+91-9453415189",
      href: "tel:+919453415189"
    },
    {
      icon: <Linkedin className="contact-icon" />,
      label: "LinkedIn",
      value: "prakhar-upadhyay-541045282",
      href: "https://www.linkedin.com/in/prakhar-upadhyay-541045282/"
    },
    {
      icon: <Github className="contact-icon" />,
      label: "GitHub",
      value: "github.com/prak9394",
      href: "https://github.com/prak9394"
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-container">
          <motion.div 
            className="contact-info-cards"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p className="contact-subtitle">
              Feel free to reach out to me for any work or suggestions. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            
            <div className="info-cards-grid">
              {contactInfo.map((info, idx) => (
                <a key={idx} href={info.href} target="_blank" rel="noopener noreferrer" className="info-card glass-card">
                  {info.icon}
                  <div>
                    <h4>{info.label}</h4>
                    <p>{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Send Me a Message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Hello, I'd like to talk about..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
