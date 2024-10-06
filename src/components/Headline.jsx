import React from 'react';
import './Headline.css';

const Headline = ({ title, description }) => {
  return (
    <div className="headline-container">
      <h1 className="headline-title">{title}</h1>
      <p className="headline-description">{description}</p>
    </div>
  );
};

export default Headline;
