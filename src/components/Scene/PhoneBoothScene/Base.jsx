import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Base(props) {
  const { nodes, materials } = useGLTF("/Reze_Phone_Base.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[1.851, -0.048, 2.567]} scale={[0.275, 0.275, 0.399]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials["Material.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_1.geometry}
          material={materials["Material.024"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_2.geometry}
          material={materials["Material.025"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_3.geometry}
          material={materials["Material.026"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.012"]}
        position={[0, 0.1, 0]}
        scale={[2.5, 0.1, 2.5]}
      />
      <group position={[0.26, 0.1, 0]} scale={[0.522, 0.1, 2.5]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_1.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube016_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010.geometry}
        material={materials["Material.037"]}
        scale={15.408}
      />
    </group>
  );
}

useGLTF.preload("/Reze_Phone_Base.glb");
