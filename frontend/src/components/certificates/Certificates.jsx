import React, { useState } from 'react';
import { Code, GraduationCap, ZoomIn, X } from 'lucide-react';
import './Certificates.css';
import DSA from '../../assets/DSA.png';
import Development from '../../assets/Development.png';

const Certificates = () => {
  const [lightboxImg, setLightboxImg] = useState(null);

  const certificatesData = [
    {
      id: 1,
      title: 'Data Structures & Algorithms in Java',
      issuer: 'Apna College',
      year: '2025',
      image: DSA, 
      icon: Code,
      description: 'Comprehensive mastery of Java data structures, algorithmic complexity analysis, and problem-solving techniques.'
    },
    {
      id: 2,
      title: 'Front-End Web Development Bootcamp',
      issuer: 'Apna College',
      year: '2025',
      image: Development, 
      icon: GraduationCap,
      description: 'Production-grade training in HTML, CSS, JavaScript, responsive web design systems, and core development workflows.'
    },
  ];

  return (
    <div className="certificates-section text-white py-5" id="certificates">
      <div className="container">
        
        {/* Glow backdrop ornament */}
        <div className="certs-glow-orb"></div>

        <div className="text-center mb-5">
          <h2 className="fw-bold gradient-text display-5">Certifications</h2>
          <p className="text-secondary mt-2">Verified proof of software engineering capabilities and dedication.</p>
        </div>

        <div className="row justify-content-center g-4">
          {certificatesData.map((cert) => {
            const Icon = cert.icon;
            return (
              <div key={cert.id} className="col-12 col-md-6 col-lg-5">
                <div className="certificate-card glass-card h-100 d-flex flex-column overflow-hidden">
                  
                  {/* Image container with click-to-zoom indicator */}
                  <div className="cert-image-box position-relative" onClick={() => setLightboxImg(cert.image)}>
                    <img src={cert.image} alt={cert.title} className="cert-img" />
                    <div className="cert-img-hover-overlay">
                      <ZoomIn size={32} className="zoom-icon" />
                      <span className="mt-2 fw-semibold">Click to Inspect</span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="cert-details p-4 d-flex flex-column flex-grow-1">
                    <div className="d-flex align-items-center mb-3">
                      <div className="cert-icon-container me-3">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="cert-heading fw-bold m-0">{cert.title}</h3>
                        <p className="cert-issuer text-info m-0">{cert.issuer}</p>
                      </div>
                    </div>
                    
                    <p className="cert-desc text-secondary flex-grow-1 mb-4">
                      {cert.description}
                    </p>
                    
                    <div className="cert-footer mt-auto pt-3 border-top border-secondary border-opacity-25 d-flex justify-content-between align-items-center">
                      <span className="text-muted text-uppercase tracking-wider font-mono small">Issued</span>
                      <span className="badge-year font-mono">{cert.year}</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* --- BLUR LIGHTBOX MODAL --- */}
      {lightboxImg && (
        <div className="lightbox-modal" onClick={() => setLightboxImg(null)}>
          <button className="lightbox-close-btn" onClick={() => setLightboxImg(null)}>
            <X size={28} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImg} alt="Certificate Zoom" className="lightbox-img" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Certificates;
