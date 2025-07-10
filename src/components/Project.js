import React, { useState } from 'react';
import './Project.css';

const projectData = [
  {
    title: "BTTS – Employee-Friendly Web Application",
    description: "Built a responsive, modular UI using React.js and Material-UI. Designed dynamic components like tab views, modals, and collapsible menus. Integrated secure REST APIs and implemented Redux for global state management. Focused on accessibility and responsiveness across devices.",
    techStack: "React.js, JavaScript, Material-UI, Redux, HTML5, CSS3"
  },
  {
    title: "File Comparison Tool (CSV Comparator)",
    description: "Built a high-performance CSV comparator to handle millions of rows. Used Web Workers for background processing to ensure non-blocking UI. Implemented a clean diff view with sorting, filtering, and downloadable reports.",
    techStack: "React.js, JavaScript, Web Workers, CSV Parsing, Custom Hooks"
  },
  {
    title: "Smart Expense Tracker",
    description: "Developed a user-friendly React app for real-time expense tracking and budget management. Integrated Firebase for real-time database and authentication. Used Chart.js for spending analytics. Features include CRUD operations, login/signup, and responsive UI.",
    techStack: "React.js, Firebase, HTML, Tailwind CSS, JavaScript"
  },
  {
    title: "Developer Dashboard with Analytics",
    description: "Built a modern admin dashboard using React.js, Tailwind CSS, and Chart.js. Developed reusable UI widgets such as bar charts, pie charts, activity logs, and tables. Simulated real-time project KPIs using mock APIs. Implemented dark mode and responsive design.",
    techStack: "React.js, Tailwind CSS, HTML JavaScript"
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projectData.map((project, index) => (
        <div
          className="project-card"
          key={index}
          onClick={() => setSelectedProject(project)}
        >
          <h3>{project.title}</h3>
          <p>{project.description.substring(0, 100)}...</p>
        </div>
      ))}
    </div>

    {/* Modal */}
    {selectedProject && (
      <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <button className="close-btn" onClick={() => setSelectedProject(null)}>×</button>
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.description}</p>
          <p><strong>Tech Stack:</strong> {selectedProject.techStack}</p>
        </div>
      </div>
    )}
  </section>
  );
}

export default Projects;
