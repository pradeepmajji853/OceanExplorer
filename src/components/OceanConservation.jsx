import React from 'react';
import './OceanConservation.css';
import plasticWasteImage from '../assets/images/plastic-waste.jpg'; // Ensure the path is correct
import sustainableSeafoodImage from '../assets/images/sustainable-seafood.jpg'; // Ensure the path is correct
import beachCleanupImage from '../assets/images/beach-cleanup.jpg'; // Ensure the path is correct
import marineProtectedImage from '../assets/images/marine-protected.jpg'; // Ensure the path is correct
import educationImage from '../assets/images/education.jpg'; // Ensure the path is correct

const OceanConservation = () => {
  return (
    <div className="conservation-efforts">
      <h2>Ocean Conservation Efforts</h2>
      <p>
        Protecting our oceans is essential for maintaining biodiversity and the health of our planet. Here are some key conservation efforts you can support:
      </p>
      <ul className="efforts-list">
        <li>
          <img src={plasticWasteImage} alt="Reduce Plastic Use" className="efforts-image" />
          <strong>Reduce Plastic Use:</strong> Opt for reusable bags, bottles, and containers to minimize plastic waste that ends up in the ocean.
        </li>
        <li>
          <img src={sustainableSeafoodImage} alt="Support Sustainable Seafood" className="efforts-image" />
          <strong>Support Sustainable Seafood:</strong> Choose seafood that is sustainably sourced to help protect marine populations.
        </li>
        <li>
          <img src={beachCleanupImage} alt="Participate in Beach Cleanups" className="efforts-image" />
          <strong>Participate in Beach Cleanups:</strong> Join local initiatives to keep our beaches and oceans free from litter.
        </li>
        <li>
          <img src={marineProtectedImage} alt="Advocate for Marine Protected Areas" className="efforts-image" />
          <strong>Advocate for Marine Protected Areas:</strong> Support policies that create protected areas in oceans to conserve marine life and habitats.
        </li>
        <li>
          <img src={educationImage} alt="Educate Others" className="efforts-image" />
          <strong>Educate Others:</strong> Share knowledge about ocean conservation to raise awareness and inspire action in your community.
        </li>
      </ul>
      <p className="call-to-action">
        Together, we can make a difference and protect our oceans for future generations!
      </p>
    </div>
  );
};

export default OceanConservation;