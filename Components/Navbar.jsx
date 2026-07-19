import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between w-full h-25 items-end'>

        <div>
            <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg" alt="Logo" className='w-30 sm:w-40' />
        </div>

        <div className='flex space-x-2 items-end h-full'>

            <a href="#" className='capitalize relative overflow-hidden py-2 px-4 md:px-8 text-sm md:text-lg text-black/50 border border-black/20 rounded-3xl after:absolute after:w-full after:h-full after:bg-black after:-bottom-11 after:left-0 hover:text-white hover:after:bottom-0 after:-z-10 after:transition-all after:duration-400'> work </a>

           <a href="#" className='capitalize relative overflow-hidden py-2 px-4 md:px-8 text-sm md:text-lg text-black/50 border border-black/20 rounded-3xl after:absolute after:w-full after:h-full after:bg-black after:-bottom-11 after:left-0 hover:text-white hover:after:bottom-0 after:-z-10 after:transition-all after:duration-400'> studio </a>

           <a href="#" className='capitalize relative overflow-hidden py-2 px-4 md:px-8 text-sm md:text-lg text-black/50 border border-black/20 rounded-3xl after:absolute after:w-full after:h-full after:bg-black after:-bottom-11 after:left-0 hover:text-white hover:after:bottom-0 after:-z-10 after:transition-all after:duration-400'> contact </a>
            
        </div>

    </nav>
  )
}

export default Navbar