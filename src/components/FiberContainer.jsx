import { Canvas } from "@react-three/fiber";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { Experience } from "./Experience";
import CameraControls from "./Scene/PhoneBoothScene/CameraControls";
import { OrbitControls } from "@react-three/drei";

export default function FiberContainer() {
  return (
    <Canvas>
      <CameraControls />
      <Experience />
      <OrbitControls
        enableRotate={true}
        enablePan={true}
        enableZoom={true}
        // 📌 회전 제한 (상하)
        minPolarAngle={Math.PI / 4} // 아래로 45도
        maxPolarAngle={Math.PI / 3} // 위로 90도
        // 📌 회전 제한 (좌우)
        minAzimuthAngle={0} // 왼쪽 45도
        maxAzimuthAngle={Math.PI / 4} // 오른쪽 45도
        // 📌 줌 제한 (orthographic 전용)
        minZoom={40}
        maxZoom={60}
      />
    </Canvas>
  );
}
