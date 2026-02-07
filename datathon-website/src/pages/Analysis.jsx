import React from 'react';
import Section from '../components/Section';

const Analysis = () => {
  return (
    <Section 
      title="Analysis" 
      subtitle="Key insights from exploratory data analysis"
    >
      <div className="analysis-content">
        <div className="analysis-intro">
          <p className="lead-text">
            Our exploratory analysis revealed several patterns that strongly correlate with 
            customer churn, providing valuable insights for both model building and business strategy.
          </p>
        </div>

        <div className="findings-grid">
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
        </div>

        <div className="analysis-summary">
          <h3>Summary of Insights</h3>
          <div className="summary-points">
            <div className="summary-point">
              <div className="point-marker"></div>
              <p>
                Contract flexibility and customer tenure are the strongest predictors of churn, 
                suggesting early engagement and commitment are crucial
              </p>
            </div>
            <div className="summary-point">
              <div className="point-marker"></div>
              <p>
                Payment friction and service complexity create churn risk, pointing to opportunities 
                in payment automation and service bundling
              </p>
            </div>
            <div className="summary-point">
              <div className="point-marker"></div>
              <p>
                Price sensitivity varies by customer segment, indicating potential for targeted 
                retention offers based on service usage patterns
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Analysis;