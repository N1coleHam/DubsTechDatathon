import React from 'react';
import { LineChart, Line, BarChart, Bar, ScatterChart, Scatter, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Section from '../components/Section';
import Embed from '../components/Embed';


const Interactive = () => {
  return (
    <Section 
      title="Interactive Visualizations" 
      subtitle="Explore the data through interactive charts and dashboards"
    >
      <div className="interactive-content">
        {/* Tableau Dashboard */}
        <Embed
          type="tableau"
          title="Accessibility Violations Across Domains"
          height="650px"
          src="https://public.tableau.com/views/DatathonGraphs/Dashboard2?:showVizHome=no&:toolbar=no&:tabs=no
"
        />

        <div className="dashboard-explanation">
          <h3>How to Read This Dashboard</h3>

          <p>
            This dashboard provides a high-level view of how accessibility violations
            are distributed across different website domains. Each visualization
            highlights a different dimension of the problem.
          </p>

          <ul>
            <li>
              <strong>Violation counts by domain</strong> show which sectors
              accumulate the highest number of accessibility issues.
            </li>
            <li>
              <strong>Category breakdowns</strong> separate violations into
              syntactic, semantic, and layout-related barriers.
            </li>
            <li>
              <strong>Comparisons across domains</strong> help reveal “invisible
              barriers” that are more common in some sectors than others.
            </li>
          </ul>

          <p>
            Together, these views suggest that accessibility failures are not random,
            but instead reflect recurring design patterns and domain-specific
            priorities.
          </p>
        </div>

      </div>
    </Section>
  );
};

export default Interactive;