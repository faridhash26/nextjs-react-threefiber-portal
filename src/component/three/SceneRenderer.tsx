"use client";

import React from "react";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Sparkles,
  useGLTF,
  shaderMaterial,
} from "@react-three/drei";
import Portal from "./Portal";
import Lights from "./Lights";

const SceneRenderer = ({
  scale = Array.from({ length: 50 }, () => 0.5 + Math.random() * 4),
}) => {
  return (
    <Canvas camera={{ fov: 45, position: [4, 2, 4] }}>
      <color args={["#201919"]} attach={"background"} />
      <OrbitControls makeDefault />

      <Sparkles
        count={scale.length}
        size={scale as any}
        position={[0, 0.9, 0]}
        scale={[4, 1.5, 4]}
        speed={0.3}
      />

      <Portal />
      <Lights />
    </Canvas>
  );
};

export default SceneRenderer;
