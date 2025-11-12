import * as React from "react";
import { useProgress } from "@react-three/drei";
import "./Loader.css";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useState } from "react";
import currentMusicState from "../../store/currentMusicState";

function Loader() {
  const loadingRef = useRef();
  const { active, progress } = useProgress();
  const [start, setStart] = useState(true);
  const { playMusic, setPlayMusic, play, setPlay } = currentMusicState();

  useEffect(() => {
    if (progress === 100) {
      if (loadingRef.current) {
        loadingRef.current.classList.add("ended");
        loadingRef.current.style.transform = "";
      }
    } else if (loadingRef.current) {
      loadingRef.current.style.transform = `scaleX(${progress / 100})`;
    }
  }, [progress]);

  return (
    <>
      {start ? (
        <div className="absolute text-center w-full h-full  z-50">
          <button
            onClick={() => {
              setPlay(true);
              setStart(false);
            }}
            className="z-100 relative top-1/3 m-auto pointer protest-guerrilla-regular text-6xl text-white"
            disabled={progress < 100}
          >
            Enter Jin's Room
          </button>
          <div ref={loadingRef} className="loading-bar"></div>
        </div>
      ) : null}
    </>
  );
}

export default Loader;
