import { useRef } from "react"

const ContentSlider = function () {
    
    return (
        <div className="overflow-hidden pt-5 pb-7 md:py-30">
  <div className="flex w-max whitespace-nowrap uppercase items-center font-bold text-[8vw] md:text-[10vw] animate-slider1">
    
    {/* First */}
    <span className="mx-8">Contents</span>
    <span className="mx-4 md:mx-8 w-10 md:w-20 h-10 md:h-20 rounded-full bg-[#fd340c]"></span>
    <span className="mx-8">Environments</span>
    <span className="mx-4 md:mx-8 w-10 md:w-20 h-10 md:h-20 rounded-full bg-[#fd340c]"></span>
    <span className="mx-8">Experiences</span>
    <span className="mx-4 md:mx-8 w-10 md:w-20 h-10 md:h-20 rounded-full bg-[#fd340c]"></span>

    {/* Duplicate */}
    <span className="mx-8">Contents</span>
    <span className="mx-4 md:mx-8 w-10 md:w-20 h-10 md:h-20 rounded-full bg-[#fd340c]"></span>
    <span className="mx-8">Environments</span>
    <span className="mx-4 md:mx-8 w-10 md:w-20 h-10 md:h-20 rounded-full bg-[#fd340c]"></span>
    <span className="mx-8">Experiences</span>
    <span className="mx-4 md:mx-8 w-10 md:w-20 h-10 md:h-20 rounded-full bg-[#fd340c]"></span>

  </div>
</div>
    )
}

export default ContentSlider