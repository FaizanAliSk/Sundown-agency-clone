import React, { useEffect, useState } from 'react'
import { projects } from '../src/assets/assets';

const FeatureProjects = () => {

  const [showImage, SetShowImage] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.img;
    });
  }, []);

  return (
    <div>
      <div className='flex gap-2 items-center pl-5 mb-10'>
        <div className='w-2 h-2 bg-[#fd340c] rounded-full'></div>
        <h2 className='text-md uppercase'>featured projects</h2>
      </div>

      {/* Desktop */}
      <div onMouseEnter={() => { SetShowImage(true) }} onMouseLeave={() => SetShowImage(false)} className='hidden md:block'>

        <div className={`${showImage === true ? 'block' : 'hidden'} w-100 h-130 fixed bottom-16 right-60 z-50 rounded-2xl overflow-hidden`}>
          <img src={image} className='w-full h-full object-cover' />
        </div>

        {projects.map((e, idx) => {

          return <div className='relative border-b-1 border-gray-400 flex justify-between pl-10 pr-5 before:-z-10 py-10 overflow-hidden before:transition-all before:absolute before:-top-full hover:before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ff9831]' onMouseEnter={() => setImage(e.img)} key={idx}>

            <div>
              <h2 className='text-5xl font-bold'>{e.title}</h2>
            </div>

            <div className='text-end'>
              <h5>{e.company}</h5>
              <span>{e.category}</span>
            </div>

          </div>

        })}
      </div>


      {/* Mobile */}
      <div className='md:hidden px-4'>
        {projects.map((e, idx) => {
          return <div>

            <div className='w-full h-80 rounded-3xl overflow-hidden'>
              <img src={e.img} alt={'project' + (idx + 1)} className='w-full h-full object-cover' loading='lazy' />
            </div>

            <div className='pl-3 mt-2 mb-5'>
              <h2 className='text-4xl font-bold mb-2'>{e.title}</h2>
              <p className='font-bold'>{e.company}: <span className='font-light text-gray-600'>{e.category}</span></p>
            </div>
          </div>

        })}

      </div>
      <div className='flex space-x-2 items-end h-full pl-5 md:my-10 justify-center'>
        <a href="#" className='capitalize relative overflow-hidden py-2 px-4 text-sm  text-black border border-black rounded-3xl after:absolute after:w-full after:h-full after:bg-black after:-bottom-11 after:left-0 hover:text-white hover:after:bottom-0 after:-z-10 after:transition-all after:duration-400'> all projects<code>{'->'} </code> </a>
      </div>
    </div>


  )
}

export default FeatureProjects