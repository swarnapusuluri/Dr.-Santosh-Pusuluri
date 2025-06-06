// src/components/ServiceModal.jsx
import React, { useEffect } from 'react';
import FloatingParticles from './FloatingParticles'; // Still useful for ambient effects
import GlowButton from './GlowButton';
import '../App.css';

export default function ServiceModal({ service, isOpen, onClose, handleBookConsultation }) {
  console.log('[ServiceModal] Rendered:', { isOpen, service: service?.name });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling behind modal
      console.log('[ServiceModal] Body overflow hidden.');
    } else {
      document.body.style.overflow = 'unset';
      console.log('[ServiceModal] Body overflow unset.');
    }

    // Cleanup function to reset overflow when component unmounts or isOpen changes to false
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !service) {
    console.log('[ServiceModal] Returning null (not open or no service data).');
    return null;
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) { // Only close if overlay itself is clicked
      onClose();
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'active' : ''}`} onClick={handleOverlayClick}>
      {/* Floating particles can remain here to be above the overlay */}
      <FloatingParticles />

      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* NEW: Background video for the modal content */}
        <video autoPlay loop muted playsInline className="modal-video-bg">
          <source src="videos/intro2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* END NEW */}

        <button onClick={onClose} className="modal-close" aria-label="Close modal">
          ×
        </button>

        <div className="modal-header">
          <div className="modal-icon">{service.icon}</div>
          <h2 className="modal-title">{service.name}</h2>
          {/* <div className="modal-price">{service.price}</div> */}
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3>Treatment Overview</h3>
            <p className="modal-details">{service.details}</p>
          </div>

          <div className="modal-section">
            <h3>Key Benefits</h3>
            <ul className="benefits-list">
              {service.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>

          <div className="modal-actions">
            <GlowButton onClick={handleBookConsultation}>
              Book Consultation
            </GlowButton>
          </div>
        </div>
      </div>
    </div>
  );
}