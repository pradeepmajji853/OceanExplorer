import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './TabNavigation.css';

const TabNavigation = (props) => {

  // Scroll to top when the active tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.active]);

  return (
    <nav className="tab-navigation">
      <ul>
        <li className={props.active === 'Introduction' ? "active" : ""}>
          <Link to="/">Introduction</Link>
        </li>
        <li className={props.active === 'TOE' ? "active" : ""}>
          <Link to="/the-ocean-ecosystem">The Ocean Ecosystem</Link>
        </li>
        <li className={props.active === 'OZ' ? "active" : ""}>
          <Link to="/the-ocean-zones">Ocean Zones</Link>
        </li>
        <li className={props.active === 'OL' ? "active" : ""}>
          <Link to="/the-ocean-life">Life Under Ocean</Link>
        </li>
        <li className={props.active === 'TML' ? "active" : ""}>
          <Link to="/the-threats-marine">Threats to Marine Life</Link>
        </li>
        <li className={props.active === 'CE' ? "active" : ""}>
          <Link to="/the-ocean-conservation">Conservation Efforts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TabNavigation;
