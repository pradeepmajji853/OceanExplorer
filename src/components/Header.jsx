import React from "react";
import "./Header.css"; 

function Header() {
  return (
    <header className="header">
      <h1>OceanExplorers</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#learning">Interactive Learning</a></li>
          <li><a href="#resources">Resources</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
