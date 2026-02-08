import React from 'react';
import Section from '../components/Section';

const Analysis = () => {
  return (
    <Section 
      title="Data Analysis"
    >
      <div className="analysis-content">

        {/* <div className="findings-grid">
          <div className="finding-card accent-blue">
            <div className="finding-header">
              <span className="finding-icon">📊</span>
              <h3>Contract Type Impact</h3>
            </div>
            <div className="finding-stat">42%</div>
            <p className="finding-description">
              Month-to-month customers show 42% churn rate vs. 11% for long-term contracts
            </p>
            <div className="finding-insight">
              <strong>Insight:</strong> Contract commitment is the strongest predictor of churn
            </div>
          </div>

          <div className="finding-card accent-purple">
            <div className="finding-header">
              <span className="finding-icon">⚡</span>
              <h3>Tenure Correlation</h3>
            </div>
            <div className="finding-stat">-0.35</div>
            <p className="finding-description">
              Strong negative correlation between customer tenure and churn probability
            </p>
            <div className="finding-insight">
              <strong>Insight:</strong> First 6 months are critical for retention
            </div>
          </div>

          <div className="finding-card accent-green">
            <div className="finding-header">
              <span className="finding-icon">💳</span>
              <h3>Payment Method</h3>
            </div>
            <div className="finding-stat">45%</div>
            <p className="finding-description">
              Electronic check users have the highest churn rate at 45%
            </p>
            <div className="finding-insight">
              <strong>Insight:</strong> Automated payments correlate with lower churn
            </div>
          </div>

          <div className="finding-card accent-orange">
            <div className="finding-header">
              <span className="finding-icon">🔒</span>
              <h3>Service Add-ons</h3>
            </div>
            <div className="finding-stat">-28%</div>
            <p className="finding-description">
              Customers with security/backup services show 28% lower churn
            </p>
            <div className="finding-insight">
              <strong>Insight:</strong> Service bundling increases customer stickiness
            </div>
          </div>

          <div className="finding-card accent-pink">
            <div className="finding-header">
              <span className="finding-icon">💰</span>
              <h3>Price Sensitivity</h3>
            </div>
            <div className="finding-stat">$20</div>
            <p className="finding-description">
              Average monthly charge for churned customers is $20 higher
            </p>
            <div className="finding-insight">
              <strong>Insight:</strong> Price optimization could reduce churn
            </div>
          </div>

          <div className="finding-card accent-teal">
            <div className="finding-header">
              <span className="finding-icon">📡</span>
              <h3>Internet Service</h3>
            </div>
            <div className="finding-stat">2.5x</div>
            <p className="finding-description">
              Fiber optic users churn 2.5x more than DSL users
            </p>
            <div className="finding-insight">
              <strong>Insight:</strong> Service quality issues may drive fiber churn
            </div>
          </div>
        </div> */}

        <div className="analysis-summary">
          <h3>What violation types are most common across sites or domains?</h3>
          <div className="summary-points">
            <div className="summary-point">
              <p>
                Across all analyzed website domains, syntactic accessibility violations are by far the most common. The distribution of violation types shows that syntax related issues significantly outnumber both semantic and layout violations. This indicates that many accessibility failures stem from low-level implementation problems, such as missing HTML attributes, improper ARIA usage, or invalid markup, rather than from visual design choices or content meaning. The dominance of syntactic violations suggests that foundational accessibility standards are not being consistently met across websites, regardless of domain category.
              </p>
            </div>
          </div>

          <h3>Are there patterns in violations by violation category (syntactic, semantic, layout)?</h3>
          <div className="summary-points">
            <div className="summary-point">
              <p>
                Clear patterns also emerge when examining violations by category. Syntactic violations form the largest share followed by semantic violations with layout violations occurring least frequently. Semantic issues such as unclear heading structures or missing contextual cues appear regularly but at much lower volumes while layout violations are comparatively rare. This pattern implies that while higher level accessibility concerns exist the most widespread barriers are rooted in technical implementation rather than user facing design. It also reflects the strengths and limitations of automated accessibility testing which tends to detect syntactic errors more reliably than semantic or layout related problems.
              </p>
            </div>
          </div>

          <h3>Examine invisible barriers: e.g., are certain violations more common on government sites than on e-commerce sites?</h3>
          <div className="summary-points">
            <div className="summary-point">
              <p>
                When comparing domains differences in both volume and severity reveal important invisible barriers. News and media websites show the highest total number of accessibility violations followed by educational platforms and technology related sites. Government and public sector websites while not having the highest overall counts display a concerning concentration of moderate and serious violations. These issues often affect assistive technology users in ways that are not immediately visible such as broken navigation for screen readers or inaccessible form structures. In contrast e-commerce sites tend to exhibit more minor violations likely because commercial incentives encourage faster remediation of issues that affect key user flows like purchasing. This contrast highlights that government websites despite serving critical public functions may pose deeper accessibility risks when violations occur as users often have no alternative means of accessing these services. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Analysis;