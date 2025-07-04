
import React from 'react';

import { useState } from 'react';
import './Hero.css';
import profilePhoto from '../assets/suraj.jpeg';  // adjust path if needed

function Hero() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
    <section className="hero">
      <div className="hero-photo-wrapper" onClick={openModal}>
        <img src={profilePhoto} alt="Your Name" className="hero-profile-photo" />
      </div>
      <h1>Hello, I'm <span className="highlight">SURAJ MORE</span></h1>
      <p>Skilled React developer specializing in dynamic, user-centric web interfaces with strong API integration skills.</p>
      <a href="#projects" className="btn">View Projects</a>
    </section>

    {/* Modal Popup */}
    {isModalOpen && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <span className="close-button" onClick={closeModal}>&times;</span>
          <img src={profilePhoto} alt="Full Suraj More" className="modal-image" />
        </div>
      </div>
    )}
    </>

  );
}

export default Hero;

