import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <p className="contact-message">Feel free to reach out — I'm always open to new opportunities!</p>
      <br></br>
      <div className="contact-grid">
        <div className="contact-item">
          <FaPhone className="icon" />
          <span><a href="tel:+919309751507">9309751507</a> / <a href="tel:+918421881675">8421881675</a></span>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <a href="mailto:surekant13997@gmail.com">surekant13997@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaLinkedin className="icon" />
          <a
            href="https://www.linkedin.com/in/suraj-more-470b47170"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suraj More
          </a>
        </div>
        <div className="contact-item">
          <FaInstagram className="icon" />
          <a href="https://www.instagram.com/suraj_._more?igsh=MW5hZ25leWtva3Exbg==" target="_blank" rel="noopener noreferrer">
            @suraj_._more
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
