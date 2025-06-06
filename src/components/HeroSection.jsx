// src/components/HeroSection.jsx
import React from 'react';
import FloatingParticles from './FloatingParticles';
import GlowButton from './GlowButton';
import '../App.css';

export default function HeroSection({ scrollToServices, handleBookConsultation, onLearnMoreAboutDrSantosh }) { // Added onLearnMoreAboutDrSantosh prop
  return (
    <section className="hero-section" id="about">
      <FloatingParticles />
      <div className="hero-content">
        <h1 className="hero-title">
          Dr. Santosh Pusuluri <span className="hero-qualifications">BDS, MDS</span>
        </h1>
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
        <div className="hero-actions"> {/* NEW: Wrap buttons for layout */}
          <GlowButton onClick={scrollToServices}>
            Explore Our Services
          </GlowButton>
          {/* NEW: Button to open Dr. Santosh's CV modal */}
          <GlowButton onClick={onLearnMoreAboutDrSantosh}>
            Learn More About Dr. Santosh
          </GlowButton>
          {/* END NEW */}
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
}