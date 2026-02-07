import React from 'react';
import { LineChart, Line, BarChart, Bar, ScatterChart, Scatter, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Section from '../components/Section';
import Embed from '../components/Embed';

// Sample data - replace with your actual data
const churnTrendData = [
  { month: 'Jan', churned: 52, retained: 548 },
  { month: 'Feb', churned: 48, retained: 552 },
  { month: 'Mar', churned: 61, retained: 539 },
  { month: 'Apr', churned: 55, retained: 545 },
  { month: 'May', churned: 58, retained: 542 },
  { month: 'Jun', churned: 63, retained: 537 },
];

const tenureChurnData = [
  { tenure: '0-12', churnRate: 48 },
  { tenure: '13-24', churnRate: 35 },
  { tenure: '25-36', churnRate: 22 },
  { tenure: '37-48', churnRate: 15 },
  { tenure: '49-60', churnRate: 10 },
  { tenure: '60+', churnRate: 7 },
];

const contractDistribution = [
  { name: 'Month-to-month', value: 3875, churn: 1655 },
  { name: 'One year', value: 1473, churn: 166 },
  { name: 'Two year', value: 1695, churn: 48 },
];

const clusterData = [
  { x: 25, y: 50, cluster: 'High Risk', size: 400 },
  { x: 45, y: 85, cluster: 'High Risk', size: 300 },
  { x: 30, y: 45, cluster: 'High Risk', size: 350 },
  { x: 70, y: 90, cluster: 'Low Risk', size: 500 },
  { x: 75, y: 95, cluster: 'Low Risk', size: 450 },
  { x: 68, y: 88, cluster: 'Low Risk', size: 480 },
  { x: 50, y: 65, cluster: 'Medium Risk', size: 380 },
  { x: 55, y: 70, cluster: 'Medium Risk', size: 420 },
];

const COLORS = {
  'High Risk': '#ef4444',
  'Medium Risk': '#f59e0b',
  'Low Risk': '#10b981',
};

const Interactive = () => {
  return (
    <Section 
      title="Interactive Visualizations" 
      subtitle="Explore the data through interactive charts and dashboards"
    >
      <div className="interactive-content">
        
        {/* Chart 1: Churn Trend */}
        <div className="chart-container">
          <h3 className="chart-title">Monthly Churn Trends</h3>
          <p className="chart-description">
            Tracking customer retention and churn patterns over time
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={churnTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              <Bar dataKey="retained" fill="#10b981" name="Retained" radius={[4, 4, 0, 0]} />
              <Bar dataKey="churned" fill="#ef4444" name="Churned" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 2: Tenure vs Churn */}
        <div className="chart-container">
          <h3 className="chart-title">Churn Rate by Customer Tenure</h3>
          <p className="chart-description">
            Strong inverse relationship between tenure and churn probability
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={tenureChurnData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="tenure" stroke="#6b7280" />
              <YAxis stroke="#6b7280" label={{ value: 'Churn Rate (%)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="churnRate" 
                stroke="#8b5cf6" 
                strokeWidth={3}
                dot={{ fill: '#8b5cf6', r: 6 }}
                name="Churn Rate (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Chart 3: Customer Segmentation */}
        <div className="chart-container">
          <h3 className="chart-title">Customer Risk Segmentation</h3>
          <p className="chart-description">
            K-means clustering based on tenure and monthly charges
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis 
                dataKey="x" 
                name="Tenure (months)" 
                stroke="#6b7280"
                label={{ value: 'Tenure (months)', position: 'insideBottom', offset: -5 }}
              />
              <YAxis 
                dataKey="y" 
                name="Monthly Charges ($)" 
                stroke="#6b7280"
                label={{ value: 'Monthly Charges ($)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend />
              {Object.keys(COLORS).map((cluster) => (
                <Scatter
                  key={cluster}
                  name={cluster}
                  data={clusterData.filter(d => d.cluster === cluster)}
                  fill={COLORS[cluster]}
                />
              ))}
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        {/* Tableau Embed Placeholder */}
        <Embed 
          type="tableau" 
          title="Interactive Dashboard"
          height="600px"
        />

        {/* Plotly Embed Placeholder */}
        <Embed 
          type="plotly" 
          title="Feature Correlation Heatmap"
          height="500px"
        >
          {/* Your Plotly chart would go here */}
          <div style={{ 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '12px',
            color: 'white',
            fontSize: '18px'
          }}>
            Insert your Plotly visualization here
          </div>
        </Embed>

      </div>
    </Section>
  );
};

export default Interactive;