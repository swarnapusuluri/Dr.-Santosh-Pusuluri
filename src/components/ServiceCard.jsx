// src/components/ServiceCard.jsx
import React, { useState, useEffect } from 'react';
import '../App.css'; // Assuming card styles are in App.css

export default function ServiceCard({ service, index, onLearnMore }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const handleClick = () => {
    console.log(`[ServiceCard] Clicked: "${service.name}"`); // Direct click confirmation
    onLearnMore(service);
  };

  return (
    <div
      className={`service-card ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.name}</h3>
      <p className="service-summary">{service.summary}</p>
      <button
        onClick={handleClick}
        className="learn-more-btn"
      >
        Learn More →
      </button>
    </div>
  );
}