import React from 'react'
import "./Help.css"

function Help() {
  return (
    <div className='vision container'>
    <div className='row justify-content-between '>
        <div className='col col-xs-11 col-sm-11 col-lg-5  vision-img'>
        <img src={require("../../images/vision.jpg")} alt='vision' />

           
        </div>
        <div className='col col-xs-11 col-sm-11 col-lg-6 vision-content'>
        <div className='content'>
                <h2>We help startups launch, grow and succeed fast</h2>
                <h5>We’re obsessive about knowledge transfer, so whenever we’ve developed a unique solution for your business, we’ll bring everything inhouse for you to control. Our leadership team has rich experience in their respective fields and lays out a strategic direction for the company’s growth and success. They take pride in our people’s success, achievements, and growth and ensure that the team is always motivated to deliver superior work quality to our clients.</h5>
            </div>
        </div>
    </div>
</div>
  )
}

export default Help
