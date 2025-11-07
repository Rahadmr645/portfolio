import React from 'react'
import { Code, Award, Database } from 'lucide-react'
import './About.css'

const About = () => {
  return (
    <section className="about-section py-5 d-flex align-items-center justify-content-center text-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-5 gradient-text">About Me</h2>

        <div className="about-box mx-auto p-4 p-md-5 rounded-4">
          <p className="about-desc mb-5">
            I'm a passionate <span className="highlight">Full Stack Developer</span> 
            with a strong foundation in <span className="highlight">MERN stack</span> technologies. 
            With a deep interest in backend development and <span className="highlight">Artificial Intelligence</span>, 
            I combine technical expertise with creative problem-solving to build intelligent, scalable systems.
          </p>

          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <div className="about-card p-4 rounded-4">
                <div className="icon-circle mb-3 mx-auto">
                  <Code size={32} />
                </div>
                <h6 className="text-muted">Experience</h6>
                <h5 className="fw-semibold">4 Years Programming</h5>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card p-4 rounded-4">
                <div className="icon-circle mb-3 mx-auto">
                  <Award size={32} />
                </div>
                <h6 className="text-muted">Certified</h6>
                <h5 className="fw-semibold">DSA Java – Apna College</h5>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-card p-4 rounded-4">
                <div className="icon-circle mb-3 mx-auto">
                  <Database size={32} />
                </div>
                <h6 className="text-muted">Passion</h6>
                <h5 className="fw-semibold">Backend & AI</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
