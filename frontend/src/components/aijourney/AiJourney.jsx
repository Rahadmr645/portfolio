import React from "react";
import "./AiJourney.css";

const AiJourney = () => {
  const features = [
    { title: "Neural Networks", subtitle: "Deep Learning" },
    { title: "NLP", subtitle: "Language Models" },
    { title: "Computer Vision", subtitle: "Image Recognition" },
  ];

  return (
    <div className="ai-journey d-flex justify-content-center align-items-center min-vh-100 bg-dark text-light">
      <div className="ai-card container text-center p-5 rounded-4 shadow-lg position-relative">
        <div className="d-flex justify-content-center mb-4">
          <div className="icon-float mx-2 bg-opacity-25 bg-primary p-3 rounded-circle">
            <i className="bi bi-atom fs-3 text-info"></i>
          </div>
          <div className="icon-float mx-2 bg-opacity-25 bg-warning p-3 rounded-circle">
            <i className="bi bi-stars fs-3 text-warning"></i>
          </div>
        </div>
        <h1 className="gradient-title fw-bold mb-4">
          Exploring Artificial Intelligence and the Future of Technology
        </h1>
        <p className="text-secondary fs-5 mx-auto mb-5 w-75">
          Embarking on an exciting journey into the world of AI and machine learning. 
          From understanding neural networks to building intelligent systems, 
          I'm committed to pushing the boundaries of what's possible with technology.
        </p>
        <div className="row g-4 justify-content-center">
          {features.map((feature, i) => (
            <div key={i} className="col-md-3 col-sm-6">
              <div className="feature-card float-box p-4 rounded-4 h-100 bg-secondary bg-opacity-25 border border-secondary-subtle">
                <p className="text-light-50 mb-1">{feature.title}</p>
                <h5 className="text-white fw-semibold">{feature.subtitle}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiJourney;
