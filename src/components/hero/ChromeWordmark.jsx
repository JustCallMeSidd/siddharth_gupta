import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

// Font URL used for 3D Text
const FONT_URL = 'https://unpkg.com/three@0.168.0/examples/fonts/helvetiker_bold.typeface.json';

function Chrome3DText() {
  const prefersReducedMotion = useReducedMotion();
  const materialRef = useRef();
  
  // Create a stable reference to uTime uniform
  const uniformsRef = useRef({
    uTime: { value: 0 }
  });

  // Update time uniform for the liquid ripple effect
  useFrame((state) => {
    if (!prefersReducedMotion && uniformsRef.current.uTime) {
      uniformsRef.current.uTime.value = state.clock.getElapsedTime();
    }
  });

  const handleBeforeCompile = (shader) => {
    // Inject the uTime uniform
    shader.uniforms.uTime = uniformsRef.current.uTime;
    
    // Modify vertex shader to displace vertices along normals
    shader.vertexShader = `
      uniform float uTime;
      ${shader.vertexShader}
    `.replace(
      '#include <begin_vertex>',
      `
      #include <begin_vertex>
      #ifndef FLAT_SHADED
        // Calculate a gentle liquid wave displacement using sine/cosine functions
        float ripple = sin(position.x * 2.5 + uTime * 1.8) * 0.035 + 
                       cos(position.y * 2.0 + uTime * 1.4) * 0.025;
        transformed += normal * ripple;
      #endif
      `
    );
  };

  return (
    <Center>
      <Text3D
        font={FONT_URL}
        size={1.1}
        height={0.25}
        curveSegments={16}
        bevelEnabled
        bevelThickness={0.03}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={6}
      >
        SIDDHARTH
        <meshPhysicalMaterial
          ref={materialRef}
          color="#ffffff"
          metalness={1.0}
          roughness={0.04}
          clearcoat={1.0}
          clearcoatRoughness={0.01}
          envMapIntensity={1.8}
          onBeforeCompile={handleBeforeCompile}
        />
      </Text3D>
    </Center>
  );
}

export default function ChromeWordmark() {
  return (
    <div className="w-full h-[220px] sm:h-[280px] md:h-[340px] relative select-none">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ 
          antialias: true, 
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <Chrome3DText />
          {/* Studio environment preset provides rich reflective gradients for chrome */}
          <Environment preset="studio" />
        </Suspense>
      </Canvas>
    </div>
  );
}
