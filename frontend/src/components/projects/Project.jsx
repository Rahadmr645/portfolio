import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Layers, ShieldAlert, Code } from "lucide-react";
import "./Project.css";
import projectsData from "./projectData.js";

const Project = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projectsData.filter(project => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  return (
    <section className="projects-section py-5 text-light" id="projects">
      <div className="container">
        
        {/* Glow backdrop ornament */}
        <div className="projects-glow-orb"></div>

        <div className="text-center mb-5">
          <h2 className="fw-bold gradient-text display-5">Featured Projects</h2>
          <p className="text-secondary mt-2">A curated selection of systems and applications built using modern stacks.</p>
        </div>

        {/* Filter Navigation */}
        <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
          <button 
            className={`filter-btn ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            <Layers size={16} className="me-2" /> All Projects
          </button>
          <button 
            className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
            onClick={() => setFilter("fullstack")}
          >
            <Code size={16} className="me-2" /> Full Stack MERN
          </button>
          <button 
            className={`filter-btn ${filter === "security" ? "active" : ""}`}
            onClick={() => setFilter("security")}
          >
            <ShieldAlert size={16} className="me-2" /> Sockets & Security
          </button>
        </div>

        {/* Projects Grid */}
        <div className="row g-4 justify-content-center">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4 project-card-anim">
              <div className="project-card glass-card h-100 d-flex flex-column overflow-hidden">
                
                {/* Image Box with zoom hover */}
                <div className="project-image-box position-relative">
                  <img src={project.image} alt={project.name} className="project-img" />
                  <div className="project-overlay">
                    <span className="overlay-tech-count">{project.tags.length} Technologies Used</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="project-details p-4 d-flex flex-column flex-grow-1">
                  <h3 className="project-name fw-bold mb-3">{project.name}</h3>
                  <p className="project-description text-secondary mb-4 flex-grow-1">
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div className="project-tags-container mb-4 d-flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tech-badge">{tag}</span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-action-link mt-auto d-inline-flex align-items-center justify-content-center"
                  >
                    Launch Application <FaExternalLinkAlt className="ms-2 icon-link" size={12} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;