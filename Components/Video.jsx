import React from 'react'
import { BrandVideo } from '../src/assets/assets'


const Video = () => {
  return (
    <video autoPlay loop muted src={BrandVideo} 
    className='object-cover w-full min-h-120 rounded-xl md:rounded-3xl z-50'>
    </video>
  )
}

export default Video