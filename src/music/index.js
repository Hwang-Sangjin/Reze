import first from "&/music/first.mp3";
import janeDoe from "&/music/jane.mp3";
import mouse from "&/music/mouse.mp3";
import pool from "&/music/pool.mp3";
import sea from "&/music/sea.mp3";

import firstImg from "&/music/2.jpg";
import janeDoeImg from "&/music/1.jpg";

const musicAPI = [
  {
    musicName: "in the pool",
    musicArtist: "kensuke ushio",
    musicSrc: pool,
    musicImageSrc: firstImg,
  },
  {
    musicName: "JANE DOE",
    musicArtist: "Kenshi Yonezu",
    musicSrc: janeDoe,
    musicImageSrc: janeDoeImg,
  },
  {
    musicName: "first glance",
    musicArtist: "kensuke ushio",
    musicSrc: first,
    musicImageSrc: firstImg,
  },
  {
    musicName: "in the sea",
    musicArtist: "kensuke ushio",
    musicSrc: sea,
    musicImageSrc: firstImg,
  },
  {
    musicName: "the city mouse and the country mouse",
    musicArtist: "kensuke ushio",
    musicSrc: mouse,
    musicImageSrc: firstImg,
  },
];

export default musicAPI;
