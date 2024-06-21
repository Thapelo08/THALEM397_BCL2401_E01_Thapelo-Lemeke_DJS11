import React from 'react'
import { songsData, assets } from '../assets/assets'


const AudioPlayer = () => {
    return (
        <div className='h-[10%] bg-black flex justiify-between items-center text-white px-4'>
            <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={songsData[0].image} alt="" />
        <div>
            <p>{songsData[0].name}</p>
            <p>{songsData[0].desc.slice(0,12)}</p>
        </div>
      </div>

        </div>
    )
}