import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Demo from './components/Demo';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PaginationControl from './components/PaginationControl';

const TRANSITION_ANIMATIONS = [
  'fadeSlideUp',
  'zoomIn',
  'slideInRight',
  'slideInLeft',
  'flipIn',
  'rotateScale',
  'bounceIn',
  'skewIn',
  'blindsOpen',
  'waveIn'
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [transitionAnimation, setTransitionAnimation] = useState('fadeSlideUp');
  const [lastUsedAnimations, setLastUsedAnimations] = useState([]);

  const pages = [
    { name: 'HOME', component: Hero },
    { name: 'ABOUT', component: About },
    { name: 'PROJECTS', component: Project },
    { name: 'DEMO', component: Demo },
    { name: 'SKILLS', component: Skills },
    { name: 'CONTACT', component: Contact },
  ];

  const CurrentComponent = pages[currentPage].component;

  const getRandomAnimation = () => {
    let availableAnimations = TRANSITION_ANIMATIONS.filter(
      anim => !lastUsedAnimations.includes(anim)
    );

    if (availableAnimations.length === 0) {
      availableAnimations = TRANSITION_ANIMATIONS;
      setLastUsedAnimations([]);
    }

    const randomIndex = Math.floor(Math.random() * availableAnimations.length);
    const selectedAnimation = availableAnimations[randomIndex];

    setLastUsedAnimations([...lastUsedAnimations, selectedAnimation]);
    return selectedAnimation;
  };

  const handlePrevPage = () => {
    setTransitionAnimation(getRandomAnimation());
    setCurrentPage((prev) => (prev === 0 ? pages.length - 1 : prev - 1));
  };

  const handleNextPage = () => {
    setTransitionAnimation(getRandomAnimation());
    setCurrentPage((prev) => (prev === pages.length - 1 ? 0 : prev + 1));
  };

  const goToPage = (pageIndex) => {
    setTransitionAnimation(getRandomAnimation());
    setCurrentPage(pageIndex);
  };

  return (
    <div className="App">
      <Navbar onNavigate={goToPage} currentPage={currentPage} pageNames={pages.map(p => p.name)} />
      <div className="AppInner">
        <div className={`pages-container ${transitionAnimation}`}>
          <CurrentComponent onNavigate={goToPage} />
        </div>
      </div>
      <PaginationControl 
        currentPage={currentPage}
        totalPages={pages.length}
        pageNames={pages.map(p => p.name)}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        onGoToPage={goToPage}
      />
      <Footer />
    </div>
  );
}

export default App;
