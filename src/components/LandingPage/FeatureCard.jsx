import React from 'react'
import "./FeatureCard.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";

function FeatureCard(props) {
  return (
    <div class="col-lg-4 col-md-6 ">
    <AnimationOnScroll duration={props.duration} animateIn="animate__bounceInLeft" animateOut="animate__bounceOutRight">
        <div class="card feature-card">
          <h2>{props.heading}</h2>
        <h5>{props.content}</h5>
        </div>
    </AnimationOnScroll>
    </div>
  )
}

export default FeatureCard
