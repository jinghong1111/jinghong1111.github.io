import React, { Suspense, useEffect, useState, useRef} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three"; 

import CanvasLoader from "../Loader";

const CuteShiba = ({ isMobile }) => {
  const cutedog = useGLTF("./shiba/scene.gltf");

  return (
    <mesh>
      {/* not really necessarily, its used for the computer */}
      <hemisphereLight intensity={0.5} groundColor='black' />
      <spotLight
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={5} />
      <primitive
        object={cutedog.scene}
        // isMobile is a boolean value that is passed in as a prop, if the screen is mobile, the scale and position of the 3d model will be different 
        scale={isMobile ? 1.75 : 2}
        // the postion: 
        position={isMobile ? [0, 0, -2.2] : [0, -0.25, -2]}
        rotation={[-0.01, -0.2, 0]}
      />
    </mesh>
  );
};

const ShibaCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  // for animation 
  // const mesh = useRef();
  // const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);

  // useFrame(() => {
  //   if(mesh.current) {
  //     // rotates the object
  //     mesh.current.rotate.y += 0.01;
  //   }
  // });

  // the useEffect is checking the screen size, if the screen is mobile, the 3d model will be rendered differently 
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      // camera position for the 3d object to be rendered
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
        {/* allows for the use of a loader (suspense), orbitcontrols allows the movement 
        of the 3d model  */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        // allows for rotation of the 3d model: x and y axis
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        enableRotate={true} // Enable rotation on both the x-axis and y-axis
        enableZoom={true}

        />
        <CuteShiba isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ShibaCanvas;