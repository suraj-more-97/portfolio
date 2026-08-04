import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-head">
          <p className="section-label">Skills</p>
          <h2>Tools and technologies I use to build modern web experiences.</h2>
          <p className="section-description">
            My stack covers frontend architecture, developer tools, and process support to deliver consistent, high-quality React applications.
          </p>
        </div>

        <div className="skills-grid">
          <article className="skills-card">
            <h3>Frontend Technologies</h3>
            <ul className="skills-list">
              <li>React.js</li>
              <li>JavaScript</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS</li>
              <li>Tailwind CSS</li>
              <li>Material UI</li>
              <li>Redux / Context API</li>
              <li>NextJs</li>
            </ul>
          </article>

          <article className="skills-card">
            <h3>Development Tools</h3>
            <ul className="skills-list">
              <li>VS Code</li>
              <li>Postman</li>
              <li>Git & GitHub</li>
              <li>Nginx</li>
              <li>Confluence</li>
              <li>Jira</li>
              <li>SonarQube</li>
            </ul>
          </article>

          <article className="skills-card">
            <h3>Engineering Skills</h3>
            <ul className="skills-list">
              <li>RESTful APIs</li>
              <li>Responsive Design</li>
              <li>Performance Optimization</li>
              <li>Accessibility</li>
              <li>Testing & Debugging</li>
            </ul>
          </article>

          <article className="skills-card">
            <h3>Certifications</h3>
            <ul className="skills-list">
              <li>Infosys Certified React Developer</li>
              <li>Infosys Certified Frontend Developer</li>
              <li>AWS Cloud Practitioner</li>
              <li>Microsoft Azure 900</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Skills;
