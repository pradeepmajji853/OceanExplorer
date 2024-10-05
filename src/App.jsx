import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import QuizComponent from './components/QuizComponent';
import HomePage from "./pages/HomePage"; 
import InteractiveLearning from './pages/Interactive-learning';
import Resources from './pages/Resources';

function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/interactive-learning" element={<InteractiveLearning />} />
        <Route path="/resources" element={<Resources />} />
        
          
          {/* <Route path="/interactive-learning" element={<Slide1 />} />
          <Route path="/interactive-learning/slide2" element={<Slide2 />} />
          <Route path="/interactive-learning/quiz" element={<QuizComponent />} /> */}
          {/* <Route path="/Resources" element={<Resources/>} /> */}
        </Routes>
        {/* <nav>
          <Link to="/">Previous</Link>
          <Link to="/slide2">Next</Link>
        </nav> */}
      </div>
    </Router>
  );
}

export default App;
