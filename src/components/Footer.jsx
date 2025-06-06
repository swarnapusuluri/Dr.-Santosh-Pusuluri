// src/components/Footer.jsx
import React from 'react';
import '../App.css'; // For footer styles

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {currentYear} Dr. Santosh Pusuluri. All Rights Reserved.
      </p>
      <p className="footer-text">
        Developed by <span className="developer-name">Swarna Pusuluri</span> (
        <a href="https://www.linkedin.com/in/swarna-pusuluri/" target="_blank" rel="noopener noreferrer" className="developer-email">
          swarnapusuluri@gmail.com
        </a>
        )
      </p>
    </footer>
  );
}