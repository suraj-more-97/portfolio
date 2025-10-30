
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Suraj More</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/SurajMore_CV.pdf" download target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
