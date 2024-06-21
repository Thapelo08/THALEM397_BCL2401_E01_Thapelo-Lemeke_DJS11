import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const    AudioPlayerContext = createContext();

const audioRef = useRef();
const seekBg = useRef();
const seekBar = useRef();

const [track,setTrack ] = useState(songsData[1]);
const [playing,sePlaying] = uses


