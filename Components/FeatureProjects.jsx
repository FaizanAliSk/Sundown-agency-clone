import React, { useState } from 'react'

const FeatureProjects = () => {

  const projects = [
    {
      title: "Play New Kidvision",
      company: "NIKE",
      category: "Environment",
      img: "https://images.unsplash.com/photo-1782392487647-7fee9715d1f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "SOHO NYC",
      company: "ARC'TERYX",
      category: "Environment",
      img: "https://images.unsplash.com/photo-1779896412317-5768a1911afb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Makers Studio HOI",
      company: "NIKE",
      category: "Experiential",
      img: "https://media.istockphoto.com/id/2242721518/photo/modern-podcast-studio-with-two-armchairs-microphones-and-soft-lighting-setup.webp?a=1&b=1&s=612x612&w=0&k=20&c=gURzlxQCHYlGD1rW5zQ9Tvc2Xdqd3V770G9_rt7WKhk=",
    },
    {
      title: "SOHO 2023",
      company: "CONVERSE",
      category: "Environment",
      img: "https://images.unsplash.com/photo-1517963140-f60c9eceb504?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29ob3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "NYFW Popup",
      company: "AFTERPAY",
      category: "Experiential",
      img: "https://plus.unsplash.com/premium_photo-1669075651564-2089e87a9920?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29ob3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Air Force 1 2021",
      company: "NIKE",
      category: "Environment",
      img: "https://images.unsplash.com/photo-1543691110-1c7d6b1927f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvaG98ZW58MHx8MHx8fDA%3D",
    },
    {
      title: "50th Anniversary",
      company: "NIKE",
      category: "Environment",
      img: "https://plus.unsplash.com/premium_photo-1760482627258-7bc6a3819f1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNvaG98ZW58MHx8MHx8fDA%3D",
    },
  ];

  const [showImage, SetShowImage] = useState(false);
  const [image, setImage] = useState(null);

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

          return <div className='relative border-b-1 border-gray-400 flex justify-between pl-10 pr-5 before:-z-10 py-10 overflow-hidden before:transition-all before:absolute before:-top-full hover:before:top-0 before:left-0 before:w-full before:h-full before:bg-[#ff9831]' onMouseEnter={() => setImage(e.img)}>

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
              <img src={e.img} alt={'project' + (idx + 1)} className='w-full h-full object-cover' />
            </div>

            <div className='pl-3 mt-2 mb-5'>
              <h2 className='text-2xl font-bold mb-2'>{e.title}</h2>
              <p className='font-bold text-sm'>{e.company}: <span className='font-light text-gray-600'>{e.category}</span></p>
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