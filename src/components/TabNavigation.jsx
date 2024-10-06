import React, { useEffect } from 'react';
import './TabNavigation.css';

const TabNavigation = (props) => {
  
  // Scroll to top when the active tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.active]);

  return (
    <nav className="tab-navigation">
      <ul>
        <li className={props.active === 'Introduction' ? "active" : ""}>Introduction</li>
        <li className={props.active === 'TOE' ? "active" : ""}>The Ocean Ecosystem</li>
        <li className={props.active === 'OZ' ? "active" : ""}>Ocean Zones</li>
        <li className={props.active === 'OL' ? "active" : ""}>Life Under Ocean</li>
        <li className={props.active === 'TML' ? "active" : ""}>Threats to Marine Life</li>
        <li className={props.active === 'CE' ? "active" : ""}>Conservation Efforts</li>
      </ul>
    </nav>
  );
};

export default TabNavigation;
