import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const [resetRotation, setResetRotation] = useState(false);

  useEffect(() => {
    if (resetRotation) {
      props.setRotation([0, 0, 0]);
      setResetRotation(false);
    }
  }, [resetRotation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResetRotation(true);
    }, 2);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Float
      speed={1.75}
      rotation={props.rotation}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        {/* <icosahedronGeometry args={[1, 1]} /> */}
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [rotation, setRotation] = useState([0, 0, 0]);

  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} rotation={rotation} setRotation={setRotation} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
