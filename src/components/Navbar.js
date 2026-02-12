
import React from 'react';
import './Navbar.css';

function Navbar({ onNavigate, currentPage, pageNames }) {
  const pageMap = {
    'about': 1,
    'projects': 2,
    'skills': 3,
    'contact': 4,
  };

  const handleNavClick = (e, page) => {
    e.preventDefault();
    if (pageMap[page] !== undefined) {
      onNavigate(pageMap[page]);
    }
  };

  const handleLogoClick = () => {
    onNavigate(0); // Go to Hero page
  };

  const getPageIndex = (pageName) => {
    const pageMap = { 'about': 1, 'projects': 2, 'skills': 3, 'contact': 4 };
    return pageMap[pageName] || -1;
  };

  return (
    <nav className="navbar">
      <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>Suraj More</div>
      <ul className="nav-links">
        <li>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            className={currentPage === 1 ? 'active' : ''}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')}
            className={currentPage === 2 ? 'active' : ''}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            onClick={(e) => handleNavClick(e, 'skills')}
            className={currentPage === 3 ? 'active' : ''}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className={currentPage === 4 ? 'active' : ''}
          >
            Contact
          </a>
        </li>
        <li><a href="/SurajResume.pdf" download target="_blank" rel="noopener noreferrer">Resume</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
