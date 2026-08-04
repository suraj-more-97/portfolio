import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-head">
          <p className="section-label">About</p>
          <h2>Building intuitive React experiences with reliable quality.</h2>
          <p className="section-description">
            I bring strong frontend engineering, responsive design, and quality-driven delivery into every application.
            My goal is to create user interfaces that feel polished, fast, and effortless.
          </p>
        </div>

        <div className="about-grid">
          <article className="about-card">
            <h3>Experience</h3>
            <p>
              I have over 4+ years of experience crafting responsive React apps, building UI flows, and turning
              complex requirements into user-friendly web products.
            </p>
          </article>

          <article className="about-card">
            <h3>Tools & Frameworks</h3>
            <p>
              I work with React.js, Material UI, Bootstrap, CSS, SCSS, Redux, and REST APIs, and I maintain code quality with
              Git, Jira, and SonarQube.
            </p>
          </article>

          <article className="about-card">
            <h3>Approach</h3>
            <p>
              I focus on clean component structure, strong accessibility, performance optimization, and delivering polished UI
              interactions that make applications feel modern.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default About;
