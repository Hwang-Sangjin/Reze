import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF } from "@react-three/drei";

export function PhoneBoothGlass(props) {
  const { nodes, materials } = useGLTF("/PhoneBoothGlass.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        position={[0.939, 1.568, 2.018]}
        scale={[0.595, 1.283, 0.559]}
      >
        <MeshTransmissionMaterial
          backSide={true}
          thickness={0.02}
          roughness={0.1}
          transmission={0.92}
          ior={1.2}
          chromaticAberration={0.2}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/PhoneBoothGlass.glb");
