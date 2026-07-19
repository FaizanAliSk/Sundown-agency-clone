import React from 'react'

const Footer = () => {
    return (
        <footer className='-z-20 w-full relative h-screen bg-black text-white bg-fixed px-5 overflow-hidden'>

            <div className='flex flex-col md:flex-row md:justify-between pt-8 md:pt-20 md:px-21 w-full h-60 md:items-end'>
                <div className='text-2xl md:text-4xl font-bold'>
                    <h2 className='capitalize md:leading-12'> work </h2>
                    <h2 className='capitalize md:leading-12'> studio </h2>
                    <h2 className='capitalize md:leading-12'> contact </h2>
                </div>
                <div className='text-lg md:text-2xl flex flex-col space-y-5 my-10 md:my-0'>
                    <p >Get industry insights and creative <br /> inspiration straight to your inbox.</p>
                    <input type="text" className='z-10 outline-none border-b-2 border-white md:w-100 pl-2 text-lg' placeholder='Email address' />
                </div>
            </div>

            <div className='pt-10 w-full h-fit'>
                <h2 className='text-6xl pt-20 md:pt-0 md:text-[19vw] leading-tight font-extrabold text-center'>Sundown</h2>
                <hr className='my-10 md:my-0' />
            </div>

            <div className='flex flex-col md:flex-row md:justify-between md:text-lg py-5 px-2'>
                <p> Copyright &copy; Sundown Studio </p>
                <p> Brooklyn, NY </p>
                <p> Instagram </p>
                <p> Linkedin </p>
            </div>


            {/* Animations */}
            <div className='-z-10 absolute top-[-50%] left-[-20%] w-[90%] h-[90%] bg-[#fe330a] blur-[50px] animate-shap1'></div>
            <div className='-z-10 absolute top-[-27%] right-[-27%] w-[70%] h-[90%] bg-[#fe330a] blur-[50px] animate-shap2'></div>
            
        </footer>
    )
}

export default Footer