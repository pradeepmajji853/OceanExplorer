import React from 'react';
import './NextButton.css';

const NextButton = ({ text }) => {
  return (
    <button className="next-button">
      {text} <span>→</span>
    </button>
  );
};

export default NextButton;
