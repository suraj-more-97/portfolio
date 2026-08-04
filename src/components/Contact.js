import React from 'react';
import './Contact.css';

import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';


function Contact() {
  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container">
        <div className="contact-heading">
          <p className="contact-label">Contact</p>
          <h2>Let’s build something great together.</h2>
          <p className="contact-subtitle">
            I’m available for frontend roles, React projects, and collaborative product work.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <FaPhone className="icon" />
            </div>
            <div>
              <p className="item-title">Phone</p>
              <div className="item-links">
                <a href="tel:+919309751507">+91 9309751507</a>
                <a href="tel:+918421881675">+91 8421881675</a>
              </div>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <FaEnvelope className="icon" />
            </div>
            <div>
              <p className="item-title">Email</p>
              <a href="mailto:surajmore.tect@gmail.com">surajmore.tect@gmail.com</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <FaLinkedin className="icon" />
            </div>
            <div>
              <p className="item-title">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/suraj-more-470b47170"
                target="_blank"
                rel="noopener noreferrer"
              >
                Suraj More
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon-wrapper">
              <FaInstagram className="icon" />
            </div>
            <div>
              <p className="item-title">Instagram</p>
              <a href="https://www.instagram.com/suraj_._more?igsh=MW5hZ25leWtva3Exbg==" target="_blank" rel="noopener noreferrer">
                @suraj_._more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
