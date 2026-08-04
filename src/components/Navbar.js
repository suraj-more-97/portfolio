
import React from 'react';
import './Navbar.css';

function Navbar({ onNavigate, currentPage, pageNames }) {
  const handleLogoClick = () => {
    onNavigate(0); // Go to Hero page
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo" onClick={handleLogoClick}>Suraj More</div>
        <ul className="nav-links">
          {pageNames.map((pageName, index) => (
            pageName !== 'HOME' && (
              <li key={pageName}>
                <button
                  type="button"
                  className={`nav-link ${currentPage === index ? 'active' : ''}`}
                  onClick={() => onNavigate(index)}
                >
                  {pageName}
                </button>
              </li>
            )
          ))}
          <li>
            <a
              className="nav-link resume-link"
              href="/Suraj_More Resume (1).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
