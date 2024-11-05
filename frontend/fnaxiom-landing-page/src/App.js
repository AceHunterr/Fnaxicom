// src/App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AssessmentCards from './components/AssessmentCards';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      {/* <AssessmentCards /> */}
    </div>
  );
};

export default App;
