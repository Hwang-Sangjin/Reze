import AudioContainer from "./AudioComponents/AudioContainer";
import FiberContainer from "./FiberContainer";
import Loader from "./Loader/Loader";

const Container = () => {
  return (
    <>
      <Loader />
      {/* <FiberContainer /> */}
      <AudioContainer />
    </>
  );
};

export default Container;
