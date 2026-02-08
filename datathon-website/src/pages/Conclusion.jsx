import React from 'react';
import Section from '../components/Section';

const Conclusion = () => {
  return (
    <Section 
      title="Conclusion" 
    >
      <div className="conclusion-content">
        <div className="conclusion-summary">
          <p className="lead-text">
            Together, the clustering analysis and violation-pattern visualizations reveal that web accessibility issues are not randomly distributed across websites, but instead form consistent and interpretable patterns tied to website domain, technical implementation practices, and content complexity.
            Using unsupervised machine learning, we identified meaningful groupings of websites based on accessibility-violation severity and frequency, showing that most websites maintain relatively low levels of accessibility risk while a smaller subset exhibits significantly higher violation concentrations. Visualization results help explain these clusters by showing that syntactic accessibility violations dominate across domains, suggesting that many accessibility barriers originate from foundational implementation errors rather than design intent alone.
          </p>
        </div>

        <div className="key-takeaways">
          <h3>Key Takeaways</h3>
          <div className="takeaways-grid">
            <div className="takeaway-card">
              <div className="takeaway-number">01</div>
              <h4>Accessibility violations follow identifiable patterns across websites.</h4>
              <p>
                K-means clustering revealed distinct accessibility-risk groups, showing that violation severity and frequency naturally organize websites into low, moderate, and high-risk categories rather than forming a random distribution.
              </p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-number">02</div>
              <h4>Most accessibility barriers stem from foundational implementation issues.</h4>
              <p>
                Syntactic violations were the most common across domains, suggesting that many accessibility problems originate from missing attributes, incorrect markup, or improper ARIA usage which are issues that are often preventable through better development practices and automated testing integration.
              </p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-number">03</div>
              <h4>Accessibility risk varies by domain and user impact.</h4>
              <p>
                News and media websites appear more frequently in higher-risk clusters, while government websites, though often lower in total violations, can contain more serious accessibility barriers that disproportionately affect users who rely on assistive technologies.
              </p>
            </div>

          </div>
        </div>

        <div className="conclusion-footer">
          <div className="team-info">
            <p className="team-label">The Nth</p>
            <p className="team-names">Nicole Ham • Tiffany Guan • Hanna Pan</p>
            <p className="team-date">DubsTech Datathon 2026 • February 2026</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Conclusion;