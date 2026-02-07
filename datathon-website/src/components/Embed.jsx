import React from 'react';

const Embed = ({ 
  type = 'placeholder', 
  src, 
  title = 'Visualization',
  height = '500px',
  children 
}) => {
  if (type === 'tableau') {
    return (
      <div className="embed-container">
        <h3 className="embed-title">{title}</h3>
        <div className="tableau-container" style={{ height }}>
          {/* Replace this with your Tableau embed code */}
          <div className="tableauPlaceholder" dangerouslySetInnerHTML={{ __html: src }} />
        </div>
      </div>
    );
  }

  if (type === 'plotly') {
    return (
      <div className="embed-container">
        <h3 className="embed-title">{title}</h3>
        <div className="plotly-container" style={{ height }}>
          {children}
        </div>
      </div>
    );
  }

  // Placeholder
  return (
    <div className="embed-container">
      <h3 className="embed-title">{title}</h3>
      <div className="embed-placeholder" style={{ height }}>
        <div className="placeholder-content">
          <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2"/>
            <path d="M3 9h18M9 21V9" strokeWidth="2"/>
          </svg>
          <p>Embed your {type} visualization here</p>
          <code className="placeholder-code">
            &lt;Embed type="{type}" src="..." /&gt;
          </code>
        </div>
      </div>
    </div>
  );
};

export default Embed;