import React from 'react'
import "./Features.css";
import FeatureCard from './FeatureCard';

function Features() {
  return (
    <div style={{backgroundColor:"#f5f5f7", width:'100%'}}>
    <div className='features container'>
        <div className='row mb-5'>
            <div className='col-sm-12 col-md-12 col-lg-6'>
                <h1>We’re about so much
more than websites</h1>
            </div>
            <div className='col-sm-12 col-md-12 col-lg-6'>
                <h5>We’re more than platforms, plugins, and themes. We’re
a performance-centered web agency that cares about
understanding your business needs. We approach
every project with a unique performance mindset,
crafting customized digital experiences that delight
you, your users, and your team.</h5>
            </div>
        </div>
        <div className='row  spacing-2 justify-content-between featured-card-section'>
        <FeatureCard heading="Page Speed" duration={0.5} content="How quickly can you deliver a
digital experience to your users?"/>
        <FeatureCard heading="Delightful Outcomes" duration={1} content="How quickly can you deliver a
digital experience to your users?"/>
        <FeatureCard heading="Reliability" duration={1.5} content="How quickly can you deliver a
digital experience to your users?"/>
        
            
        </div>
    </div>
    </div>
  )
}

export default Features
