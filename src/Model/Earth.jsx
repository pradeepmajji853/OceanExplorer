import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import earthTexture from '../assets/images/texture.jpg'; 

function Earth() {
  const texture = useLoader(TextureLoader, earthTexture);

  return (
    <mesh>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function EarthScene() {
  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Earth />
      <Stars />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}

export default EarthScene;
