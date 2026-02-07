import React, { useEffect, useState } from 'react';

const Navbar = ({ sections, currentSection, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">DubsTech Datathon</span>
          <span className="logo-year">2026</span>
        </div>
        
        <div className="navbar-links">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`nav-link ${currentSection === section.id ? 'active' : ''}`}
            >
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;