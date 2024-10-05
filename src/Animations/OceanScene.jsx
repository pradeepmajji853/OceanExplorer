import React, { useRef } from 'react';
import './OceanAnimation.css';

const OceanScene = () => {
  const oceanRef = useRef(null);

  const createRipple = (e) => {
    const ripple = document.createElement('div');
    ripple.className = 'ocean-ripple'; // Changed class name
    const { left, top } = oceanRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    oceanRef.current.appendChild(ripple);

    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  };

  return (
    <div
      className="ocean-animation-container" // Changed class name
      ref={oceanRef}
      onMouseEnter={() => oceanRef.current.classList.add('ocean-waves')} // Changed class name
      onMouseLeave={() => oceanRef.current.classList.remove('ocean-waves')} // Changed class name
      onClick={createRipple}
    >
      <h2 className="ocean-animation-title">Life Below Water</h2> {/* Changed class name */}
    </div>
  );
};

export default OceanScene;
