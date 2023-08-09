import React from 'react'

function TestimonialCard(props) {
  return (
    <div className='col-lg-11 '>
    <div className='testimonial-card'>
        <h2>{props.heading}</h2>
        <h5>{props.content}</h5>
        <div className='client'>
            <div>
                <h5>{props.clientName}</h5>
                <p>{props.clientDesignation}</p>
            </div>
            <div>
                <img className='client-img' src={props.img} alt='client' />
            </div>
        </div>
    </div>
</div>
  )
}

export default TestimonialCard
