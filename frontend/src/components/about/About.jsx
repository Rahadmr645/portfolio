import React from 'react'
import { Code, Award, Database } from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <section className="about-section py-5 d-flex align-items-center justify-content-center text-light" id="about">
      <div className="container text-center">
        
        {/* Glow backdrop ornament */}
        <div className="about-glow-orb"></div>

        <h2 className="fw-bold mb-5 gradient-text display-5">About Me</h2>

        <div className="about-box mx-auto p-4 p-md-5 glass-card">
          <p className="about-desc mb-5">
            I'm a passionate <span className="highlight">Full Stack Developer</span> 
            with a strong foundation in <span className="highlight">MERN stack</span> technologies. 
            With a deep interest in backend development and <span className="highlight">Artificial Intelligence</span>, 
            I combine technical expertise with creative problem-solving to build intelligent, scalable systems.
          </p>

          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <div className="about-card p-4 glass-card neon-glow-cyan">
                <div className="icon-circle mb-3 mx-auto">
                  <Code size={28} />
                </div>
                <h6 className="text-muted text-uppercase tracking-wider mb-2">Experience</h6>
                <h5 className="fw-semibold text-white">4 Years Programming</h5>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card p-4 glass-card neon-glow-purple">
                <div className="icon-circle mb-3 mx-auto icon-purple">
                  <Award size={28} />
                </div>
                <h6 className="text-muted text-uppercase tracking-wider mb-2">Certified</h6>
                <h5 className="fw-semibold text-white">DSA Java – Apna College</h5>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card p-4 glass-card neon-glow-cyan">
                <div className="icon-circle mb-3 mx-auto">
                  <Database size={28} />
                </div>
                <h6 className="text-muted text-uppercase tracking-wider mb-2">Passion</h6>
                <h5 className="fw-semibold text-white">Backend & AI Systems</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
