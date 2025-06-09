// src/components/Header.jsx
import React from 'react';
import '../App.css';

export default function Header({ onHeaderTitleClick, onOpenSwarnaInfoModal }) {
  return (
    <header className="header">
      <a onClick={onHeaderTitleClick} className="header-title-link">
        <h1 className="header-title">
          Dr. Santosh Pusuluri <span className="header-qualifications">BDS, MDS</span>
        </h1>
      </a>

      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
        <a onClick={onOpenSwarnaInfoModal} className="header-nav-link swarna-name-link">
          Swarna Pusuluri(Website Developer)
        </a>
      </nav>
    </header>
  );
}