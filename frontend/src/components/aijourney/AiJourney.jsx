import React from "react";
import { Cpu, BrainCircuit, Code, Terminal, Sparkles } from "lucide-react";
import "./AiJourney.css";

const AiJourney = () => {
  const milestones = [
    {
      id: 1,
      title: "Core Foundations & Mathematics",
      phase: "Phase 1 • Completed",
      desc: "Deep dive into python-based data analytics, linear algebra, multivariate calculus, probability, and core data preprocessing methods.",
      status: "completed",
      icon: Terminal,
      skills: ["NumPy", "Pandas", "Linear Algebra", "Calculus"]
    },
    {
      id: 2,
      title: "Classical Machine Learning",
      phase: "Phase 2 • Completed",
      desc: "Mastery of supervised and unsupervised learning algorithms including regression, decision trees, SVMs, clustering, and model validation techniques using Scikit-Learn.",
      status: "completed",
      icon: Code,
      skills: ["Scikit-Learn", "Regression", "Clustering", "Data Viz"]
    },
    {
      id: 3,
      title: "Deep Learning & Computer Vision",
      phase: "Phase 3 • In Progress",
      desc: "Constructing artificial neural networks (MLPs, CNNs) for computer vision task recognition. Studying forward/backward propagation, optimizers, and model regularization.",
      status: "current",
      icon: Cpu,
      skills: ["PyTorch", "Neural Networks", "CNNs", "Computer Vision"]
    },
    {
      id: 4,
      title: "NLP, Transformers & LLMs",
      phase: "Phase 4 • Researching",
      desc: "Exploring Transformer architectures, attention mechanisms, Hugging Face pipelines, Retrieval-Augmented Generation (RAG) systems, and integrating AI microservices with MERN backends.",
      status: "future",
      icon: BrainCircuit,
      skills: ["Transformers", "RAG Systems", "Hugging Face", "MERN-AI Integration"]
    }
  ];

  return (
    <section className="ai-journey-section py-5 text-light" id="aijourney">
      <div className="container">
        
        {/* Glow backdrop ornament */}
        <div className="ai-glow-orb"></div>

        <div className="text-center mb-5">
          <h2 className="fw-bold gradient-text display-5">AI Development Journey</h2>
          <p className="text-secondary mt-2">Documenting my transition into building intelligent, neural-network-driven systems.</p>
        </div>

        {/* Timeline container */}
        <div className="timeline-container position-relative mx-auto mt-5">
          
          {/* Main vertical center line */}
          <div className="timeline-line"></div>

          {milestones.map((milestone, idx) => {
            const IconComponent = milestone.icon;
            const isLeft = idx % 2 === 0;

            return (
              <div 
                key={milestone.id} 
                className={`timeline-item d-flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} align-items-center mb-5 position-relative`}
              >
                
                {/* Timeline content box */}
                <div className="timeline-content-wrapper col-12 col-md-5">
                  <div className={`timeline-content-card glass-card p-4 ${milestone.status === 'current' ? 'active-milestone' : ''}`}>
                    <span className={`milestone-badge mb-2 d-inline-block font-mono small ${milestone.status}`}>
                      {milestone.phase}
                    </span>
                    <h3 className="h5 fw-bold mb-3 d-flex align-items-center">
                      {milestone.status === 'current' && <Sparkles size={16} className="text-warning me-2 animate-spin-slow" />}
                      {milestone.title}
                    </h3>
                    <p className="text-secondary mb-4 small">{milestone.desc}</p>
                    
                    {/* Tags */}
                    <div className="d-flex flex-wrap gap-2">
                      {milestone.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="milestone-skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline central node */}
                <div className="timeline-node-container d-none d-md-flex align-items-center justify-content-center">
                  <div className={`timeline-node ${milestone.status}`}>
                    <IconComponent size={18} />
                  </div>
                </div>

                {/* Spacer for structure */}
                <div className="col-d-none col-md-5"></div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default AiJourney;
