import React, { useState } from 'react';
import './Project.css';

const projects = [
  {
    title: 'Annual Landfill Review (ALFR) — Current Project',
    desc: 'Designing wireframes and UI flows, translating requirements into responsive React.js interfaces while ensuring test coverage and code quality.',
    list: [
      'Designed responsive wireframes and UI flows for React.js components',
      'Created Jest unit tests and maintained coverage',
      'Enforced code quality using SonarQube',
      'Tracked issues in Jira and documented progress in Confluence',
      'Managed version control with Git',
    ],
    tech: ['React.js', 'JavaScript', 'Jest', 'SonarQube', 'Git', 'Jira', 'Confluence'],
    status: 'ongoing',
    icon: '🗂️',
  },
  {
    title: 'WebApp Migration — Citrix Tools to Web Applications',
    desc: 'Modernized legacy Citrix-based internal tools into responsive web applications using React.js and Material-UI, improving usability and performance across multiple business workflows.',
    list: [
      'Analytical Source Tool',
      'Tabling Tool – includes Table Configuration and Generate Tables modules',
      'Data Validation Tool',
      'PDT (Product Definition Tool)',
      'FIFO (Force In Force Out)',
      'Migration Viewer',
    ],
    tech: ['React.js', 'JavaScript', 'Material UI', 'HTML5', 'CSS3', 'REST APIs'],
    status: 'ongoing',
    icon: '🚀',
  },
  {
    title: 'BTTS — Bench Tracking Tool System',
    desc: 'Built a responsive, modular UI with REST API integration and Redux state management; this solution was recognized with the Infosys Insta Award.',
    list: [
      'Developed modular React components using Material-UI',
      'Integrated REST APIs for live data updates',
      'Managed application state with Redux',
      'Improved user workflows for tracking bench activity',
    ],
    tech: ['React.js', 'JavaScript', 'Material-UI', 'Redux', 'REST APIs'],
    status: 'completed',
    icon: '📊',
  },
  {
    title: 'File Comparison Tool (CSV Comparator)',
    desc: 'Built a high-performance comparator for large CSV files with advanced diffing, filtering, and downloadable reporting capabilities.',
    list: [
      'Handled millions of rows using Web Workers',
      'Implemented diff view for quick comparison',
      'Added sorting and filtering for large datasets',
      'Enabled report download for CSV comparisons',
    ],
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
