/* eslint-disable react/no-unknown-property */
import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'  
import { OrbitControls, Preload, useGLTF } from '@react-three/drei' 
import CanvasLoader from '../Loader'


const Computers = (isMobile) => {
  const computer= useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity= {0.15}
        groundColor="black"
        
        />
      <pointLight intensity={1}
      color="fuchsia"
      />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
          <primitive
            object={computer.scene}
            scale={isMobile ? 0.7 : 0.75}
            position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
            rotation={[-0.01, -0.2, -0.1]}
          />
    </mesh>
    
  )
};

//To see the computer, we add a shadow, a camera with position and a fov to see how wide we want it. (This is all Three.js frame)
//Suspense come from React and allow us to  put a loader
//orbitControls let us tomove the model

const ComputersCanvas= ()=>{
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    //To check if it is a mobile 
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
      // dpr{[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      >

      <Suspense fallback={<CanvasLoader/>} >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />

        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
    
  )

}
export default ComputersCanvas;