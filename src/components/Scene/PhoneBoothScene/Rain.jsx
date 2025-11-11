import * as THREE from "three";

import rainFragmentShader from "@/shaders/RainFrag.glsl";
import rainVertexShader from "@/shaders/RainVertex.glsl";
import { useEffect, useMemo, useState } from "react";
import Perlin from "&/Booth/perlin.png";
import { useFrame } from "@react-three/fiber";

export const Rain = () => {
  const [SnowGeometry, setSnowGeometry] = useState(new THREE.BufferGeometry());
  const particle_cnt = 1500; //0~5000

  const PerlinTexture = new THREE.TextureLoader().load(Perlin);
  PerlinTexture.wrapS = THREE.RepeatWrapping;
  PerlinTexture.wrapT = THREE.RepeatWrapping;

  const particleUniforms = useMemo(
    () => ({
      uTime: { value: 0.0 },
      uPerlinTexture: { value: PerlinTexture },
    }),
    []
  );

  useEffect(() => {
    const temp = new THREE.BufferGeometry();
    const positionArray = new Float32Array(particle_cnt * 3);
    const progressArray = new Float32Array(particle_cnt);
    const sizeArray = new Float32Array(particle_cnt);
    const alphaArray = new Float32Array(particle_cnt);
    const IndexArray = new Float32Array(particle_cnt);

    for (let i = 0; i < particle_cnt; i++) {
      positionArray[i * 3] = (Math.random() - 0.5) * 10;
      positionArray[i * 3 + 1] = Math.random() * 10;
      positionArray[i * 3 + 2] = -(Math.random() - 0.5) * 10;
      progressArray[i] = Math.random();

      sizeArray[i] = Math.random();

      alphaArray[i] = Math.random();

      IndexArray[i] = Math.random();
    }

    temp.setAttribute(
      "position",
      new THREE.BufferAttribute(new Float32Array(positionArray), 3)
    );
    temp.setAttribute(
      "aProgress",
      new THREE.BufferAttribute(new Float32Array(progressArray), 1)
    );
    temp.setAttribute(
      "aSize",
      new THREE.BufferAttribute(new Float32Array(sizeArray), 1)
    );
    temp.setAttribute(
      "aAlpha",
      new THREE.BufferAttribute(new Float32Array(alphaArray), 1)
    );
    temp.setAttribute(
      "aIndex",
      new THREE.BufferAttribute(new Float32Array(IndexArray), 1)
    );

    setSnowGeometry(temp);
  }, []);

  useFrame((state) => {
    const { clock } = state;
    particleUniforms.uTime.value = clock.getElapsedTime();
  });

  return (
    <points geometry={SnowGeometry}>
      {/* <pointsMaterial
        size={0.05}
        color={"#88ccff"}
        transparent
        opacity={0.8}
        sizeAttenuation
      /> */}
      <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthTest={false}
        attach="material"
        transparent={true}
        uniforms={particleUniforms}
        vertexShader={rainVertexShader}
        fragmentShader={rainFragmentShader}
      />
      {/* <shaderMaterial
        blending={THREE.AdditiveBlending}
        depthTest={false}
        attach="material"
        transparent={true}
        vertexShader={rainVertexShader}
        fragmentShader={rainFragmentShader}
      /> */}
    </points>
  );
};
