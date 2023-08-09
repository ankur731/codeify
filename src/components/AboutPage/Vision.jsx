import React from 'react'
import "./Vision.css";

function Vision() {
    return (
        <div className='vision container'>
            <div className='row justify-content-between '>
                <div className='col col-xs-11 col-sm-11 col-lg-6 vision-content'>
                    <div className='content'>
                        <h2>Our Vision</h2>
                        <h5>Our vision is to be a leading provider of offshore
                            software development services by delivering high-quality
                            work to our clients. In addition, we strive to be a trusted
                            partner for organizations of all sizes, providing them with
                            the expertise they need to stay competitive in a rapidly
                            changing technological landscape.</h5>
                    </div>
                    <div className='content'>
                        <h2>Our Mission</h2>
                        <h5>Our mission is to help our clients fill the gap in their
                            engineering capacity, increase productivity, reduce the
                            cost of operations, and stay ahead of the competition.
                            We are committed to delivering software on time and
                            within a pre-defined budget, and we put efforts into
                            maintaining long-term relationships with our clients.</h5>
                    </div>
                </div>
                <div className='col col-xs-11 col-sm-11 col-lg-5 vision-img'>
                    <img src={require("../../images/vision.jpg")} alt='vision' />
                </div>
            </div>
        </div>
    )
}

export default Vision
