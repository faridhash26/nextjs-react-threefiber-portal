import React from "react";
import {

  useGLTF,

  useTexture,
} from "@react-three/drei";

const Portal = () => {
  const { nodes } = useGLTF("models/portal.glb") as any;
  const bodyNormal = useTexture("models/bakedportal.jpg");

  return (
    <>
      <group dispose={null}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={nodes.Cube010.material}
          position={[0.98, -0.01, -1.5]}
          rotation={[0, -0.09, 0]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        {/* fence */}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[1.13, -0.01, 0.69]}
          rotation={[0, -0.12, 0]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={nodes.Cube012.material}
          position={[-0.76, -0.01, -0.82]}
          rotation={[Math.PI, -0.18, Math.PI]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={nodes.Cube006.material}
          position={[1.07, -0.01, -0.4]}
          rotation={[0, 0.1, 0]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
          position={[-1.18, 0.23, -1.33]}
          rotation={[0, 0.32, 0]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[-1.65, 0.23, -0.81]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={nodes.Cube016.material}
          position={[-0.72, -0.01, 0.11]}
          rotation={[-Math.PI, 0.06, -Math.PI]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={nodes.Cylinder003.material}
          position={[-1.76, 0, -0.03]}
          rotation={[-Math.PI, 0, -Math.PI / 2]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={nodes.Cube020.material}
          position={[-0.89, -0.01, 1.22]}
          rotation={[Math.PI, -0.11, Math.PI]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={nodes.Cylinder004.material}
          position={[-1.75, 0, -1.42]}
          rotation={[0, 0.31, Math.PI / 2]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={nodes.Cylinder006.material}
          position={[-1.12, 0, -0.72]}
          rotation={[Math.PI / 2, 1.57, 0]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={nodes.Cylinder005.material}
          position={[-1.91, 0.11, 0.01]}
          rotation={[2.19, 1.57, 0]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={nodes.Cylinder002.material}
          position={[-1.24, 0.23, -0.15]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          position={[-1.34, 0.37, -0.07]}
          rotation={[Math.PI, 0, 2.97]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[-1.36, 0.46, -0.07]}
          rotation={[Math.PI, 0, 2.97]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={nodes.Cube007.material}
          position={[1.34, 0.13, 0.46]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={nodes.Cube022.material}
          position={[1.37, 0.09, -1.24]}
          rotation={[Math.PI, -0.56, Math.PI]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={nodes.Cube015.material}
          position={[1.6, 0.21, 0]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={nodes.Cube023.material}
          position={[0.11, 0.92, -1.72]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>{" "}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[-1.24, 0.13, 0.46]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={nodes.Cube008.material}
          position={[0.88, 1.41, 0.46]}
          rotation={[Math.PI, 0, Math.PI]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={nodes.Cube025.material}
          position={[0.06, 0.91, -1.72]}
          rotation={[0, 0, -1.37]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={nodes.Cube014.material}
          position={[1.68, 0.21, -0.88]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>{" "}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[-0.78, 1.41, 0.46]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={nodes.Cube028.material}
          position={[0.06, 0.92, -1.72]}
          rotation={[0, 0, 2.86]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={nodes.Cube019.material}
          position={[1.6, 0.09, 0.8]}
          rotation={[0, -1.31, 0]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={nodes.Cube018.material}
          position={[-1.63, 0.14, 0.68]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        {"   "}
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={nodes.Cube011.material}
          position={[-1.38, 0.32, 1.33]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={nodes.Cube021.material}
          position={[1.68, 0.29, -1.64]}
          rotation={[0, 0.04, 0]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={nodes.Cube029.material}
          position={[0.06, 0.92, -1.72]}
          rotation={[0, 0, 2.18]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={nodes.Cube024.material}
          position={[0.06, 0.92, -1.72]}
          rotation={[0, 0, -0.66]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={nodes.Cube027.material}
          position={[0.06, 0.92, -1.72]}
          rotation={[0, 0, -2.74]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={nodes.Cube031.material}
          position={[0.06, 0.92, -1.72]}
          rotation={[0, 0, 0.79]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={nodes.Cube013.material}
          position={[1.58, 0.29, 1.39]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={nodes.Cube017.material}
          position={[-1.66, 0.21, -1.72]}
          rotation={[0, 0.64, 0]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={nodes.Cube026.material}
          position={[0.06, 0.92, -1.72]}
          rotation={[0, 0, -2.04]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={nodes.Cube030.material}
          position={[0.06, 0.92, -1.72]}
          rotation={[0, 0, 1.5]}
        >
          <meshBasicMaterial map={bodyNormal} map-flipY={false} />
        </mesh>
      </group>
    </>
  );
};

export default Portal;
