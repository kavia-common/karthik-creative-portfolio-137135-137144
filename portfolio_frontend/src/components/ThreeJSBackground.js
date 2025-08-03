import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// PUBLIC_INTERFACE
/**
 * Animated 3D Three.js Background for portfolio using @react-three/fiber.
 * Spheres in Google-style palette now respond to page scroll (rotation, position).
 * Blends into light modern UI -- pointer-events: none for pure decoration!
 */
function AnimatedSpheres({ scrollY }) {
  // Floating, glowing spheres (Google colors: blue, red, yellow, green)
  const group = useRef();
  useFrame(({ clock }) => {
    if (group.current) {
      const t = clock.getElapsedTime();
      // Normalize scroll: clamp 0-1 for up to 1500px scroll (you can tweak as needed)
      const normScroll =
        scrollY < 0
          ? 0
          : scrollY > 1500
          ? 1
          : scrollY / 1500;
      // Rotation sensitivity for parallax effect
      group.current.rotation.y = normScroll * Math.PI * 1.1;
      group.current.rotation.x = 0.25 + Math.sin(t * 0.2) * 0.07 + normScroll * 0.15;
      group.current.children.forEach((sphere, idx) => {
        const phase = t + idx * Math.PI * 1.5 + normScroll * (1.2 + idx * 0.6);
        sphere.position.x =
          Math.sin(phase) * (2.5 + 0.6 * idx) + Math.sin(normScroll * 2.2 + idx) * 0.5;
        sphere.position.y =
          Math.cos(phase * (1.08 + 0.1 * idx)) * (1.6 + 0.5 * idx) - normScroll * 2.1 * idx;
        sphere.position.z =
          Math.sin(phase * 0.6) * (1.4 + idx * 0.5) + Math.cos(normScroll * 1.8 + idx) * 0.29;
      });
    }
  });

  // Google colors: Blue, Red, Yellow, Green using vibrant tones for light mode
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
            transmission={0.75}
            thickness={0.8}
            roughness={0.19}
            metalness={0.24 + idx * 0.11}
            clearcoat={0.63}
            envMapIntensity={1.06 + idx * 0.13}
            emissive={color}
            emissiveIntensity={0.15 + 0.13 * idx}
          />
        </mesh>
      ))}
    </group>
  );
}

function Lights() {
  // Softer, daylight-style lighting for light mode
  return (
    <>
      <ambientLight intensity={0.57} />
      <directionalLight
        position={[4, 8, 16]}
        intensity={0.55}
        castShadow
        color="#ffffff"
      />
      <directionalLight
        position={[-3, 6, -7]}
        intensity={0.13}
        color="#AED9FB" // daylight blue accent
      />
      <directionalLight
        position={[0, -10, 4]}
        intensity={0.10}
        color="#FBBC05"
      />
    </>
  );
}

// PUBLIC_INTERFACE
function ThreeJSBackground() {
  // React to scroll position to influence 3D scene
  const [scrollY, setScrollY] = useState(window.scrollY || 0);

  useEffect(() => {
    let animationFrame = null;
    const onScroll = () => {
      // Use requestAnimationFrame for smooth state update
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        animationFrame = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Light background gradient for light mode
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        background:
          "linear-gradient(120deg, #f8fafc 70%, #e8f0fe 100%)",
        width: "100vw",
        height: "100vh",
        transition: "background 0.33s",
      }}
    >
      <Canvas
        dpr={Math.min(window.devicePixelRatio, 2)}
        gl={{
          alpha: true,
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
        }}
        camera={{ position: [0, 0, 7.5], fov: 50 }}
        style={{
          width: "100vw",
          height: "100vh",
          background: "transparent",
        }}
      >
        <Lights />
        <AnimatedSpheres scrollY={scrollY} />
      </Canvas>
    </div>
  );
}

export default ThreeJSBackground;
