import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const ThreeDScene = () => {
  const groupRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [prevMouseX, setPrevMouseX] = useState(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setPrevMouseX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - prevMouseX;
      groupRef.current.rotation.y += deltaX * 0.01; // Adjust rotation speed as needed
      setPrevMouseX(e.clientX);
    }
  };

  return (
    <div onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} >
      <Canvas style={{ width: '340px', height: '360px'}}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <group ref={groupRef} >
          <Model />
        </group>
      </Canvas>
    </div>
  );
};

const Model = () => {
  const gltf = useLoader(GLTFLoader, "/akira_vol._1_photogrammetry/scene.gltf");
  return <primitive object={gltf.scene} position={[5, -0.5, 0]} scale={[0.3, 0.3, 0.3]}/>;
};

export default ThreeDScene;
