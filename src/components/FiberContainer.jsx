import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience";

const FiberContainer = () => {
  return (
    <>
      <Canvas>
        <Experience />
      </Canvas>
    </>
  );
};

export default FiberContainer;
