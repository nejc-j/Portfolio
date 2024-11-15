import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [logoSrc, setLogoSrc] = useState('/icons/logo-dark.png'); // Start with light logo

  // Smooth scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='header'>
      <div className='logo'>
        <img src={logoSrc} alt='Jerry Logo' className='logo-img' />
      </div>
      <nav className='navbar'>
        <a href='#about' onClick={() => scrollToSection('about')}>
          about
        </a>
        <a href='#technologies' onClick={() => scrollToSection('technologies')}>
          technologies
        </a>
        <a href='#projects' onClick={() => scrollToSection('projects')}>
          projects
        </a>
        <a
          href='#contact'
          onClick={() => scrollToSection('contact')}
          className='contact-link'
        >
          Let's talk
        </a>
      </nav>
    </header>
  );
};

export default Header;
