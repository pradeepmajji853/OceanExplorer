import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import OceanAnimation from '../Animations/OceanAnimation';
import Header from './Header';


const Slide1 = () => {
  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="slide"
    >
        <Header/>
      <h1>SDG 14: Life Below Water</h1>
      <p>
        Oceans cover more than 70% of the Earth's surface and are essential to
        supporting life on our planet. SDG 14 aims to conserve and sustainably
        use the oceans, seas, and marine resources.
      </p>
      <OceanAnimation />
      
      <div className="navigation">
        <Link to="/interactive-learning/slide2" className="next-button">Next</Link>
      </div>
    </motion.div>
  );
};

export default Slide1;
