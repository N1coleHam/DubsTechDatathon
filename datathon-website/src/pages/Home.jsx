import React from 'react';

const Home = () => {
  const scrollToNext = () => {
    document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-badge">DubsTech Datathon 2026</div>
        
        <h1 className="home-title">
          <span className="title-line">Access to Technology:</span>
          <span className="title-line gradient-text">When Design Becomes a Barrier</span>
          {/* <span className="title-line">with Machine Learning</span> */}
        </h1>
        
        <p className="home-description">
          Technology promises access, efficiency, and scale, but those benefits are not distributed evenly. Our analysis of the AccessGuru dataset, which contains over <strong>3,500 real-world accessibility violations</strong> across <strong>448 websites</strong>, reveals that digital exclusion is not random. Instead, accessibility failures cluster by <strong>domain</strong>, <strong>design patterns</strong>, and <strong>violation types</strong>, exposing invisible barriers embedded in modern web systems.
        </p>

        <p className="home-description">
          By combining data visualization with machine learning, we examine <em>where technology fails</em>, <em>who is most affected</em>, and <em>how structural design choices contribute to inequity</em>.
        </p>
        
        <div className="home-team">
          <div className="team-label">Team</div>
          <div className="team-members">
            <span>Nicole Ham</span>
            <span>Tiffany Guan</span>
            <span>Hanna Pan</span>
          </div>
        </div>
        
        <button className="home-cta" onClick={scrollToNext}>
          <span>Explore Our Findings</span>
          <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      <div className="home-visual">
        <div className="visual-grid">
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
          <div className="grid-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;