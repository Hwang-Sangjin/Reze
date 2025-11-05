import { useFrame } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const CameraControls = () => {
  const cameraRef = useRef();
  const target = new THREE.Vector3(0, 2, 0); // 👈 카메라가 바라볼 지점

  useFrame(() => {
    if (cameraRef.current) {
      cameraRef.current.lookAt(target);
    }
  });

  return (
    <OrthographicCamera
      ref={cameraRef}
      makeDefault
      position={[7, 7, 10]}
      zoom={100}
    />
  );
};

export default CameraControls;
