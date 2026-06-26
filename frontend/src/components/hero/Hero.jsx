import React, { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { SiUpwork } from 'react-icons/si';
import './Hero.css';
import logo from '../../assets/rahadlogo.jpg';

const Hero = () => {
  const roles = [
    "Full Stack MERN Developer",
    "Java DSA Certified Expert",
    "Aspiring AI Developer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullText = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero d-flex align-items-center justify-content-center text-center text-light">
      <div className="container py-5">
        
        {/* Profile Image with Rotating Gradient Ring */}
        <div className="profile-img-container mb-4 mx-auto">
          <div className="gradient-ring"></div>
          <img src={logo} alt="MD RAHAD" className="profile-img" />
        </div>

        {/* Headline */}
        <h1 className="display-3 fw-bold mb-2 tracking-tight">
          MD <span className="highlight-gradient">RAHAD</span>
        </h1>
        
        {/* Typing Subtitle */}
        <h2 className="role-text mb-4">
          Building <span className="typed-text">{currentText}</span>
          <span className="cursor">|</span>
        </h2>
        
        {/* Short pitch */}
        <p className="lead text-secondary mx-auto mb-4 hero-pitch" style={{ maxWidth: '600px' }}>
          Crafting high-performance web systems and intelligent algorithms. Specializing in the MERN stack, robust backend engineering, and custom AI integrations.
        </p>

        {/* Social Quick Links */}
        <div className="d-flex justify-content-center gap-3 mb-5 social-quicklinks">
          <a href="https://github.com/Rahadmr645" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/md-rahad-patwary-4b326a237" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
            <Linkedin size={20} />
          </a>
          <a href="https://www.upwork.com/freelancers/~018825ac66df4d612c" target="_blank" rel="noopener noreferrer" className="social-icon-btn">
            <SiUpwork size={18} />
          </a>
        </div>

        {/* Call to Actions */}
        <div className="btn-box d-flex justify-content-center flex-wrap gap-3">
          <button onClick={() => scrollToSection('contact')} className="btn-primary-glow">
            Hire Me <ArrowRight size={16} className="ms-2 arrow-icon" />
          </button>
          <button onClick={() => scrollToSection('projects')} className="btn-secondary-glow">
            View Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;