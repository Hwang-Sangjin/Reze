import { useGLTF, useTexture } from "@react-three/drei";
import BaseTexture from "&/Phone.jpg";
import * as THREE from "three";

export function Phone(props) {
  const { nodes, materials } = useGLTF("/Phone.glb");

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
        geometry={nodes.BézierCurve_Baked.geometry}
        material={materials["MergedBake_Baked.024"]}
        position={[0.757, 1.707, 1.909]}
        rotation={[0.041, -0.785, -1.542]}
        scale={0.091}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Can_330_ml_sleek001_Baked.geometry}
        material={materials["MergedBake_Baked.025"]}
        position={[0.519, 1.927, 1.781]}
        rotation={[-Math.PI, 0.587, -Math.PI]}
        scale={1.182}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002_Baked.geometry}
        material={materials["MergedBake_Baked.026"]}
        position={[1.363, 0, -0.057]}
        rotation={[0, -Math.PI / 4, 0]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Yellow_story_book_Baked.geometry}
        material={materials["MergedBake_Baked.027"]}
        position={[0.617, 1.041, 1.78]}
        rotation={[Math.PI, -Math.PI / 4, Math.PI]}
        scale={[0.803, 2.722, 0.803]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Phone.glb");
