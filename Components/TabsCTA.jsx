import React, { useState } from 'react'

const TabsCTA = () => {

    const [activetab, setActivetab] = useState(0);

    const tabs = [
        {
            id: 0,
            title: "Design",
            image: "https://sundown-ivory.vercel.app/page4-1.webp",
            description: "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
        },
        {
            id: 1,
            title: "Project",
            image: "https://sundown-ivory.vercel.app/page4-2.webp",
            description: "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
        },
        {
            id: 2,
            title: "Execution",
            image: "https://sundown-ivory.vercel.app/page4-3.webp",
            description: "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
        }
    ];


    return (
        <div className='w-full h-200 bg-black text-white rounded-2xl my-10  flex flex-col md:flex-row overflow-hidden'>
            <div className='w-full h-full  flex flex-wrap'>

                    <div className='w-150 flex flex-col justify-center px-10'>

                        {tabs.map((e, idx)=> {
                            return <div key={idx}>
                                <button className={`${e.id === activetab ? 'border-l-2 border-[#fd340c] text-[#fd340c]' : ''} pl-2 text-2xl md:text-7xl block w-40 cursor-pointer text-start`} onClick={() => setActivetab(e.id)}> {e.title} </button>
                            </div>
                        })}

                        <div className='my-7'>
                            <p>{tabs[activetab].description}</p>
                        </div>

                    </div>

                    <div className='flex-1'>
                        <img src={tabs[activetab].image} className='w-full h-full object-cover' />
                    </div>
            
                </div>
        </div>
    )
}

export default TabsCTA