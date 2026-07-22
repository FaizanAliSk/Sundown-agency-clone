import React from 'react'

const BlurAnimation = () => {
    return (

        <div className="-z-10 sm:flex justify-end absolute  md:top-150 right-0">
            <div
                className="w-100 md:w-200 h-50 sm:h-100 bg-[#fd340c] rounded-tl-[50%] rounded-bl-[50%] flex justify-center items-center gap-5 blur-[20px]"
            >
                <div
                    className="w-[40%] h-[60%] rounded-full bg-[#fd340c] animate-ani1"
                ></div>

                <div
                    className="w-[40%] h-[60%] rounded-full bg-[#fd340c] animate-ani2"
                ></div>
            </div>
        </div>

    )
}

export default BlurAnimation