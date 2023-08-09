import React from 'react'
import "./Why.css";
import Lottie from 'lottie-react'


function WhyUsCard(props) {
    return (
        <div className='col col-lg-4'>
            <div className='card whyus-card'>
                <div className='whyus-card-img'>
                    <Lottie animationData={props.data} />
                </div>
                <h2>{props.heading}</h2>
                <h5>{props.content}</h5>
            </div>
        </div>
    )
}

export default WhyUsCard
