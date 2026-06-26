import React from "react";
import "./Skills.css";

const Skills = () => {
  const techStack = [
    { 
      name: "MongoDB", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      glowColor: "rgba(71, 162, 72, 0.4)"
    },
    { 
      name: "Express.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      glowColor: "rgba(255, 255, 255, 0.2)"
    },
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      glowColor: "rgba(97, 218, 251, 0.4)"
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      glowColor: "rgba(51, 153, 51, 0.4)"
    },
    { 
      name: "Java", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      glowColor: "rgba(237, 139, 0, 0.4)"
    },
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      glowColor: "rgba(55, 118, 171, 0.4)"
    },
    { 
      name: "AI/ML", 
      icon: "https://cdn-icons-png.flaticon.com/512/1089/1089129.png",
      glowColor: "rgba(157, 78, 221, 0.4)"
    },
    { 
      name: "Docker", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      glowColor: "rgba(36, 150, 237, 0.4)"
    },
    { 
      name: "Git", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      glowColor: "rgba(240, 80, 50, 0.4)"
    },
  ];

  const languages = ["English", "Urdu", "Arabic", "Bangla", "Hindi"];

  return (
    <section className="skills-section text-center py-5" id="skills">
      <div className="container">
        
        {/* Glow backdrop ornament */}
        <div className="skills-glow-orb"></div>

        <h2 className="fw-bold mb-5 gradient-text display-5">Technology Stack</h2>
        
        <div className="row g-4 justify-content-center mb-5">
          {techStack.map((tech, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3">
              <div 
                className="tech-card glass-card p-4 d-flex flex-column align-items-center justify-content-center"
                style={{ "--tech-glow": tech.glowColor }}
              >
                <div className="tech-icon-container mb-3">
                  <img src={tech.icon} alt={tech.name} className="tech-icon" />
                </div>
                <h5 className="tech-name m-0">{tech.name}</h5>
              </div>
            </div>
          ))}
        </div>

        {/* Language Section */}
        <div className="languages-box mx-auto mt-5 p-4 glass-card" style={{ maxWidth: '700px' }}>
          <h3 className="fw-bold mb-4 gradient-text text-center" style={{ fontSize: '1.75rem' }}>
            <i className="bi bi-globe me-2"></i> Languages
          </h3>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {languages.map((lang, i) => (
              <span key={i} className="lang-badge">{lang}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
