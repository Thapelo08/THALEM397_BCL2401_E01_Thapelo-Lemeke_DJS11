import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const    AudioPlayerContext = createContext();

const audioRef = useRef();
const seekBg = useRef();
const seekBar = useRef();

const [track,setTrack ] = useState(songsData[1]);
const [playing,setPlaying] = useState(flase)
const [time,seTime] = useState({
    currentTime:{
        second: 0,
        minute: 0
    },
    totalTime: {
        second: 0,
        minute: 0
    }
});

const play = () => {
    audioRef.current.play();
    setPlaying(true);
}

const pause = () => {
    audioRef.current.pause();
    setPlaying(false);
}

const playWithId = async (id) => {
    await setTrack(songsData[id]);
    await audioRef.current.play();
    setPlaying(true);
}

})


