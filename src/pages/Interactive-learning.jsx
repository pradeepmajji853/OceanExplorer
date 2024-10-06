import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import GlobeEmbed from '../Model/Earth';
import './InteractiveLearning.css';
import OceanInfo from './OceanInfo';
import BackgroundAudio from '../components/BackgroundAudio';

const InteractiveLearning = () => {
  const [show3DAnimation, setShow3DAnimation] = useState(false);
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showOceanFacts, setShowOceanFacts] = useState(false);
  const [clicked, setClicked] = useState(true);
  const [playAudio, setPlayAudio] = useState(true); // State to control audio playback

  const handleNextClick = () => {
    setClicked(false);
    setShow3DAnimation(true); // Show the OceanInfo component directly
    setPlayAudio(false); // Stop the background audio when the button is clicked
  };

  useEffect(() => {
    const oceanFacts = `Oceans cover 71% of Earth's surface, showcasing stunning beauty and diverse ecosystems.`;
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < oceanFacts.length) {
        setText((prev) => prev + oceanFacts[index]);
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
        setShowOceanFacts(true); // Show ocean facts after typing is complete
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="interactive-learning-container">
      {playAudio && <BackgroundAudio />}
      <Header />

      <div className="globe-container">
        {!show3DAnimation && (
          <>
            <div className="typewriter-text">
              <p>{text}</p>
            </div>
            <div className="GlobeContainer">
              <GlobeEmbed />
            </div>
          </>
        )}

        {show3DAnimation && (
          <div className="ocean-3d-animation fade-in-animation"> {/* Apply fade-in animation */}
            <OceanInfo />
          </div>
        )}

        {isTypingComplete && showOceanFacts && clicked && (
          <div className="ocean-facts">
            <p>
              Click on a <strong>Ocean</strong> to know more <strong>details</strong>
            </p>
            <button className="ocean-button" onClick={handleNextClick}>
              Dive deep into the oceans
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveLearning;
