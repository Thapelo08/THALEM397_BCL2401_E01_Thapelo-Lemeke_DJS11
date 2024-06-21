import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, songsData } from '../assets/assets'


const displayAlbum = () => {
  
  const {id} = useParams();
  const albumsData = albumsData[id];
  console.log(albumsData);


  return (
    <>
      <Navbar/>
      <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
         <img className='w-48 rounded' src={albumsData.img} alt="" />
         <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
            <h4>{albumsData.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                <b> Spotify</b>
                - 1,323,154 likes
                - <b>50 episodes</b>
                  about 2 hrs 30 mins
            </p>
        </div>
      </div>
    </>
  )
}

export default displayAlbum
