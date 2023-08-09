import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact container-lg'>
        <h1>Let's talk about your ideas.</h1>
        <h5>We have flexible project models for organizations of all sizes. Tell
us about your goals and we’ll tell you how we can help.</h5>
        <div>
            <label>Name</label>
            <input type='text' placeholder='Jane Doe'/>
        </div>
    </div>
  )
}

export default Contact
