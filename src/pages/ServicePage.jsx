import React from 'react'
import Services from '../components/LandingPage/Services'
import Cover from '../components/Service/Cover'
import Footer from '../components/LandingPage/Footer'
import Navbar from '../components/LandingPage/Navbar'

function ServicePage() {
  return (
    <div>
    <Navbar />
      <Cover heading="Services We Offer " />
      <Services servicePage={true}/>
      <Footer />
    </div>
  )
}

export default ServicePage
