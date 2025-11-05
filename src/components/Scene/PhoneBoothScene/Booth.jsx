import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Booth.jpg";
import * as THREE from "three";

export function Booth(props) {
  const { nodes, materials } = useGLTF("/Booth.glb");

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
        geometry={nodes.Cube003_Baked.geometry}
        material={materials.MergedBake_Baked}
        position={[0.944, 3.026, 1.442]}
        scale={[0.648, 0.356, 0.648]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_Baked.geometry}
        material={materials.MergedBake_Baked}
        position={[0.938, 0.289, 1.438]}
        scale={[0.661, 0.089, 0.661]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Baked.geometry}
        material={materials.MergedBake_Baked}
        position={[0.943, 1.568, 2.014]}
        scale={[0.585, 1.263, 0.55]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009_Baked.geometry}
        material={materials.MergedBake_Baked}
        position={[0.482, 0.424, 1.888]}
        scale={0.082}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006_Baked.geometry}
        material={materials.MergedBake_Baked}
        position={[0.7, 0.279, 0.892]}
        scale={0.012}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013_Baked.geometry}
        material={materials.MergedBake_Baked}
        position={[1.813, 0.147, 2.318]}
        scale={0.067}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014_Baked.geometry}
        material={materials.MergedBake_Baked}
        position={[-0.685, 0.147, 2.318]}
        scale={0.067}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Booth.glb");
