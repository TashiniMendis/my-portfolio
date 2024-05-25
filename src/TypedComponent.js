// TypedComponent.js
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedComponent = () => {
  useEffect(() => {
    const typed = new Typed('.multiple-text', {
      strings: ['Software Engineer', 'Frontend Developer', 'Blogger'],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy(); // Cleanup Typed instance
    };
  }, []);

  return null; // This component doesn't render anything
};

export default TypedComponent;
