// src/components/Header.jsx
import React from 'react';
import '../App.css';

// MODIFIED: Accept onHeaderTitleClick prop
export default function Header({ onHeaderTitleClick }) {
  return (
    <header className="header">
      {/* MODIFIED: Removed href and added onClick */}
      <a onClick={onHeaderTitleClick} className="header-title-link">
        <h1 className="header-title">
          Dr. Santosh Pusuluri <span className="header-qualifications">BDS, MDS</span>
        </h1>
      </a>
      {/* END MODIFIED */}
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}