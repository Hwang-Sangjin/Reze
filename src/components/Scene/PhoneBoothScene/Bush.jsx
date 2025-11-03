import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Bush(props) {
  const { nodes, materials } = useGLTF("/Bush.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[-1.302, 0.679, 1.486]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={1.05}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree004.geometry}
          material={materials["Cotoneáster berrys"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree004_1.geometry}
          material={materials["Cotoneáster leaf 1"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree004_2.geometry}
          material={materials["Cotoneáster leaf 2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree004_3.geometry}
          material={materials["Cotoneáster leaf 3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.tree004_4.geometry}
          material={materials["Cotoneáster fake bush"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Bush.glb");
