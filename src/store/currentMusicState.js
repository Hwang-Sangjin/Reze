import { create } from "zustand";

const currentMusicState = create((set) => ({
  playMusic: null,
  setPlayMusic: (music) => set({ playMusic: music }),
  play: false,
  setPlay: (state) => set({ play: state }),
}));

export default currentMusicState;
