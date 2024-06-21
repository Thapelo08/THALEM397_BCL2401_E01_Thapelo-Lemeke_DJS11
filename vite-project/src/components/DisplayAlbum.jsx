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
      
    </>
  )
}

export default displayAlbum
