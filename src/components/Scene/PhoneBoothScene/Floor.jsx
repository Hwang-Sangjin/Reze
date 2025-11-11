import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Booth/Floor.jpg";
import * as THREE from "three";

export function Floor(props) {
  const { nodes, materials } = useGLTF("/Floor.glb");

  const bakedTexture = useTexture(BaseTexture);

  bakedTexture.flipY = false;
  bakedTexture.colorSpace = THREE.SRGBColorSpace;
  bakedTexture.minFilter = THREE.LinearFilter;
  bakedTexture.magFilter = THREE.NearestFilter;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane010_Baked.geometry}
        material={materials["MergedBake_Baked.005"]}
        scale={[25, 15.408, 25]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Floor.glb");
