import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import * as THREE from 'three';
import './GlobeEmbed.css';

const oceans = [
  {
    name: 'Pacific Ocean',
    details: {
      depth: 'Average: 12,080 feet (3,682 meters); Mariana Trench: 36,000 feet (10,994 meters)',
      temperature: '30°C (86°F) near the equator to -1°C (30°F) near the poles',
      features: 'Largest and deepest ocean, Ring of Fire, Great Pacific Garbage Patch, Kuroshio and California currents',
    },
    coordinates: { lat: 0, lng: -140 },
  },
  {
    name: 'Atlantic Ocean',
    details: {
      depth: 'Average: 12,080 feet (3,646 meters); Puerto Rico Trench: 28,374 feet (8,605 meters)',
      temperature: '-2°C (28°F) in polar regions to 30°C (86°F) in the tropics',
      features: 'Second-largest ocean, Gulf Stream, home to Sargasso Sea, rich in marine life',
    },
    coordinates: { lat: 14, lng: -40 },
  },
  {
    name: 'Indian Ocean',
    details: {
      depth: 'Average: 12,274 feet (3,741 meters); Java Trench: 25,344 feet (7,725 meters)',
      temperature: '20°C to 32°C (68°F to 89°F), warmest ocean',
      features: 'Monsoons, Indian Ocean Dipole, rich coral reefs, home to dugongs and whale sharks',
    },
    coordinates: { lat: -30, lng: 70 },
  },
  {
    name: 'Arctic Ocean',
    details: {
      depth: 'Average: 3,953 feet (1,205 meters); Fram Basin: 18,210 feet (5,450 meters)',
      temperature: '-2°C to 6°C (28°F to 43°F)',
      features: 'Smallest and shallowest ocean, sea ice coverage, affected by climate change, polar bears and walruses',
    },
    coordinates: { lat: 80, lng: 0 },
  },
  {
    name: 'Southern Ocean',
    details: {
      depth: 'Average: 13,000-16,400 feet (4,000-5,000 meters); South Sandwich Trench: 23,737 feet (7,235 meters)',
      temperature: '-2°C (28°F) to 10°C (50°F)',
      features: 'Encircles Antarctica, Antarctic Circumpolar Current, critical to global climate, home to penguins and whales',
    },
    coordinates: { lat: -60, lng: 0 },
  },
];

const GlobeEmbed = () => {
  const [selectedOcean, setSelectedOcean] = useState(null);
  const [oceanBorders, setOceanBorders] = useState([]);

  const handleOceanClick = (ocean) => {
    setSelectedOcean(ocean);

    const border = {
      startLat: ocean.coordinates.lat,
      startLng: ocean.coordinates.lng,
      endLat: ocean.coordinates.lat,
      endLng: ocean.coordinates.lng + 1,
    };
    setOceanBorders([border]);
  };

  return (
    <div className="globe-embed-container">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        pointsData={oceans}
        pointLat={(d) => d.coordinates.lat}
        pointLng={(d) => d.coordinates.lng}
        pointAltitude={0.1}
        pointRadius={0.5}
        pointColor={() => 'orange'}
        pointMaterial={new THREE.MeshLambertMaterial({ color: 'red', emissive: 'yellow', emissiveIntensity: 1.5 })}
        onPointClick={handleOceanClick}
        arcsData={oceanBorders}
        arcColor={() => ['blue']}
        arcDashLength={0.5}
        arcDashGap={0.05}
        arcDashInitialGap={0.1}
        arcDashAnimateTime={1000}
        arcAltitudeAutoScale={0.8}
        width={window.innerWidth}
        height={window.innerHeight}
      />

      {/* Display ocean details in a card when a marker is clicked */}
      {selectedOcean && (
        <div className="info-card">
          <h2>{selectedOcean.name}</h2>
          <div className="ocean-info">
            <p><strong>Depth:</strong> {selectedOcean.details.depth}</p>
            <p><strong>Temperature:</strong> {selectedOcean.details.temperature}</p>
            <p><strong>Key Features:</strong> {selectedOcean.details.features}</p>
          </div>
          <button className="close-button" onClick={() => setSelectedOcean(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default GlobeEmbed;
