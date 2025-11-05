import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function RedFlower(props) {
  const { nodes, materials } = useGLTF("/Red.glb");
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.537, 2.107, 1.769]}
        rotation={[1.582, 1.235, 3.045]}
        scale={0.028}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve002_1.geometry}
          material={materials["Material.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve002_2.geometry}
          material={materials["Material.030"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve002_3.geometry}
          material={materials["Material.041"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Red.glb");
