import React, { useState } from 'react';
import PlasticPollution from '../assets/images/plastic-pollution.jpg'; // Add your image paths
import Overfishing from '../assets/images/overfishing.jpg';
import ClimateChange from '../assets/images/climate-change.jpg';
import HabitatDestruction from '../assets/images/habitat-destruction.jpg';
import ThreatDetails from './ThreatDetails'; // New component for threat details
import './ThreatsToMarineLife.css'; // Create a CSS file for styling

const threats = [
  {
    name: 'Plastic Pollution',
    description: 'Plastic waste in oceans poses a severe threat to marine life, with marine animals ingesting or becoming entangled in debris.',
    imgSrc: PlasticPollution,
  },
  {
    name: 'Overfishing',
    description: 'Overfishing depletes fish populations, disrupting marine ecosystems and threatening species with extinction.',
    imgSrc: Overfishing,
  },
  {
    name: 'Climate Change',
    description: 'Rising ocean temperatures and acidification due to climate change are detrimental to marine life, affecting biodiversity.',
    imgSrc: ClimateChange,
  },
  {
    name: 'Habitat Destruction',
    description: 'Destructive practices like bottom trawling and coastal development destroy vital habitats such as coral reefs and mangroves.',
    imgSrc: HabitatDestruction,
  },
];

const ThreatsToMarineLife = () => {
  const [selectedThreat, setSelectedThreat] = useState(null);

  const handleThreatClick = (threat) => {
    setSelectedThreat(threat);
  };

  const handleCloseDetails = () => {
    setSelectedThreat(null);
  };

  return (
    <section className="threats-to-marine-life">
      <div className="threats-header">
        <h1>Threats to Marine Life</h1>
        <p className="header-description">
          Discover the various threats facing marine ecosystems and the urgent need for conservation efforts.
        </p>
      </div>

      <div className="threats-list">
        {threats.map((threat, index) => (
          <div className="threat" key={index} onClick={() => handleThreatClick(threat)}>
            <img src={threat.imgSrc} alt={threat.name} className="threat-image" />
            <h3>{threat.name}</h3>
            <p>{threat.description}</p>
          </div>
        ))}
      </div>

      {selectedThreat && (
        <ThreatDetails threat={selectedThreat} onClose={handleCloseDetails} />
      )}
    </section>
  );
};

export default ThreatsToMarineLife;
