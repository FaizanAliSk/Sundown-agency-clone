import React, { useState } from 'react'
import { tabs } from '../src/assets/assets';

const TabsCTA = () => {
    
    const [activetab, setActivetab] = useState(0);


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