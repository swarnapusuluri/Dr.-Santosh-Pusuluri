// src/components/HeroSection.jsx
import React from 'react';
import FloatingParticles from './FloatingParticles';
import GlowButton from './GlowButton';
import '../App.css';

export default function HeroSection({ scrollToServices, handleBookConsultation }) {
  return (
    <section className="hero-section" id="about">
      <FloatingParticles />
      <div className="hero-content">
        {/* MODIFIED: Added BDS, MDS */}
        <h1 className="hero-title">
          Dr. Santosh Pusuluri <span className="hero-qualifications">BDS, MDS</span>
        </h1>
        {/* END MODIFIED */}
        <p className="hero-subtitle">
          Periodontist | PANINEEYA Institute | Osmania University Alum
        </p>
        <p className="hero-contact-info">
          <span className="contact-symbol">✉️</span> <a href="mailto:santoshpusuluri443@gmail.com">santoshpusuluri443@gmail.com</a>
        </p>
        <p className="hero-contact-info">
          <span className="contact-symbol">📞</span> <a href="tel:+918331995566">+91 8331995566</a>
        </p>
        <p className="hero-description">
          Specializing in gum surgeries, implants, and preventive periodontal care
        </p>
        <GlowButton onClick={scrollToServices}>
          Explore My Services
        </GlowButton>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
}