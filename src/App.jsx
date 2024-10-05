import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/HomePage"; 
import InteractiveLearning from './pages/Interactive-learning';
import Resources from './pages/Resources';

function App() {
  const [showHomePage, setShowHomePage] = useState(false);

  const handleContinue = () => {
    setShowHomePage(true);
  };

  return (
    <Router>
      <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/interactive-learning" element={<InteractiveLearning />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
