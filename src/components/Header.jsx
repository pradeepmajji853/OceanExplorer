import React from "react";
import { Link } from "react-router-dom"; 
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <h1>OceanExplorers</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/interactive-learning">Interactive Learning</Link></li>
          <li><Link to="/resources">Resources</Link></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
