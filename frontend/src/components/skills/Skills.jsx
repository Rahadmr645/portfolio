import React from "react";

import "./Skills.css";

const Skills = () => {
  const techStack = [
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "AI/ML", icon: "https://cdn-icons-png.flaticon.com/512/1089/1089129.png" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ];

  const languages = ["English", "Urdu", "Arabic", "Bangla", "Hindi"];

  return (
    <section className="skills-section text-center py-5">
      <h2 className="fw-bold mb-5 gradient-text">Technology Stack</h2>
      <div className="row g-4 justify-content-center mb-5">
        {techStack.map((tech, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="tech-card">
              <img src={tech.icon} alt={tech.name} className="tech-icon mb-3" />
              <h5>{tech.name}</h5>
            </div>
          </div>
        ))}
      </div>

      {/* Language Section */}
      <div className="languages-box mx-auto mt-5">
        <h3 className="fw-bold mb-4 gradient-text">
          <i className="bi bi-globe"></i> Languages
        </h3>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {languages.map((lang, i) => (
            <span key={i} className="lang-badge">{lang}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
