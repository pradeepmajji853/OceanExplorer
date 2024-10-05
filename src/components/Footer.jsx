import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 OceanExplorers. All rights reserved.</p>
      <p>Contact us: <a href="mailto:info@oceanexplorers.com">info@oceanexplorers.com</a></p>
      <div className="social-icons">
        <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
        <a href="https://facebook.com"><i className="fa fa-facebook"></i></a>
        <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
