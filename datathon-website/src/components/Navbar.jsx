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
          <a
            href="https://github.com/N1coleHam/DubsTechDatathon"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link github-link"
            aria-label="View GitHub repository"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.258.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.625-5.476 5.92.43.372.823 1.103.823 2.222v3.293c0 .322.192.694.801.576C20.565 21.796 24 17.298 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;