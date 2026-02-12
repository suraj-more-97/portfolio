import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './PaginationControl.css';

function PaginationControl({ 
  currentPage, 
  totalPages, 
  pageNames,
  onPrevPage, 
  onNextPage, 
  onGoToPage 
}) {
  const [showArrows, setShowArrows] = useState(false);
  const [hideTimer, setHideTimer] = useState(null);

  const handleMouseMove = () => {
    setShowArrows(true);

    // Clear existing timer
    if (hideTimer) {
      clearTimeout(hideTimer);
    }

    // Set timer to hide arrows after 3 seconds of no movement
    const timer = setTimeout(() => {
      setShowArrows(false);
    }, 3000);

    setHideTimer(timer);
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimer) {
        clearTimeout(hideTimer);
      }
    };
  }, [hideTimer]);

  return (
    <>
      {/* Floating Arrow Buttons */}
      <div className={`floating-arrows ${showArrows ? 'visible' : ''}`}>
        <button 
          className="floating-arrow-btn prev-arrow" 
          onClick={onPrevPage}
          aria-label="Previous page"
          title="Previous page"
        >
          <FiChevronLeft />
        </button>
        <button 
          className="floating-arrow-btn next-arrow" 
          onClick={onNextPage}
          aria-label="Next page"
          title="Next page"
        >
          <FiChevronRight />
        </button>
      </div>

      {/* Footer with dots and page info */}
      <div className="pagination-control-wrapper">
        <div className="pagination-control">
          <div className="pagination-info">
            <div className="page-dots">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  className={`page-dot ${idx === currentPage ? 'active' : ''}`}
                  onClick={() => onGoToPage(idx)}
                  title={pageNames[idx]}
                  aria-label={`Go to ${pageNames[idx]} page`}
                  aria-pressed={idx === currentPage}
                />
              ))}
            </div>
            <p className="page-info">{pageNames[currentPage]} • {currentPage + 1}/{totalPages}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaginationControl;
