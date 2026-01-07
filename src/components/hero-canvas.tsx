"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const POINTS = 1200;

function WavePoints() {
  const [positions] = useState(() => {
    const arr = new Float32Array(POINTS * 3);
    const rand = Math.random;
    for (let i = 0; i < POINTS; i += 1) {
      const ix = i * 3;
      arr[ix] = (rand() - 0.5) * 14;
      arr[ix + 1] = (rand() - 0.5) * 6;
      arr[ix + 2] = rand() * -6;
    }
    return arr;
  });

  const ref = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const positionsArray = ref.current?.geometry.attributes.position
      .array as Float32Array | undefined;
    if (!positionsArray) return;
    for (let i = 0; i < POINTS; i += 1) {
      const ix = i * 3;
      const x = positionsArray[ix];
      positionsArray[ix + 1] = Math.sin(x * 0.65 + t) * 0.6 + Math.cos((positionsArray[ix + 2] + t) * 0.4) * 0.4;
      positionsArray[ix + 2] += Math.sin(t * 0.08 + i * 0.002) * 0.01;
    }
    if (ref.current) {
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={ref} rotation={[0.1, 0.2, 0]}> 
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={POINTS}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color={new THREE.Color("#8dd8ff")}
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 14], fov: 35 }} gl={{ antialias: true }}>
        <color attach="background" args={["#030712"]} />
        <fog attach="fog" args={["#030712", 12, 30]} />
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 6, 6]} intensity={1.1} color={new THREE.Color("#7ef7d6")} />
        <pointLight position={[-6, -4, 2]} intensity={0.6} color={new THREE.Color("#7c7bff")} />
        <WavePoints />
      </Canvas>
    </div>
  );
}
