import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';


const ConpanyCards = () => {

    let companycard = [
        {
            image: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15ff_Nike.svg',
            desc: 'Retained Production support across retail and events in NY, CHI, LA. Creative Design, Design Management, Production/Project Management, and execution of work from concept to installation across the Country'
        },
        {
            image: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1600_Converse.svg',
            desc: 'Creative Concepting, Design, Design Management, Project Management, and execution of work from concept to installation across the Country. Cross functional communication and management of third party partners.'
        },
        {
            image: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fd_Arc%E2%80%99teryx.svg',
            desc: 'Production and design along with install oversight and execution support for the SoHo store opening on Broadway St, New York. Also working on creative and production work for a new store opening in Glendale, California.'
        },
        {
            image: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b15fe_Hunter.svg',
            desc: 'Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York, including activations in Women’s, Men’s and Kid’s zones. Thirty-five (35) additional smaller take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization events in stores across winter 2022'
        },
        {
            image: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1601_MediaLink.svg',
            desc: 'Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding Identity, Assets, and Digital Content, Design, Production design, Production oversight and Installation of client activations for IBM, Delta, Instacart, and more.'
        },
        {
            image: 'https://assets-global.website-files.com/64d3dd9edfb41666c35b15d4/64d3dd9edfb41666c35b1602_AfterPay.svg',
            desc: 'Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders, Production design, Production/Partner oversight and creation of a two (2) story pop-up for Afterpay’s clients such as Crocs, JD Sports, Container Store, & Revolve.'
        }








    ]

    return (

        <div className='my-20'>

            <div className='flex gap-2 items-center pl-5 my-10'>
                <div className='w-2 h-2 bg-[#fd340c] rounded-full'></div>
                <h2 className='text-md uppercase'>who we work with</h2>
            </div>

            <Swiper
                spaceBetween={50}
                breakpoints={{
                    0: {
                        slidesPerView: 1.1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {companycard.map((e, idx) => {
                    return <SwiperSlide>
                        <div className='w-90 md:w-100 px-10 border-l border-gray-500' key={idx}>
                            <div className='mb-5'>
                                <img src={e.image} className='w-30' />
                            </div>
                            <div>
                                <p className='text-gray-700 text-sm'>{e.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                })}

            </Swiper>
        </div>

    )
}

export default ConpanyCards