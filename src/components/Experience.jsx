import { Environment, OrbitControls } from "@react-three/drei";
import { PhoneBoothScene } from "./Scene/PhoneBoothScene/PhoneBoothScene";

export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls

      // minAzimuthAngle={Math.PI / 2}
      // maxAzimuthAngle={Math.PI}
      // minPolarAngle={Math.PI / 100}
      // maxPolarAngle={Math.PI - Math.PI / 2}
      // enableZoom={false}
      // enablePan={false}
      // enableRotate={false}
      />
      <PhoneBoothScene />
    </>
  );
};
