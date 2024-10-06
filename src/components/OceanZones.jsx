import React, { useState } from 'react';
import Interdial from '../assets/images/intertidal.jpg';
import Neritic from '../assets/images/Neritic.jpg';
import Oceanix from '../assets/images/Oceanix.jpg';
import Benthic from '../assets/images/Benthic.jpg';
import ZoneDetails from './ZoneDetails';
import './OceanZones.css';

const zones = [
  {
    name: 'Intertidal Zone',
    description: 'The ocean is a vast expanse divided into distinct zones, each teeming with life and characterized by unique ecosystems. The intertidal zone, where land meets sea, experiences the rhythmic ebb and flow of tides, supporting diverse organisms adapted to fluctuating conditions.',
    imgSrc: Interdial,
  },
  {
    name: 'Neritic Zone',
    description: 'The neritic zone is a vibrant and crucial part of the ocean ecosystem, extending from the low tide mark to the edge of the continental shelf. This relatively shallow region is characterized by abundant sunlight, allowing for photosynthesis and supporting a rich diversity of marine life.',
    imgSrc: Neritic,
  },
  {
    name: 'Oceanic Zone',
    description: 'The oceanic zone, often referred to as the open ocean, lies beyond the continental shelf and encompasses vast, deep waters. This zone is characterized by its significant depth, which contributes to reduced sunlight penetration compared to the shallower neritic zone.',
    imgSrc: Oceanix,
  },
  {
    name: 'Benthic Zone',
    description: 'The benthic zone refers to the ocean floor and is one of the most diverse and complex ecosystems in the marine environment. It can be subdivided into several layers, including the littoral zone, which is the area closest to shore, and the sublittoral zone, which extends to the continental shelf.',
    imgSrc: Benthic,
  }
];

const OceanZones = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  const handleZoneClick = (zone) => {
    setSelectedZone(zone);
  };

  const handleCloseDetails = () => {
    setSelectedZone(null);
  };

  return (
    <section className="ocean-zones">
      <div className="zones-header">
        <h1>The Various Ocean Zones</h1>
        <p className="header-description">
          Explore the different zones of the ocean, each with its unique characteristics and ecosystems, showcasing the diversity of life beneath the waves.
        </p>
      </div>

      <div className="zones-list">
        {zones.map((zone, index) => (
          <div className="zone" key={index} onClick={() => handleZoneClick(zone)}>
            <img src={zone.imgSrc} alt={zone.name} className="zone-image" />
            <h3>{zone.name}</h3>
            <p>{zone.description}</p>
          </div>
        ))}
      </div>

      {selectedZone && (
        <ZoneDetails zone={selectedZone} onClose={handleCloseDetails} />
      )}
    </section>
  );
};

export default OceanZones;