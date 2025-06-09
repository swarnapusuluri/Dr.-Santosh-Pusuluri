import React from 'react';
import '../App.css';

export default function SwarnaInfoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className="modal-content swarna-info-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        <div className="modal-header">
          <h2 className="modal-title">Swarna Pusuluri</h2>
          <p className="swarna-subtitle">Developer</p>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>Contact Information</h3>
            <div className="cv-details swarna-details">
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:swarnapusuluri@gmail.com" className="contact-link">
                  swarnapusuluri@gmail.com
                </a>
              </p>
              <p>
                <strong>LinkedIn:</strong>{' '}
                <a href="https://www.linkedin.com/in/swarna-pusuluri/" target="_blank" rel="noopener noreferrer" className="contact-link">
                  linkedin.com/in/swarna-pusuluri/
                </a>
              </p>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:+11234567890" className="contact-link">
                  +1 858-282-7541
                </a>
              </p>
              <p>
                <strong>Location:</strong> Minneapolis, Minnesota, USA
              </p>
            </div>
          </div>

          <div className="modal-section">
            <h3>About Me</h3>
            <p className="cv-details swarna-about-text">
              I am a full-stack Java developer specializing in building scalable web applications. My expertise includes Java, Spring Boot, JavaScript, React, OutSystems, and AWS. I am passionate about crafting robust, efficient, and user-friendly solutions that drive business value.
            </p>
          </div>
        </div>

        <div className="modal-actions">
          <button className="glow-button" onClick={onClose}>
            <span className="button-text">Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}