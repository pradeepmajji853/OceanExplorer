import React from 'react';
import './TabNavigation.css';

const TabNavigation = () => {
  return (
    <nav className="tab-navigation">
      <ul>
        <li className="active">Introduction</li>
        <li>The Ocean Ecosystem</li>
        <li>Ocean Zones</li>
        <li>Ocean Life</li>
        <li>Threats to Marine Life</li>
        <li>Conservation Efforts</li>
      </ul>
    </nav>
  );
};

export default TabNavigation;
