import React from 'react';
import './LifeUnderOcean.css';
import fish from '../assets/images/fishschool.jpg'; // Add your image path here
import jellyfish from '../assets/images/jellyfish.jpg'; // Add your image path here

const LifeUnderOcean = () => {
  return (
    <section className="life-under-ocean">
      <div className="ocean-header">
        <h1>Life Under the Ocean: A Tapestry of Diversity</h1>
        <p className="header-description">
          Discover the incredible variety of life beneath the waves, where every creature plays a vital role in the intricate web of marine ecosystems.
        </p>
      </div>

      <div className="split-sections">
        <div className="left-section">
          <h2>The Colorful World of Fish</h2>
          <p>
            The ocean is home to an astonishing array of fish species, each uniquely adapted to its environment. From the vibrant coral reef fish to the deep-sea dwellers, these aquatic creatures display an extraordinary spectrum of colors and behaviors.
          </p>
          <p>
            Fish not only provide sustenance for marine predators but also play crucial roles in maintaining the health of coral reefs and other ecosystems. Their dynamic schools dance through the water, creating a stunning spectacle that captivates divers and ocean enthusiasts alike.
          </p>
        </div>
        <div className="right-section">
          <img
            src={fish}
            alt="School of Fish"
            className="ocean-image fish-image"
          />
        </div>
      </div>

      <div className="split-sections reverse">
        <div className="left-section">
          <img
            src={jellyfish}
            alt="Jellyfish in the Ocean"
            className="ocean-image jellyfish-image"
          />
        </div>
        <div className="right-section">
          <h2>The Mystique of Jellyfish</h2>
          <p>
            Gliding gracefully through the ocean currents, jellyfish are among the most ancient and mesmerizing creatures of the sea. With their translucent bodies and ethereal movements, they captivate all who encounter them. Some species possess bioluminescent capabilities, lighting up the dark depths of the ocean in a dazzling display.
          </p>
          <p>
            Despite their beauty, jellyfish are vital players in the marine ecosystem, serving as both predator and prey. They have adapted to survive in various environments, from coastal waters to the open ocean, showcasing their resilience and adaptability.
          </p>
        </div>
      </div>

      <div className="conclusion">
        <p>
          The life beneath the ocean's surface is a stunning testament to nature's creativity and diversity. Every organism, from the smallest fish to the most enigmatic jellyfish, contributes to the complex tapestry of marine life. Understanding and appreciating this diversity is crucial for conservation efforts and the sustainable management of ocean resources.
        </p>
        <p className="call-to-action">
          Join us in celebrating marine life and learn how you can protect the treasures of the deep!
        </p>
      </div>
    </section>
  );
};

export default LifeUnderOcean;
