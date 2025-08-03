import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// PUBLIC_INTERFACE
/**
 * Animated 3D Three.js Background for portfolio using @react-three/fiber.
 * Uses spheres with floating orbits and Google-style color palette.
 * Blends into modern dark UI -- pointer-events: none for pure decoration!
 */
function AnimatedSpheres() {
  // Three floating, glowing spheres (Google colors: blue, red, yellow, green)
  const group = useRef();
  useFrame(({ clock }) => {
    if (group.current) {
      const t = clock.getElapsedTime();
      group.current.children.forEach((sphere, idx) => {
        const phase = t + idx * Math.PI * 1.5;
        sphere.position.x = Math.sin(phase) * (2.5 + 0.6 * idx);
        sphere.position.y = Math.cos(phase * (1.08 + 0.1 * idx)) * (1.6 + 0.5 * idx);
        sphere.position.z = Math.sin(phase * 0.6) * (1.4 + idx * 0.5);
      });
    }
  });

  // Google colors: Blue, Red, Yellow, Green using vibrant tones.
  const colors = [
    "#4285F4", // Blue
    "#EA4335", // Red
    "#FBBC05", // Yellow
    "#34A853", // Green
  ];

  return (
    <group ref={group}>
      {colors.map((color, idx) => (
        <mesh key={color + idx} castShadow receiveShadow>
          <sphereGeometry args={[0.78 + 0.32 * idx, 48, 48]} />
          <meshPhysicalMaterial
            color={color}
            transmission={0.7}
            thickness={0.7}
            roughness={0.22}
            metalness={0.33 + idx * 0.11}
            clearcoat={0.55}
            envMapIntensity={0.86 + idx * 0.1}
            emissive={color}
            emissiveIntensity={0.19 + 0.09 * idx}
          />
        </mesh>
      ))}
    </group>
  );
}

function Lights() {
  // Soft white + accent directional lights, and subtle blue backlight
  return (
    <>
      <ambientLight intensity={0.44} />
      <directionalLight
        position={[4, 8, 16]}
        intensity={0.55}
        castShadow
        color="#ffffff"
      />
      <directionalLight
        position={[-3, 6, -7]}
        intensity={0.22}
        color="#4285F4"
      />
    </>
  );
}

// PUBLIC_INTERFACE
function ThreeJSBackground() {
  // Responsive canvas covering the viewport, with theme-friendly gradients behind the spheres
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      zIndex: 0,
      background: "linear-gradient(125deg,#08111A 65%,#1d2335 95%)",
      width: "100vw",
      height: "100vh"
    }}>
      <Canvas
        dpr={Math.min(window.devicePixelRatio, 2)}
        gl={{ alpha: true, antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
        camera={{ position: [0, 0, 7.5], fov: 50 }}
        style={{ width: "100vw", height: "100vh", background: "transparent" }}
      >
        <Lights />
        <AnimatedSpheres />
      </Canvas>
    </div>
  );
}

export default ThreeJSBackground;
