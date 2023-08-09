import React from 'react'
import "./Need.css";
import { useNavigate } from 'react-router-dom';

function Need() {
  const navigate = useNavigate();
  
  const sendToContact = () => {
    navigate("/contact");
  }
  return (
    <div style={{width:"100%", backgroundColor:"#11112b"}}>
        <div className='container-lg need-div'>
            <h2>NEED IT SOLUTIONS ?</h2>
            <h2>Let's start now</h2>
            <button onClick={sendToContact} className='contact-btn'>Contact Us</button>
        </div>
    </div>
  )
}

export default Need
