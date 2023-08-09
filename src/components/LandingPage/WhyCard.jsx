import React from 'react'
import Lottie from 'lottie-react'
import "./Why.css";


function WhyCard(props) {
  return (
    <div className='col-sm-6 col-md-4  align-items-center justify-content-center' style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"15px"}}>
    <div className='card whyCard ' >
      <div className='whyCard-img'>
        <Lottie animationData={props.data} />
      </div>
      <div className='whyCard-content'>
      <h2>{props.heading}</h2>
      <h5>{props.content}</h5>
      </div>
    </div>
  </div>
  )
}

export default WhyCard
