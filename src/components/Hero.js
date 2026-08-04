
import React, { useState } from 'react';
import './Hero.css';
import profilePhoto from '../assets/suraj.jpeg';

function Hero({ onNavigate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const goToProjects = () => onNavigate?.(2);
  const goToContact = () => onNavigate?.(5);

  return (
    <>
      <section className="hero">
        <div className="hero-decor" />
        <div className="hero-content">
          <div className="hero-photo-wrapper" onClick={openModal}>
            <img src={profilePhoto} alt="Suraj More" className="hero-profile-photo" />
          </div>
          <div className="hero-copy">
            <p className="hero-label">Frontend Developer</p>
            <h1>
              Hello, I'm <span className="highlight">SURAJ MORE</span>
            </h1>
            <p className="hero-text">
              I build polished React applications with clean UI, strong performance,
              and a focus on intuitive user experiences.
            </p>
            <div className="hero-actions">
              <button type="button" className="hero-btn primary" onClick={goToProjects}>View Projects</button>
              <button type="button" className="hero-btn secondary" onClick={goToContact}>Contact Me</button>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <img src={profilePhoto} alt="Suraj More" className="modal-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;

