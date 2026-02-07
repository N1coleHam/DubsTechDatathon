import React from 'react';
import Section from '../components/Section';

const Problem = () => {
  return (
    <Section 
      title="The Problem" 
    >
      <div className="problem-content">
        <div className="problem-text">
          <p className="lead-text">
            Accessibility violations are often treated as isolated bugs or technical oversights. However, when viewed at scale, these violations reflect systemic design assumptions about who users are — and who they are not.
          </p>
          <p className="muted-text"><strong>Our guiding question:</strong></p>

          <blockquote className="quote-block">
              Are accessibility barriers evenly distributed across the web, or do certain domains and
              design practices systematically exclude users?
          </blockquote>

          <p>
              To answer this, we move beyond individual violations and analyze <strong>patterns</strong>, <strong>clusters</strong>, and <strong>comparisons across domains</strong>.
          </p>
        </div>

        {/* <div className="problem-stats">
          <div className="stat-card">
            <div className="stat-number">$168B</div>
            <div className="stat-label">Annual cost of churn in telecom</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">5-25x</div>
            <div className="stat-label">Cost to acquire vs retain customers</div>
          </div>
          
          <div className="stat-card">
            <div className="stat-number">67%</div>
            <div className="stat-label">Of churn is preventable</div>
          </div>
        </div> */}

        <div className="problem-objectives">
          <h3>Project Objectives</h3>
          <div className="objectives-grid">
            <div className="objective-item">
              {/* <div className="objective-icon">🎯</div> */}
              <div className="objective-text">
                <strong>Cluster</strong> websites based on similarity in violation patterns to identify “high-risk” domains
              </div>
            </div>
            
            <div className="objective-item">
              {/* <div className="objective-icon">🔍</div> */}
              <div className="objective-text">
                <strong>Identify</strong> patterns in violations by violation category (syntactic, semantic, layout)
              </div>
            </div>
            
            <div className="objective-item">
              {/* <div className="objective-icon">💡</div> */}
              <div className="objective-text">
                <strong>Determine</strong> what violation types are most common across sites or domains
              </div>
            </div>
            
            <div className="objective-item">
              {/* <div className="objective-icon">📊</div> */}
              <div className="objective-text">
                <strong>Examine</strong> invisible barriers: e.g., are certain violations more common on government sites than on e-commerce site
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Problem;