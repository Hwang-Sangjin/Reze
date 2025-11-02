import { Environment } from "@react-three/drei";
import { PhoneBoothScene } from "./Scene/PhoneBoothScene/PhoneBoothScene";

export const Experience = () => {
  return (
    <>
      <Environment preset="studio" />
      <ambientLight intensity={5} />
      <PhoneBoothScene />
    </>
  );
};
