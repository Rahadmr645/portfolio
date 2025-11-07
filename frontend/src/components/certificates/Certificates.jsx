import React from 'react';
import { Code, GraduationCap } from 'lucide-react';
import './Certificates.css';
import DSA from '../../assets/DSA.png'
import Development from '../../assets/Development.png'

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      title: 'Data Structures & Algorithms in Java',
      issuer: 'Apna College',
      year: '2025',
      image: DSA, 
      icon: Code,
    },
    {
      id: 2,
      title: 'Front-End Web Development Bootcamp',
      issuer: 'Apna College',
      year: '2025',
      image: Development, 
      icon: GraduationCap,
    },
  ];

  return (
    <div className="certificates-section text-white py-5">
      <div className="text-center mb-5">
        <h1 className="cert-title">Certifications</h1>
        <p className="cert-subtitle">Proof of skill and dedication.</p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {certificatesData.map((cert) => {
            const Icon = cert.icon;
            return (
              <div key={cert.id} className="col-12 col-md-8 mb-4">
                <div className="certificate-card">
                  <div className="image-box">
                    <img src={cert.image} alt={cert.title} className="cert-image" />
                  </div>
                  <div className="cert-content">
                    <div className="icon-box">
                      <Icon size={48} />
                    </div>
                    <div>
                      <h3 className="cert-heading">{cert.title}</h3>
                      <p className="cert-text">
                        {cert.issuer} • <span>{cert.year}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
