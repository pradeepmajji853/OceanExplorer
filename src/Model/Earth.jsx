import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import * as d3 from 'd3'; 
import './GlobeEmbed.css';

const oceans = [
  {
    name: 'Pacific Ocean',
    details: 'The Pacific Ocean is the largest and deepest of Earth’s oceanic divisions.',
    coordinates: { lat: 0, lng: -140 },
  },
  {
    name: 'Atlantic Ocean',
    details: 'The Atlantic Ocean is the second-largest of the world\'s oceans.',
    coordinates: { lat: 14, lng: -40 },
  },
  {
    name: 'Indian Ocean',
    details: 'The Indian Ocean is the third-largest ocean.',
    coordinates: { lat: -30, lng: 70 },
  },
  {
    name: 'Arctic Ocean',
    details: 'The Arctic Ocean is the smallest and shallowest of the world\'s five major oceans.',
    coordinates: { lat: 80, lng: 0 },
  },
  {
    name: 'Southern Ocean',
    details: 'The Southern Ocean is the fourth-largest ocean, encircling Antarctica.',
    coordinates: { lat: -60, lng: 0 },
  },
];

const GlobeEmbed = () => {
  const [selectedOcean, setSelectedOcean] = useState(null);
  const [oceanBorders, setOceanBorders] = useState([]);

  const handleOceanClick = (ocean) => {
    setSelectedOcean(ocean);

    // Draw a circular border around the selected ocean
    const border = {
      lat: ocean.coordinates.lat,
      lng: ocean.coordinates.lng,
      radius: 4000, // Adjust this radius to define the border size
    };
    setOceanBorders([border]);
  };

  return (
    <div className="globe-embed-container">
      <Globe
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg" // Daytime texture
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png" // Optional bump map for surface details
        pointsData={oceans}
        pointLat={(d) => d.coordinates.lat}
        pointLng={(d) => d.coordinates.lng}
        pointColor={() => 'red'}
        pointAltitude={0.03} // Increase the altitude for more visibility
        pointRadius={0.5} // Increase the size of the markers
        onPointClick={handleOceanClick} // When the marker is clicked
        hexPolygonsData={oceanBorders} // Data for the ocean borders
        hexPolygonResolution={4} // Resolution of the borders
        hexPolygonMargin={0.2} // Border margin
        hexPolygonColor={() => 'rgba(0, 128, 255, 0.5)'} // Color of the border (semi-transparent blue)
        width={window.innerWidth} // Globe should fill the screen width
        height={window.innerHeight} // Globe should fill the screen height
      />

      {/* Display ocean details in a card when a marker is clicked */}
      {selectedOcean && (
        <div className="info-card">
          <h2>{selectedOcean.name}</h2>
          <p>{selectedOcean.details}</p>
          <button onClick={() => setSelectedOcean(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default GlobeEmbed;
