import React from 'react';
import Section from '../components/Section';

const Conclusion = () => {
  return (
    <Section 
      title="Conclusion" 
      subtitle="Key findings and recommendations for customer retention"
    >
      <div className="conclusion-content">
        <div className="conclusion-summary">
          <p className="lead-text">
            Our analysis successfully identified key churn indicators and built a highly accurate 
            predictive model. The insights gained provide a clear roadmap for reducing customer 
            churn and improving retention strategies.
          </p>
        </div>

        <div className="key-takeaways">
          <h3>Key Takeaways</h3>
          <div className="takeaways-grid">
            <div className="takeaway-card">
              <div className="takeaway-number">01</div>
              <h4>Model Performance</h4>
              <p>
                Our Random Forest model achieves 94.2% accuracy, enabling reliable identification 
                of at-risk customers before they churn. The high recall (96.5%) means we catch 
                most customers who will churn.
              </p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-number">02</div>
              <h4>Contract Impact</h4>
              <p>
                Month-to-month customers churn at 3-4x the rate of contract customers. Converting 
                customers to annual contracts should be a top priority for retention teams.
              </p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-number">03</div>
              <h4>Critical Window</h4>
              <p>
                The first 12 months represent the highest-risk period. Early engagement programs 
                and proactive support can significantly reduce churn during this critical window.
              </p>
            </div>

            <div className="takeaway-card">
              <div className="takeaway-number">04</div>
              <h4>Service Bundling</h4>
              <p>
                Customers with multiple services (security, backup, streaming) show 28% lower 
                churn rates. Cross-selling and bundling strategies can increase customer stickiness.
              </p>
            </div>
          </div>
        </div>

        <div className="recommendations">
          <h3>Business Recommendations</h3>
          <div className="recommendations-list">
            <div className="recommendation-item">
              <div className="rec-icon">🎯</div>
              <div className="rec-content">
                <h4>Implement Predictive Interventions</h4>
                <p>
                  Deploy the model in production to score customers monthly. Automatically trigger 
                  retention campaigns for high-risk customers with personalized offers.
                </p>
              </div>
            </div>

            <div className="recommendation-item">
              <div className="rec-icon">📞</div>
              <div className="rec-content">
                <h4>Enhanced Onboarding Program</h4>
                <p>
                  Create a structured 90-day onboarding journey with proactive check-ins, service 
                  education, and early-stage incentives to reduce first-year churn.
                </p>
              </div>
            </div>

            <div className="recommendation-item">
              <div className="rec-icon">💼</div>
              <div className="rec-content">
                <h4>Contract Conversion Incentives</h4>
                <p>
                  Offer compelling benefits (discounts, free upgrades, premium features) to convert 
                  month-to-month customers to annual contracts, especially in months 3-6.
                </p>
              </div>
            </div>

            <div className="recommendation-item">
              <div className="rec-icon">🔄</div>
              <div className="rec-content">
                <h4>Payment Method Optimization</h4>
                <p>
                  Encourage automatic payment methods through incentives. Streamline payment 
                  processes to reduce friction and failed payments.
                </p>
              </div>
            </div>

            <div className="recommendation-item">
              <div className="rec-icon">📊</div>
              <div className="rec-content">
                <h4>Continuous Monitoring</h4>
                <p>
                  Establish monthly tracking of churn metrics, model performance, and intervention 
                  effectiveness. Retrain the model quarterly with new data.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="future-work">
          <h3>Future Work</h3>
          <div className="future-items">
            <div className="future-item">
              <strong>Deep Learning Models</strong>
              <p>Explore LSTM networks to capture temporal patterns in customer behavior</p>
            </div>
            <div className="future-item">
              <strong>Customer Lifetime Value</strong>
              <p>Integrate CLV predictions to prioritize retention efforts on high-value customers</p>
            </div>
            <div className="future-item">
              <strong>Real-time Scoring</strong>
              <p>Build streaming pipeline for real-time churn risk assessment</p>
            </div>
            <div className="future-item">
              <strong>A/B Testing Framework</strong>
              <p>Design experiments to measure retention intervention effectiveness</p>
            </div>
          </div>
        </div>

        <div className="conclusion-footer">
          <div className="impact-statement">
            <h3>Expected Impact</h3>
            <div className="impact-metrics">
              <div className="impact-metric">
                <div className="impact-value">30%</div>
                <div className="impact-label">Reduction in Churn</div>
              </div>
              <div className="impact-metric">
                <div className="impact-value">$2.5M</div>
                <div className="impact-label">Annual Revenue Saved</div>
              </div>
              <div className="impact-metric">
                <div className="impact-value">15%</div>
                <div className="impact-label">Increase in CLV</div>
              </div>
            </div>
          </div>

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