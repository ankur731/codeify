import React from 'react'
import Lottie from 'lottie-react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
import { useNavigate } from 'react-router-dom';

function ServiceCard(props) {

  const navigate = useNavigate();

  function sendToSpecialService() {
    if(props.heading==='Website Development') {
      navigate("/service/websitedevelopment");
    } else if(props.heading==='App Development') {
      navigate("/service/appdevelopment");
    } else if(props.heading==='Software Development') {
      navigate("/service/softwaredevelopment");
    } else if(props.heading==='Digital Marketing') {
      navigate("/service/digitalmarketing");
    }
      
  }
  
  return (
    <div class="col-lg-6 col-md-6 mb-3 mt-4 service-col">
     <AnimationOnScroll offset={100} initiallyVisible={props.servicePage&&true} animateOnce={props.servicePage&&true}   animateIn="animate__zoomIn" animateOut="animate__zoomOut">
        <div class="card service-card" onClick={sendToSpecialService}>
            <h2>{props.heading}</h2>
            <h5>{props.content}</h5>
            <p>Discover more</p>
            <div className='service-img'>
            <Lottie animationData={props.data}/>
            </div>
        </div>
    </AnimationOnScroll>
    </div>
  )
}

export default ServiceCard
