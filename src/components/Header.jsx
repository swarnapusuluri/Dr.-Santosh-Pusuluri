// src/components/Header.jsx
import React from 'react';
import '../App.css'; // Assuming header styles are in App.css

export default function Header() {
  return (
    <header className="header">
      <a href="#about" className="header-title-link">
        {/* MODIFIED: Added BDS, MDS */}
        <h1 className="header-title">
          Dr. Santosh Pusuluri <span className="header-qualifications">BDS, MDS</span>
        </h1>
        {/* END MODIFIED */}
      </a>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}