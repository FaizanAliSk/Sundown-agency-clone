import React from 'react'

const CallToAction = () => {
    return (
        <div className='relative'>

            <div className='flex flex-col md:flex-row justify-between md:gap-20 md:px-10 md:h-160 mb-10'>

                <div className='md:w-500 py-5'>

                    <h2 className='text-[26px] md:text-[4.2vw] md:leading-18 font-bold'>
                        We are a group of design-driven, goal-focused creators, producers, and designers who believe that the details make all the difference.
                    </h2>

                </div>

                <div className='flex w-full md:w-150 justify-end items-end'>

                    <div className='w-80'>
                        <img src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg" className='rounded-2xl mb-10' />

                        <p className='text-sm'>We love to create, we love to solve, we love to collaborate, and we love to turn amazing ideas into reality. We’re here to partner with you through every step of the process and know that relationships are the most important things we build.</p>
                    </div>

                </div>

            </div>

            <div className='absolute bottom-0 left-120 hidden md:flex'>


                <div className='bg-[#fd340c] -z-10 blur-[50px] w-120 h-120 rounded-full animate-ani3'></div>

            </div>

        </div>
    )
}

export default CallToAction 