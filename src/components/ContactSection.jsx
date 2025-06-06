// src/components/ContactSection.jsx
import React from 'react';
import GlowButton from './GlowButton';
import '../App.css';

export default function ContactSection({ handleBookConsultation }) {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <h2 className="contact-title">Ready to Transform Your Smile?</h2>
        <p className="contact-subtitle">
          Schedule a consultation today and discover how our advanced periodontal treatments can restore your oral health and confidence.
        </p>
        <GlowButton onClick={handleBookConsultation}>
          Book Your Consultation
        </GlowButton>
      </div>
    </section>
  );
}