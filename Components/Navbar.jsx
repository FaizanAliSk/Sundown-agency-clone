import React, { useState } from 'react'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>

      <nav className='flex justify-between w-full h-20 md:h-25 items-end'>

        <div>
          <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="Logo" className='w-40' />
        </div>


        <div className='hidden md:flex space-x-2 items-end h-full'>

          <a href="#" className='capitalize relative overflow-hidden py-2 px-4 md:px-8 text-sm md:text-lg text-black/50 border border-black/20 rounded-3xl after:absolute after:w-full after:h-full after:bg-black after:-bottom-11 after:left-0 hover:text-white hover:after:bottom-0 after:-z-10 after:transition-all after:duration-400'> work </a>

          <a href="#" className='capitalize relative overflow-hidden py-2 px-4 md:px-8 text-sm md:text-lg text-black/50 border border-black/20 rounded-3xl after:absolute after:w-full after:h-full after:bg-black after:-bottom-11 after:left-0 hover:text-white hover:after:bottom-0 after:-z-10 after:transition-all after:duration-400'> studio </a>

          <a href="#" className='capitalize relative overflow-hidden py-2 px-4 md:px-8 text-sm md:text-lg text-black/50 border border-black/20 rounded-3xl after:absolute after:w-full after:h-full after:bg-black after:-bottom-11 after:left-0 hover:text-white hover:after:bottom-0 after:-z-10 after:transition-all after:duration-400'> contact </a>
        </div>

        {/* 
----------------------------------------------------------------------------------
                mobile menu
        */}

        <div className={`bg-[#efeae3] top-0 left-0 w-full h-0 overflow-hidden fixed z-10 transition-all duration-700 ${isOpen === true ? 'h-screen' : 'h-0'}`}>

        <button className='absolute top-8 right-3 px-7 py-2 border rounded-4xl border-black/30'
        onClick={() => setIsOpen(false)}
        >Close</button>

          <div className='space-x-2 w-full h-screen flex flex-col items-center justify-center space-y-5'>

            <a href="#" className='capitalize relative overflow-hidden py-2 px-8 text-4xl text-black/50 border border-black/20 rounded-4xl'> work </a>

            <a href="#" className='capitalize relative overflow-hidden py-2 px-8 text-4xl text-black/50 border border-black/20 rounded-4xl'> studio </a>

            <a href="#" className='capitalize relative overflow-hidden py-2 px-8 text-4xl text-black/50 border border-black/20 rounded-4xl'>
            contact </a>

          </div>

        </div>

        <div className='flex md:hidden w-full justify-end
      py-2'>
          <button className='px-7 py-2 border rounded-4xl border-black/30'
          onClick={() => setIsOpen(true)}
          >Menu</button>
        </div>

      </nav>
    </>
  )
}

export default Navbar