// src/components/GlowButton.jsx
import React from 'react';
import '../App.css'; // Assuming button styles are in App.css

export default function GlowButton({ children, onClick, className = "" }) {
  return (
    <button
      className={`glow-button ${className}`}
      onClick={onClick}
    >
      <span className="button-text">{children}</span>
    </button>
  );
}