import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Project.css";

const Project = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Featured Project</h2>

      <div className="project-card">
        <div className="project-image">
          <img
            src="/images/tabletab-preview.png"
            alt="TableTab Project"
          />
        </div>

        <div className="project-content">
          <h3 className="project-name">TableTab Dashboard</h3>
          <p className="project-description">
            A full-stack MERN application for cafe order management with real-time updates, 
            live analytics, and socket-based communication between staff and kitchen.
          </p>

          <div className="project-tags">
            <span>MongoDB</span>
            <span>Express</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Socket.io</span>
            <span>JWT</span>
          </div>

          <a
            href="https://table-tab-client.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Project <FaExternalLinkAlt className="icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
