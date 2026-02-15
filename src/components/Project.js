import React, { useState } from 'react';
import './Project.css';

const projects = [
  {
    title: 'WebApp Migration – Citrix Tools to Web Applications (Ongoing)',
    desc: 'Currently migrating multiple Citrix-based tools into modern web applications to enhance accessibility and performance. Actively contributing to development and QA bug fixes:',
    descColor: '#ffffff',
    list: [
      'Analytical Source Tool',
      'Tabling Tool – includes Table Configuration and Generate Tables modules',
      'Data Validation Tool',
      'PDT (Product Definition Tool)',
      'FIFO (Force In Force Out)',
      'Tax Import Tool – fixed tester-raised bugs',
    ],
    tech: ['React.js', 'JavaScript', 'MUI', 'HTML5', 'CSS3', 'REST APIs', ],
    status: 'ongoing',
    icon: '🚀',
  },
  {
    title: 'BTTS – Bench Tracking Tool System',
    desc: 'Built a responsive and dynamic React.js application to simplify employee operations. Integrated REST APIs and managed app state for optimal performance.',
    list: [],
    tech: ['React.js', 'JavaScript', 'Material-UI', 'HTML5', 'CSS3'],
    status: 'completed',
    icon: '📊',
  },
  {
    title: 'File Comparison Tool (CSV Comparator)',
    desc: 'Created a tool to compare large CSV files with millions of records. Features include row-by-row comparison, diff download, and high-performance rendering.',
    list: [],
    tech: ['React.js', 'JavaScript', 'Web Workers', 'CSV Parser', 'Bootstrap'],
    status: 'completed',
    icon: '📁',
  },
];

function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="projects" className="section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-list-container">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`project-item ${expandedIndex === idx ? 'expanded' : ''}`}
            onMouseEnter={() => setExpandedIndex(idx)}
            onMouseLeave={() => setExpandedIndex(null)}
            onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
          >
            <div className="project-item-header">
              <div className="project-item-icon">{project.icon}</div>
              <div className="project-item-title-wrapper">
                <h3 className="project-item-title">{project.title}</h3>
                <span className={`project-status ${project.status}`}>
                  {project.status === 'ongoing' ? '🔄 Ongoing' : '✅ Completed'}
                </span>
              </div>
            </div>

            <p className="project-item-desc" style={{ color: project.descColor || 'rgba(255, 255, 255, 0.85)' }}>
              {project.desc}
            </p>

            {project.list.length > 0 && (
              <ul className="project-item-list">
                {project.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}

            <div className="project-item-tech-container">
              <span className="tech-label">Tech Stack:</span>
              <div className="tech-badges">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
