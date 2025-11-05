import { Environment, OrbitControls } from "@react-three/drei";
import { PhoneBoothScene } from "./Scene/PhoneBoothScene/PhoneBoothScene";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />

      <PhoneBoothScene />
    </>
  );
};
