import React from 'react'
import "./Hero.css"
import Lottie from 'lottie-react'
import animationData from "../../assets/animation_lkxq6cwq.json"

function Hero() {
  return (
    <div style={{width:"100%", backgroundColor:"#061231"}}>
    <div className='hero-section container-lg'>
      <div className='row justify-content-center'>
        <div className='col-xs-11 col-sm 12 col-md-6 hero-left '>
          <div className='hero-content'>
            <h1>YOUR BEST<br />
              IT PARTNERS</h1>
            <h5>We are here to help our clients by providing
              them the best ever mobile and web apps for
              their business and helping them in booming
              their revenue.  </h5>
          </div>
        </div>
        <div className='col-xs-11 col-sm 12 col-md-6 hero-right'>
        <div className='hero-img'>
          <Lottie animationData={animationData}/>
          {/* <img className='heroImg img-fluid ' src={require("../../images/hero.png")} alt='hero' /> */}
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
