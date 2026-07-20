import React from 'react'
import { BrandVideo } from '../src/assets/assets'


const Video = () => {
  return (
    <div className='w-full relative rounded-4xl overflow-hidden my-4'>

    <video autoPlay loop muted src={BrandVideo} className='object-cover'></video>

    </div>
  )
}

export default Video