import { Canvas } from "@react-three/fiber";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import { Experience } from "./Experience";
import CameraControls from "./Scene/PhoneBoothScene/CameraControls";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

export default function FiberContainer() {
  const [isFull, setIsFull] = useState(false);

  return (
    <div
      onClick={() => setIsFull(true)}
      className={`transition-all duration-700 ease-in-out ${
        isFull
          ? "fixed top-0 left-0 w-screen h-screen z-50"
          : "relative w-[400px] h-[300px] cursor-pointer"
      }`}
    >
      {/* ✅ 닫기 버튼 */}
      {isFull && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFull(false);
          }}
          className="absolute top-4 right-4 z-[100] pointer-events-auto bg-black/60 text-white px-3 py-1 rounded-md text-sm hover:bg-black/80 transition"
        >
          ✕ Close
        </button>
      )}

      <Canvas>
        <CameraControls />
        <Experience />
        <OrbitControls
          enableRotate={true}
          enablePan={true}
          enableZoom={true}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 3}
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI / 4}
          minZoom={40}
          maxZoom={60}
        />
      </Canvas>
    </div>
  );
}
