import React, { useRef } from "react";
import { shaderMaterial, useGLTF } from "@react-three/drei";
import { Color } from "three";
import { extend, useFrame } from "@react-three/fiber";

import vertexPortal from "./shaders/vertex";
import shaderPortal from "./shaders/fragment";

const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new Color("#ffffff"),
    uColorEnd: new Color("blue"),
  },
  vertexPortal,
  shaderPortal
);

const Lights = () => {
  const portalMaterial = useRef<any>();

  const { nodes, materials, scene } = useGLTF("models/portal.glb") as any;
  useFrame((state, delta) => (portalMaterial.current.uTime += delta));

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material-color="#f0bf94"
        position={[-0.78, 1.41, 0.46]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material-color="#f0bf94"
        position={[0.88, 1.41, 0.46]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle.geometry}
        position={nodes.Circle.position}
        rotation={nodes.Circle.rotation}
      >
        <portalMaterial ref={portalMaterial} />
      </mesh>
    </group>
  );
};

export default Lights;
extend({ PortalMaterial });
