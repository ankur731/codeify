import React from 'react'
import "./Faq.css";

import ControlledAccordions from './Accordian';
import { useNavigate } from 'react-router-dom';


function Faq() {
    const navigate = useNavigate();

    const sendToContact = ()=>{
        navigate("/contact")
    }
  return (
    <div style={{width:'100%', backgroundColor:"#f5f6f7"}}>
    <div className='faq container-lg py-5'>
        <div className='row mt-5 faq-row'>
            <div className='col-lg-5'>
                <div className='faq-left'>
                    <h1>Got Any Question ?</h1>
                    <button onClick={sendToContact} className='ask-btn'>ASK A QUESTION</button>
                </div>
            </div>
            <div className='col-lg-7'>
                {/* <Accordion /> */}
                <ControlledAccordions />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Faq
