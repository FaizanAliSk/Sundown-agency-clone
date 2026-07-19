import React from 'react'

const Video = () => {
  return (
    <div className='w-full relative rounded-4xl overflow-hidden my-4'>

    <video autoPlay loop muted src="../src/assets/video.mp4" className='object-cover'></video>

    </div>
  )
}

export default Video