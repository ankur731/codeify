import React from 'react'
import Navbar from '../components/LandingPage/Navbar'
import Hero from '../components/LandingPage/Hero'
import Features from '../components/LandingPage/Features'
import Services from '../components/LandingPage/Services'
import Stats from '../components/LandingPage/Stats'
import Why from '../components/LandingPage/Why'
import Testimonial from '../components/LandingPage/Testimonial'
import Faq from '../components/LandingPage/Faq'
import Need from '../components/LandingPage/Need'
import Footer from '../components/LandingPage/Footer'

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Stats />
      <Why />
      <Testimonial />
      <Faq />
      <Need />
      <Footer />
    </div>
  )
}

export default LandingPage
