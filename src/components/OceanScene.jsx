// src/OceanScene.js

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Water } from 'three/examples/jsm/objects/Water';
import { Sky } from 'three/examples/jsm/objects/Sky';

const OceanScene = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Set up scene
        const scene = new THREE.Scene();

        // Set up camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 10, 30);

        // Set up renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Add orbit controls
        const controls = new OrbitControls(camera, renderer.domElement);

        // Add a sky
        const sky = new Sky();
        sky.scale.setScalar(450000);
        scene.add(sky);

        // Create the sun
        const sunSphere = new THREE.SphereGeometry(200, 16, 8);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        const sun = new THREE.Mesh(sunSphere, sunMaterial);
        scene.add(sun);

        // Set up the water
        const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
        const water = new Water(waterGeometry, {
            color: '#001e0f',
            scale: 1,
            flowDirection: new THREE.Vector2(1, 1),
            textureWidth: 1024,
            textureHeight: 1024,
        });
        water.rotation.x = -Math.PI / 2;
        scene.add(water);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            water.material.uniforms['time'].value += 1.0 / 60.0; // Animate water
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup on unmount
        return () => {
            mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} />;
};

export default OceanScene;
