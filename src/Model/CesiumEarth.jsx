import React, { useEffect } from 'react';
import * as Cesium from 'cesium';
import 'cesium/Build/Cesium/Widgets/widgets.css';

const CesiumEarth = () => {
  useEffect(() => {
    // Set your Cesium Ion access token
    Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlNzhlNzVmOS1kYWY2LTRlZWQtODlkMi0wZDQ1NTNhZDI4MTEiLCJpZCI6MjQ2MDE4LCJpYXQiOjE3MjgxMTE2NjF9.9pSnbfHaByqOpXs9BLgaom842zr7TwjHDmJi9VQKBgQ';

    // Initialize Cesium Viewer
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: Cesium.createWorldTerrain(),
    });

    // Clean up on component unmount
    return () => {
      viewer.destroy();
    };
  }, []);

  return <div id="cesiumContainer" style={{ width: '100%', height: '100vh' }} />;
};

export default CesiumEarth;
