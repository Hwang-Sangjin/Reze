import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Store.jpg";
import * as THREE from "three";

export function Store(props) {
  const { nodes, materials } = useGLTF("/Store.glb");

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
        geometry={nodes.Cube024_Baked.geometry}
        material={materials["MergedBake_Baked.030"]}
        position={[0.19, 3.475, -2.084]}
        scale={[0.89, 1.414, 1.092]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh position={[0, 2, -1]}>
        <planeGeometry args={[20, 6, 5, 5]} />
        <meshPhysicalMaterial transmission={1} roughness={0.15} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Store.glb");
