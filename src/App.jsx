import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"; 
import InteractiveLearning from './pages/Interactive-learning';
import Resources from './pages/Resources';
import TheOceanEcoSystempage from './pages/TheOceanEcoSystempage';
import TheOceanZonesPage from './pages/TheOceanZonespage';

function App() {
  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/the-ocean-ecosystem" element={<TheOceanEcoSystempage />} />
            <Route path="/the-ocean-zones" element={<TheOceanZonesPage />} />
            <Route path="/interactive-learning" element={<InteractiveLearning />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
