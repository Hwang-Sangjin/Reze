import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Booth/Base.jpg";
import * as THREE from "three";

export function Base(props) {
  const { nodes, materials } = useGLTF("/Base.glb");

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
        geometry={nodes.Cube_Baked.geometry}
        material={materials["MergedBake_Baked.006"]}
        position={[0, 0.1, 0]}
        scale={[2.5, 0.1, 2.5]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012_Baked.geometry}
        material={materials["MergedBake_Baked.007"]}
        position={[0.26, 0.1, 0]}
        scale={[0.522, 0.1, 2.5]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015_Baked.geometry}
        material={materials["MergedBake_Baked.008"]}
        position={[1.851, -0.048, 2.567]}
        scale={[0.275, 0.275, 0.399]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Base.glb");
