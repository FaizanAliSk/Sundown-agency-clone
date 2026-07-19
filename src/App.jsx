import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import BlurAnimation from '../Components/BlurAnimation'
import Video from '../Components/Video'
import ContentSlider from '../Components/ContentSlider'
import CallToAction from '../Components/CallToAction'
import FeatureProjects from '../Components/FeatureProjects'
import TabsCTA from '../Components/TabsCTA'
import ConpanyCards from '../Components/ConpanyCards'
import Footer from '../Components/Footer'

const App = () => {
  return (
    <>
    <div className='px-3 sm:px-5 md:px-10'>
      <Navbar />
      <Hero />
      <BlurAnimation />
      <Video />
      <ContentSlider />
      <CallToAction />
    </div>
      <FeatureProjects />
      <div className='px-3 sm:px-5 md:px-10'>
        <TabsCTA />
        <ConpanyCards />
      </div>
        <Footer />
    </>
  )
}

export default App