import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="skills-group">
        <h3>Frontend Technologies</h3>
        <ul className="skills-list">
          <li>React.js</li>
          <li>JavaScript</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Tailwind CSS</li>
          <li>Material UI</li>
          <li>Redux / Context API</li>
          <li>NextJs</li>
          <li>Animating React Apps</li>
          <li>Deploying React Apps</li>
        </ul>
      </div>

      <div className="skills-group">
        <h3>Development Tools</h3>
        <ul className="skills-list">
          <li>VS Code</li>
          <li>Postman</li>
          <li>Git & GitHub</li>
          <li>Nginx</li>
        </ul>
      </div>

      <div className="skills-group">
        <h3>Other Skills</h3>
        <ul className="skills-list">
          <li>RESTful APIs</li>
          <li>Responsive Design</li>
          <li>Performance Optimization</li>
        </ul>
      </div>

      <div className="skills-group">
        <h3>Certifications</h3>
        <ul className="skills-list">
          <li>Infosys Certified React Developer</li>
          <li>Infosys Certified Frontend Developer</li>
          <li>AWS Cloud Practitioner</li>
          <li>Microsoft Azure 900</li>
        </ul>
      </div>

    </section>
  );
}

export default Skills;
