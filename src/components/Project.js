import React from 'react';
import './Project.css';

const projects = [
  {
    title: 'Application Migration – Citrix Tools to Web Applications (Ongoing)',
    desc: 'Currently migrating three Citrix-based tools into modern web applications to enhance accessibility and performance:',
    list: [
      'Analytical Source Tool',
      'Tabling Tool – includes Table Configuration and Generate Tables modules',
      'Data Validation Tool',
    ],
    tech: 'React.js, JavaScript, MUI, HTML5, CSS3, REST APIs',
  },
  {
    title: 'BTTS – Bench Tracking Tool System',
    desc: 'Built a responsive and dynamic React.js application to simplify employee operations. Integrated REST APIs and managed app state for optimal performance.',
    list: [],
    tech: 'React.js, JavaScript, Material-UI, HTML5, CSS3',
  },
  {
    title: 'File Comparison Tool (CSV Comparator)',
    desc: 'Created a tool to compare large CSV files with millions of records. Features include row-by-row comparison, diff download, and high-performance rendering.',
    list: [],
    tech: 'React.js, JavaScript, Web Workers, CSV Parser, Bootstrap',
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="projects-list-container">
        {projects.map((project, idx) => (
          <div key={idx} className="project-item">
            <h3 className="project-item-title">{project.title}</h3>
            <p className="project-item-desc">{project.desc}</p>
            {project.list.length > 0 && (
              <ul className="project-item-list">
                {project.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
            <p className="project-item-tech"><strong>Tech Stack:</strong> {project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
