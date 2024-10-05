import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

const GlobeComponent = () => {
  const globeEl = useRef(null);

  useEffect(() => {
    const globe = Globe()(globeEl.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth.jpg') 
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
      .showAtmosphere(true) 
      .atmosphereColor('lightblue')
      .atmosphereAltitude(0.2);

    globe
      .pointsData([
        { lat: 40.7128, lng: -74.0060, size: 0.1, color: 'red' }, // New York
        { lat: 51.5074, lng: -0.1278, size: 0.1, color: 'blue' }, // London
      ])
      .pointAltitude('size')
      .pointColor('color');
  }, []);

  return <div ref={globeEl} style={{ width: '100%', height: '600px' }}></div>;
};

export default GlobeComponent;

