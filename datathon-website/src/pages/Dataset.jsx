import React from 'react';
import Section from '../components/Section';

const Dataset = () => {
  return (
    <Section 
      title="Introducing the Dataset" 
    >
      <div className="dataset-content">
        <div className="dataset-overview">
          <p className="lead-text">
            The AccessGuru dataset contains over <strong>3,500 real-world web accessibility violations</strong> collected from <strong>448 diverse websites</strong> spanning domains such as health, education, government, news, technology, and e-commerce. Each record in the dataset is annotated with one of <strong>112 distinct violation types</strong>, categorized into <strong>syntactic</strong>, <strong>semantic</strong>, and <strong>layout groups</strong> based on the <strong>Web Content Accessibility Guidelines (WCAG) 2.1</strong>.
          </p>
          <p className="lead-text">
            This dataset includes raw <strong>HTML code snippets</strong>, <strong>metadata</strong>, and other supplementary information necessary for analyzing, detecting, and correcting accessibility issues. It is the first large-scale benchmark that jointly covers all three major categories of accessibility violations, enabling reproducible evaluation of automated accessibility testing tools and research in accessibility correction methods.
          </p>
        </div>

        <div className="dataset-stats-grid">
          <div className="stat-box">
            <div className="stat-icon">📊</div>
            <div className="stat-description">Sample Size</div>
            <div className="stat-value">3,525</div>
            {/* <div className="stat-description">Total Customers</div> */}
          </div>
          
          <div className="stat-box">
            <div className="stat-icon">🔢</div>
            <div className="stat-description">Features</div>
            <div className="stat-value">12</div>
            {/* <div className="stat-description">Features</div> */}
          </div>
          
          {/* <div className="stat-box">
            <div className="stat-icon">⚖️</div>
            <div className="stat-value">26.5%</div>
            <div className="stat-description">Churn Rate</div>
          </div> */}
          
          <div className="stat-box">
            <div className="stat-icon">🗓️</div>
            <div className="stat-description">Publication Year</div>
            <div className="stat-value">2025</div>
            {/* <div className="stat-description">Collection Period</div> */}
          </div>
        </div>

        <div className="dataset-preprocessing">
          <h3>Data Preprocessing</h3>
          <div className="preprocessing-steps">

            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <strong>Filtering & Cleaning</strong>
                <p>
                  Removed pages with unsuccessful scrapes and standardized key fields such as
                  domain category, violation category, and severity scores.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <strong>Aggregation</strong>
                <p>
                  Aggregated page-level violation records so each website was represented
                  as a single row in the dataset.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <strong>Feature Engineering</strong>
                <p>
                  Created summary features including total violations, average severity,
                  and counts by violation category and common violation types.
                </p>
              </div>
            </div>

            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <strong>Website-Level Dataset</strong>
                <p>
                  Combined all engineered features into a consolidated website-level table
                  used for exploratory analysis and clustering.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </Section>
  );
};

export default Dataset;