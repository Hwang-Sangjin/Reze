import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Guard.jpg";
import * as THREE from "three";

export function Guard(props) {
  const { nodes, materials } = useGLTF("/Guard.glb");

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
        geometry={nodes.Cube011_Baked.geometry}
        material={materials["MergedBake_Baked.011"]}
        position={[-1.273, 0.497, 1.451]}
        scale={[0.922, 0.297, 0.556]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_Baked.geometry}
        material={materials["MergedBake_Baked.012"]}
        position={[0.572, 0.576, 2.315]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Guard.glb");
