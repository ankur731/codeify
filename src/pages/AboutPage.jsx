import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import Cover from '../components/Service/Cover'
import Footer from '../components/LandingPage/Footer'
import Custom from '../components/AboutPage/Custom'
import Vision from '../components/AboutPage/Vision'
import Help from '../components/AboutPage/Help'

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Cover heading="About Us" content="We are a full fledge mobile and web app development company with a special focus on developing and delivering the
most robust and flexible custom software to clients of various business verticals."/>
      <Custom />
      <Vision />
      <Help />
      <Footer />
    </div>
  )
}

export default AboutPage
