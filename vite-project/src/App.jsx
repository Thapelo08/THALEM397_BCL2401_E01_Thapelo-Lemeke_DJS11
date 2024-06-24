/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useContext } from 'react'
import Sidebar from './components/Sidebar'
import AudioPlayer from './components/AudioPlayer'
import Display from './components/Display'
import { AudioPlayerContext } from './context/AudioPlayerContext'
import { AudioContext } from './context/AudioContext'

const App = () => {

  const { track} = useContext(AudioPlayerContext)
  const { audioRef } =useContext(AudioContext);
  console.log('Context Value:', contextValue);

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex'>
        <Sidebar />
        <Display />
      </div>
      <AudioPlayer />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App