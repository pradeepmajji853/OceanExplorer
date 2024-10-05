import React from "react";
import "./HeroSection.css";
import GlobeComponent from "./GlobeComponent";
import MarineLifeVideo from "../assets/images/MarineLife2.mp4"; // Adjust the path if necessary
import OceanScene from "./OceanScene";

function HeroSection() {
  return (
    <section className="hero-section">
      <video autoPlay loop muted className="background-video">
        <source src={MarineLifeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
   

      <div className="hero-content">
        <h2>Sustainable Development Goal 14</h2>
        <p>Life Below Water</p>
        <p>Our mission is to conserve and sustainably use the oceans, seas, and marine resources for sustainable development.</p>
      </div>
    </section>
  );
}

export default HeroSection;
