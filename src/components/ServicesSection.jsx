// src/components/ServicesSection.jsx
import React from 'react';
import FloatingParticles from './FloatingParticles';
import ServiceCard from './ServiceCard';
import '../App.css'; // Assuming section styles are in App.css

export default function ServicesSection({ services, onLearnMore }) {
  return (
    <section className="services-section" id="services">
      <FloatingParticles />
      <div className="services-content">
        <div className="services-header">
          <h2 className="services-title">Services</h2>
          <p className="services-subtitle">
            Comprehensive periodontal care with cutting-edge technology and personalized treatment plans
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onLearnMore={onLearnMore}
            />
          ))}
        </div>
      </div>
    </section>
  );
}