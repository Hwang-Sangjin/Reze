// import AudioPlayer from "./AudioPlayer";
import musicAPI from "../../music";
import { useEffect, useState } from "react";

const AudioContainer = () => {
  const [musicList, setMusicList] = useState(musicAPI);

  useEffect(() => {
    console.log(musicList);
  }, [musicList]);

  return (
    <>
      <audio></audio>

      {/* <AudioPlayer /> */}
    </>
  );
};

export default AudioContainer;
