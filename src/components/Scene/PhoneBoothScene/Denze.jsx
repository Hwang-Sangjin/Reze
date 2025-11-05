import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Denze(props) {
  const { nodes, materials } = useGLTF("/Denze.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001.geometry}
        material={materials["Material_0.001"]}
        position={[0.782, 1.345, 1.211]}
        rotation={[0, 0.632, 0]}
        scale={1.127}
      />
    </group>
  );
}

useGLTF.preload("/Denze.glb");
