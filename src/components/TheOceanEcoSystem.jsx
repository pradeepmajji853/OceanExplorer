import React from 'react';
import './TheOceanEcoSystem.css';
import coral from '../assets/images/coralreef.jpg';
import deepsea from '../assets/images/deepsea.jpg';
const TheOceanEcoSystem = () => {
  return (
    <section className="ocean-ecosystem">
      <div className="ecosystem-header">
        <h1>The Mystical Ocean Ecosystem</h1>
        <p className="header-description">
          Dive deep into the mysterious and mesmerizing world beneath the waves, where every layer of the ocean reveals unique and interconnected ecosystems vital for life on Earth.
        </p>
      </div>

      <div className="split-sections">
        <div className="left-section">
          <h2>Coral Reefs: The Rainforests of the Sea</h2>
          <p>
            Coral reefs are among the most diverse ecosystems on the planet, often called "rainforests of the sea." They are crucial not only for the marine species they host, but also for human communities that rely on them for food, coastal protection, and tourism.
          </p>
          <p>
            These underwater cities support thousands of species, from tiny plankton to large predators, all thriving in the clear, warm waters of the tropics. Coral reefs are a testament to the beauty and fragility of marine life.
          </p>
        </div>
        <div className="right-section">
          <img
            src={coral}
            alt="Coral Reef Ecosystem"
            className="ecosystem-image coral-image"
          />
        </div>
      </div>

      <div className="split-sections reverse">
        <div className="left-section">
          <img
            src={deepsea}
            alt="Deep Sea Ecosystem"
            className="ecosystem-image deepsea-image"
          />
        </div>
        <div className="right-section">
          <h2>The Deep Sea: Earth's Final Frontier</h2>
          <p>
            Beneath the sunlight zone lies the vast, cold, and dark deep sea. This is Earth's final frontier, an environment so extreme that it’s still largely unexplored. Yet, even here, life thrives in extraordinary ways.
          </p>
          <p>
            Giant squids, bioluminescent creatures, and ancient species inhabit this twilight world, surviving under immense pressure, with no light and scarce food sources. The deep sea continues to astonish scientists and ocean explorers alike.
          </p>
        </div>
      </div>

      <div className="conclusion">
        <p>
          The ocean is more than just water—it’s a complex, dynamic system that sustains life both below and above the waves. Understanding these ecosystems allows us to protect them better and preserve the delicate balance they provide for the planet. Every creature, from the smallest plankton to the largest whale, has a role to play in the harmony of ocean life.
        </p>
        <p className="call-to-action">
          Learn how you can contribute to ocean conservation and become a guardian of the seas!
        </p>
      </div>
    </section>
  );
};

export default TheOceanEcoSystem;
