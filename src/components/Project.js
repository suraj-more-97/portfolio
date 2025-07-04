import React from 'react';
import './Project.css';

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">

          <h3>BTTS – Bench Tracking Tool System</h3>
          <p>
            Built a responsive and dynamic React.js application to simplify employee operations. Integrated REST APIs and managed app state for optimal performance.
          </p>
          <p><strong>Tech Stack:</strong> React.js, JavaScript, Material-UI, HTML5, CSS3</p>
        </div>
        <div className="project-card">
          <h3>After-Sales Automobile Management System</h3>
          <p>
            Developed scalable front-end modules and implemented multilingual support. Collaborated with backend teams for seamless API integration.
          </p>
          <p><strong>Tech Stack:</strong> React.js, JavaScript, HTML5, CSS3, Material-UI</p>
        </div>
        <div className="project-card">
          <h3>File Comparison Tool (CSV Comparator)</h3>
          <p>
            Created a tool to compare large CSV files with millions of records. Features include row-by-row comparison, diff download, and high-performance rendering.
          </p>
          <p><strong>Tech Stack:</strong> React.js, JavaScript, Web Workers, CSV Parser, Bootstrap</p>

        </div>
      </div>
    </section>
  );
}

export default Projects;
