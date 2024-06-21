import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const    AudioPlayerContext = createContext();

const AudioPlayerContextProvider = (props) => {

    const audioRef = useRef();
const seekBg = useRef();
const seekBar = useRef();

const [track,setTrack ] = useState(songsData[1]);
const [playing,setPlaying] = useState(false)
const [time,seTime] = useState ({
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

useEffect(()=>{
    setTimeout(() => {

        audioRef.current.ontimeupdate = () => {
            seekBar.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%";
            setTime({
                currentTime:{
                    second: Math.floor(audioRef.current.currentTime % 60),
                    minute: Math.floor(audioRef.current.currentTime / 60)
                },
                totalTime: {
                    second: Math.floor(audioRef.current.duration % 60),
                    minute: Math.floor(audioRef.current.duration / 60)
                }
            })
        }
    }, 1000);
},[audioRef])



}







