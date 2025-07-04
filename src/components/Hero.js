
import React from 'react';
import './Hero.css';
import profilePhoto from '../assets/profile.jpg';  // adjust path if needed

function Hero() {
  return (
    <section className="hero">
      <div className="hero-photo-wrapper">
        <img src={profilePhoto} alt="Your Name" className="hero-profile-photo" />
      </div>
      <h1>Hello, I'm <span className="highlight">SURAJ MORE</span></h1>
      <p>I’m a passionate web developer building beautiful user experiences.</p>
      <a href="#projects" className="btn">View Projects</a>
    </section>
  );
}

export default Hero;

