import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";
import { OrthographicCamera } from "@react-three/drei";

const FiberContainer = () => {
  return (
    <>
      <Canvas
        camera={{
          fov: 45,
          position: [10, 7, 10],
        }}
      >
        <OrthographicCamera />
        <Experience />
      </Canvas>
    </>
  );
};

export default FiberContainer;
