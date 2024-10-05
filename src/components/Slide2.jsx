import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import OceanAnimation from '../Animations/OceanAnimation';
import Header from './Header';

const Slide2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="slide"
    >
    <Header/>
      <h1>Marine Pollution</h1>
      <p>
        Marine pollution is a major threat to ocean ecosystems, with plastic
        waste being one of the most visible problems. Each year, millions of
        tons of plastic enter the oceans, endangering marine life.
      </p>
      <OceanAnimation />
      
      <div className="navigation">
        <Link to="/interactive-learning" className="prev-button">Previous</Link>
        <Link to="/interactive-learning/quiz" className="next-button">Next</Link>
      </div>
    </motion.div>
  );
};

export default Slide2;
