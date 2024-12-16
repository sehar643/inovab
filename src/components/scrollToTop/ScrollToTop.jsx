import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // Using Font Awesome arrow icon

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility of the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Function to scroll to the top of the page smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Adding scroll event listener on component mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 bg-gray-400 p-3 rounded-lg text-black text-lg hover:text-gray-700 focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
