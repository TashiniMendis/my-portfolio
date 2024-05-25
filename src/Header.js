import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Home from './Home';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const sectionsRef = useRef([]);
  const navLinksRef = useRef([]);
  const headerRef = useRef(null);

  const handleMenuClick = () => {
    setMenuActive(!menuActive);
  };

  const handleNavLinkClick = () => {
    setMenuActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionsRef.current;
      const navLinks = navLinksRef.current;

      sections.forEach((sec, index) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach((link, i) => {
            link.classList.remove('active');
            if (i === index) {
              link.classList.add('active');
            }
          });
        }
      });

      const header = headerRef.current;
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header ref={headerRef} className={`header ${menuActive ? 'sticky' : ''}`}>
      <a href="#" className="logo">
        Portfolio
      </a>
      <i className={`bx ${menuActive ? 'bx-x' : 'bx-menu'}`} id="menu-icon" onClick={handleMenuClick}></i>
      <nav className={`navbar ${menuActive ? 'active' : ''}`}>
        <a href="#home" ref={(el) => navLinksRef.current[0] = el} onClick={handleNavLinkClick}>
          Home
        </a>
        <a href="#about" ref={(el) => navLinksRef.current[1] = el} onClick={handleNavLinkClick}>
          About
        </a>
        <a href="#skill" ref={(el) => navLinksRef.current[2] = el} onClick={handleNavLinkClick}>
          Skill
        </a>
        <a href="#timeline" ref={(el) => navLinksRef.current[2] = el} onClick={handleNavLinkClick}>
        TimeLine
        </a>
        <a href="#portfolio" ref={(el) => navLinksRef.current[3] = el} onClick={handleNavLinkClick}>
          Portfolio
        </a>
        <a href="#contact" ref={(el) => navLinksRef.current[4] = el} onClick={handleNavLinkClick}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;

