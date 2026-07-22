import React from 'react'

const Hero = () => {
    return (
        <>
            <div className='w-full min-h-40 md:h-140  flex flex-col-reverse md:flex-row sm:items-end md:justify-between sm:px-4'>

                <div className='sm:w-130 text-xl font-bold sm:text-[2vw] sm:leading-9 sm:font-bold'>
                    <h3> Sundown is a multi-disciplinary studio focused on creating unique, end-to-end experiences and environments.</h3>
                </div>

                <div>
                    <h1 className='py-3 text-[86px] sm:text-[85px] md:text-[10vw] leading-tight md:leading-36 text-end font-bold'>SPACES <br /> THAT <br /> INSPIRE</h1>
                </div>

            </div>

            <hr className='my-3 md:my-10 border-black/40' />
        </>
    )
}

export default Hero