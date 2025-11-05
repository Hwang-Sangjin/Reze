import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function WhiteFlower(props) {
  const { nodes, materials } = useGLTF("/White.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.521, 2.085, 1.769]}
        rotation={[0.256, 0.14, -1.677]}
        scale={0.028}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve001_1.geometry}
          material={materials["Material.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve001_2.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve001_3.geometry}
          material={materials["Material.040"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/White.glb");
