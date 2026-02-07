import React from 'react';

const Section = ({ 
  title, 
  subtitle, 
  children, 
  variant = 'default',
  className = '' 
}) => {
  return (
    <div className={`section-content ${variant} ${className}`}>
      {title && (
        <div className="section-header">
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="section-body">
        {children}
      </div>
    </div>
  );
};

export default Section;