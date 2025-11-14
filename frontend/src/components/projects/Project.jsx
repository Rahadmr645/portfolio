import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css";
import projectsData from "./projectData.js";

const Project = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Featured Projects</h2>

      {projectsData.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={project.name} />
          </div>

          <div className="project-content">
            <h3 className="project-name">{project.name}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index}>{tag}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project <FaExternalLinkAlt className="icon" />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Project;