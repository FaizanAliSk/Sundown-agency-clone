import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='w-full min-h-40 sm:h-140  flex flex-col-reverse sm:flex-row sm:items-end sm:justify-between sm:px-4'>

                <div className='sm:w-130 text-lg sm:text-[2vw] sm:leading-9 sm:font-bold'>
                    <h3> Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</h3>
                </div>

                <div>
                    <h1 className='text-[10vw] md:p-[1vw] leading-tight sm:leading-36 font-bold sm:text-end '>SPACES <br /> THAT <br /> INSPIRE</h1>
                </div>

            </div>

            <hr className='my-3 md:my-10 border-black/40' />
        </>
    )
}

export default Hero