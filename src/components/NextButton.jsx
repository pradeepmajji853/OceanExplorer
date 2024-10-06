import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NextButton.css';

const NextButton = ({ text, nextPath }) => {
  const navigate = useNavigate();

  const handleNextClick = () => {
    navigate(nextPath); 
  };

  return (
    <button className="next-button" onClick={handleNextClick}>
      {text} <span>→</span>
    </button>
  );
};

export default NextButton;
