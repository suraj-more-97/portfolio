import React, { useState, useEffect } from 'react';
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
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => setIsPaused(false), 5000); // 5 seconds pause
      return () => clearTimeout(pauseTimer);
    }
    const timer = setInterval(() => {
      setActive((prev) => {
        setIsPaused(true);
        return (prev + 1) % projects.length;
      });
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const project = projects[active];

  // Calculate indices for the cards
  const first = active;
  const second = (active + 1) % projects.length;
  const third = (active + 2) % projects.length;

  return (
    <section id="projects" className="section">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        <div className="projects-row">
          {[first, second].map(idx => (
            <div key={idx} className="project-card project-card-animate">
              <h3 className="project-title">{projects[idx].title}</h3>
              <p className="project-desc">{projects[idx].desc}</p>
              {projects[idx].list.length > 0 && (
                <ul className="project-list">
                  {projects[idx].list.map((item, i) => (
                    <li key={i}><strong>{item}</strong></li>
                  ))}
                </ul>
              )}
              <p className="project-tech"><strong>Tech Stack:</strong> {projects[idx].tech}</p>
            </div>
          ))}
        </div>
        <div className="projects-row">
          <div className="project-card project-card-animate">
            <h3 className="project-title">{projects[third].title}</h3>
            <p className="project-desc">{projects[third].desc}</p>
            {projects[third].list.length > 0 && (
              <ul className="project-list">
                {projects[third].list.map((item, i) => (
                  <li key={i}><strong>{item}</strong></li>
                ))}
              </ul>
            )}
            <p className="project-tech"><strong>Tech Stack:</strong> {projects[third].tech}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
