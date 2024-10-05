import React, { useEffect, useRef } from 'react';
import { LoadScript, GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 0,
  lng: 0,
};

const options = {
  tilt: 45,
};

const GoogleEarth = () => {
  const mapRef = useRef(null);

  const onLoad = (map) => {
    mapRef.current = map;
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={2}
        center={center}
        options={options}
        onLoad={onLoad}
      >
        {/* You can add markers here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleEarth;
