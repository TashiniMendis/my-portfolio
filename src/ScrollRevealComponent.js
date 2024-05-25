// ScrollRevealComponent.js
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './App.css';

const ScrollRevealComponent = () => {
  useEffect(() => {
    ScrollReveal({
        distance: '80px',  // Distance the element is initially hidden
        duration: 2000,    // Duration of the reveal animation in milliseconds
        delay: 200         // Delay before the animation starts in milliseconds
    });

    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

    return () => {
      // Cleanup code if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollRevealComponent;
