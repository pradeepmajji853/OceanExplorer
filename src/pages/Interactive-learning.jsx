import React from 'react';
import Header from '../components/Header';
import GlobeEmbed from '../Model/Earth';
import './InteractiveLearning.css'; 

const InteractiveLearning = () => {
  return (
    <div className="GlobeContainer">
      <Header />
      <div  >
        <GlobeEmbed />
      </div>
    </div>
  );
};

export default InteractiveLearning;
