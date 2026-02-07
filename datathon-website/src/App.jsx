import React, { useState } from 'react';
import Navbar from './components/Navbar';
import PageLayout from './components/PageLayout';
import Home from './pages/Home';
import Problem from './pages/Problem';
import Dataset from './pages/Dataset';
import Analysis from './pages/Analysis';
import MLModel from './pages/MLModel';
import Interactive from './pages/Interactive';
import Conclusion from './pages/Conclusion';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home', component: Home },
    { id: 'problem', label: 'Problem', component: Problem },
    { id: 'dataset', label: 'Dataset', component: Dataset },
    { id: 'analysis', label: 'Analysis', component: Analysis },
    { id: 'model', label: 'ML Model', component: MLModel },
    { id: 'visualizations', label: 'Visualizations', component: Interactive },
    { id: 'conclusion', label: 'Conclusion', component: Conclusion },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(id);
    }
  };

  return (
    <div className="app">
      <Navbar 
        sections={sections} 
        currentSection={currentSection}
        onNavigate={scrollToSection}
      />
      <PageLayout sections={sections} setCurrentSection={setCurrentSection} />
    </div>
  );
}

export default App;