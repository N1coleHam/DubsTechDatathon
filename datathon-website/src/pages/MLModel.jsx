import React from 'react';
import Section from '../components/Section';

const MLModel = () => {
  return (
    <Section 
      title="ML Model" 
      subtitle="Random Forest classifier with optimized hyperparameters"
    >
      <div className="model-content">
        <div className="model-overview">
          <p className="lead-text">
            After evaluating multiple algorithms, we selected Random Forest for its superior 
            performance and interpretability. The model was fine-tuned using cross-validation 
            and grid search.
          </p>
        </div>

        <div className="model-comparison">
          <h3>Model Comparison</h3>
          <div className="comparison-table">
            <div className="comparison-header">
              <div>Algorithm</div>
              <div>Accuracy</div>
              <div>Precision</div>
              <div>Recall</div>
              <div>F1 Score</div>
            </div>
            <div className="comparison-row winner">
              <div className="model-name">
                <span className="badge winner-badge">Selected</span>
                Random Forest
              </div>
              <div className="metric">94.2%</div>
              <div className="metric">91.8%</div>
              <div className="metric">96.5%</div>
              <div className="metric">94.1%</div>
            </div>
            <div className="comparison-row">
              <div className="model-name">Gradient Boosting</div>
              <div className="metric">92.8%</div>
              <div className="metric">89.5%</div>
              <div className="metric">95.1%</div>
              <div className="metric">92.2%</div>
            </div>
            <div className="comparison-row">
              <div className="model-name">Logistic Regression</div>
              <div className="metric">88.3%</div>
              <div className="metric">84.2%</div>
              <div className="metric">91.7%</div>
              <div className="metric">87.8%</div>
            </div>
            <div className="comparison-row">
              <div className="model-name">Neural Network</div>
              <div className="metric">91.5%</div>
              <div className="metric">88.9%</div>
              <div className="metric">93.8%</div>
              <div className="metric">91.3%</div>
            </div>
          </div>
        </div>

        <div className="model-metrics">
          <h3>Performance Metrics</h3>
          <div className="metrics-grid">
            <div className="metric-card primary">
              <div className="metric-value">94.2%</div>
              <div className="metric-label">Accuracy</div>
              <div className="metric-description">
                Overall prediction accuracy on test set
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">91.8%</div>
              <div className="metric-label">Precision</div>
              <div className="metric-description">
                True positives / Predicted positives
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">96.5%</div>
              <div className="metric-label">Recall</div>
              <div className="metric-description">
                True positives / Actual positives
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">94.1%</div>
              <div className="metric-label">F1 Score</div>
              <div className="metric-description">
                Harmonic mean of precision and recall
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">0.92</div>
              <div className="metric-label">AUC-ROC</div>
              <div className="metric-description">
                Area under ROC curve
              </div>
            </div>
            
            <div className="metric-card">
              <div className="metric-value">5.3s</div>
              <div className="metric-label">Training Time</div>
              <div className="metric-description">
                Time to train on full dataset
              </div>
            </div>
          </div>
        </div>

        <div className="model-config">
          <h3>Model Configuration</h3>
          <div className="config-grid">
            <div className="config-item">
              <div className="config-label">Algorithm</div>
              <div className="config-value">Random Forest Classifier</div>
            </div>
            <div className="config-item">
              <div className="config-label">Number of Trees</div>
              <div className="config-value">200</div>
            </div>
            <div className="config-item">
              <div className="config-label">Max Depth</div>
              <div className="config-value">20</div>
            </div>
            <div className="config-item">
              <div className="config-label">Min Samples Split</div>
              <div className="config-value">5</div>
            </div>
            <div className="config-item">
              <div className="config-label">Max Features</div>
              <div className="config-value">sqrt</div>
            </div>
            <div className="config-item">
              <div className="config-label">Cross-Validation</div>
              <div className="config-value">5-fold stratified</div>
            </div>
          </div>
        </div>

        <div className="feature-importance">
          <h3>Top Feature Importance</h3>
          <div className="importance-bars">
            <div className="importance-item">
              <div className="importance-label">Contract Type</div>
              <div className="importance-bar-container">
                <div className="importance-bar" style={{ width: '100%' }}></div>
                <span className="importance-value">0.243</span>
              </div>
            </div>
            <div className="importance-item">
              <div className="importance-label">Tenure</div>
              <div className="importance-bar-container">
                <div className="importance-bar" style={{ width: '85%' }}></div>
                <span className="importance-value">0.187</span>
              </div>
            </div>
            <div className="importance-item">
              <div className="importance-label">Monthly Charges</div>
              <div className="importance-bar-container">
                <div className="importance-bar" style={{ width: '72%' }}></div>
                <span className="importance-value">0.156</span>
              </div>
            </div>
            <div className="importance-item">
              <div className="importance-label">Total Charges</div>
              <div className="importance-bar-container">
                <div className="importance-bar" style={{ width: '58%' }}></div>
                <span className="importance-value">0.134</span>
              </div>
            </div>
            <div className="importance-item">
              <div className="importance-label">Internet Service</div>
              <div className="importance-bar-container">
                <div className="importance-bar" style={{ width: '45%' }}></div>
                <span className="importance-value">0.098</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MLModel;