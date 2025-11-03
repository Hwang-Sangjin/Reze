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
      <group position={[1.813, 0.256, 2.318]} scale={0.056}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials["Material.008"]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Material.009"]}
        >
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.008"]}
        position={[-0.56, 0.436, 2.318]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.028}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.008"]}
        position={[-0.493, 1.178, 2.318]}
        rotation={[0, 0, -Math.PI]}
        scale={0.027}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.008"]}
        position={[1.624, 1.178, 2.318]}
        rotation={[0, 0, -Math.PI]}
        scale={0.027}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.008"]}
        position={[0.572, 0.576, 2.315]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials["Material.008"]}
        position={[-1.485, 0.839, 2.318]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.028}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials["Material.008"]}
        position={[1.932, 1.216, 2.318]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.028}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Material.011"]}
        position={[1.813, 0.147, 2.318]}
        scale={0.067}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Material.011"]}
        position={[-0.685, 0.147, 2.318]}
        scale={0.067}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Material.010"]}
        position={[-1.273, 0.497, 1.451]}
        scale={[0.922, 0.297, 0.556]}
      >
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/Guard.glb");
