import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./PreviousButton.css"
const PreviousButton = ({ text, previousPath }) => {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    navigate(previousPath); // Redirect to the provided previousPath
  };

  return (
    <button className="previous-button" onClick={handlePreviousClick}>
      <span>←</span> {text}
    </button>
  );
};

export default PreviousButton;
