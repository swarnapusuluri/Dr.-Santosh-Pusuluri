// src/components/DrSantoshModal.jsx
import React, { useEffect } from 'react';
import FloatingParticles from './FloatingParticles';
import '../App.css'; // For modal base styles

export default function DrSantoshModal({ isOpen, onClose, cvData }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !cvData) {
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
      <FloatingParticles />
      <div className="modal-content dr-santosh-cv-modal" onClick={(e) => e.stopPropagation()}>
        {/* Background video for the modal content */}
        <video autoPlay loop muted playsInline className="modal-video-bg">
          <source src="/intro2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <button onClick={onClose} className="modal-close" aria-label="Close modal">
          ×
        </button>

        <div className="modal-header">
          <h2 className="modal-title">{cvData.name} <span className="modal-qualifications">{cvData.title}</span></h2>
          <p className="modal-subtitle cv-contact-info">
            <span className="contact-symbol">📞</span> <a href="tel:+918331995566">+91 8331995566</a>
            <span className="contact-symbol email-spacer">✉️</span> <a href="mailto:santoshpusuluri443@gmail.com">santoshpusuluri443@gmail.com</a>
          </p>
        </div>

        <div className="modal-body cv-body">
          <div className="modal-section cv-section">
            <h3>Professional Summary</h3>
            <p className="cv-details">{cvData.professionalSummary}</p>
          </div>

          <div className="modal-section cv-section">
            <h3>Education</h3>
            {cvData.education.map((edu, index) => (
              <div key={index} className="cv-item">
                <p><strong>{edu.degree}</strong> ({edu.years})</p>
                <p>{edu.field && `${edu.field}, `}{edu.institution}</p>
              </div>
            ))}
          </div>

          <div className="modal-section cv-section">
            <h3>Experience</h3>
            {cvData.experience.map((exp, index) => (
              <div key={index} className="cv-item">
                <p><strong>{exp.position}</strong> / {exp.hospital}</p>
                <p className="cv-dates">{exp.dates}</p>
                <p className="cv-details">{exp.description}</p>
              </div>
            ))}
          </div>

          <div className="modal-section cv-section">
            <h3>Skills</h3>
            <ul className="cv-list skills-grid">
              {cvData.skills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section cv-section">
            <h3>Membership</h3>
            <ul className="cv-list">
              {cvData.membership.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section cv-section">
            <h3>Thesis</h3>
            <p className="cv-details">{cvData.thesis}</p>
          </div>

          <div className="modal-section cv-section">
            <h3>Publications</h3>
            <ul className="cv-list">
              {cvData.publications.map((pub, index) => (
                <li key={index}>
                  <strong>{pub.title}</strong><br />
                  {pub.authors}. {pub.journal}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section cv-section">
            <h3>Scientific Presentations</h3>
            <ul className="cv-list">
              {cvData.scientificPresentations.map((pres, index) => (
                <li key={index}>
                  <strong>{pres.topic}</strong><br />
                  {pres.event} ({pres.dates})
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section cv-section">
            <h3>Workshops/CDE Programs Attended</h3>
            <ul className="cv-list">
              {cvData.workshopsCDEPrograms.map((ws, index) => (
                <li key={index}>{ws}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section cv-section">
            <h3>Personal Details</h3>
            <p><strong>Languages Known:</strong> {cvData.personalDetails.languages}</p>
            <p><strong>Address:</strong> {cvData.personalDetails.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
}