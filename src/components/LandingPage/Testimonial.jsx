import React from 'react'
import "./Testimonial.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestimonialCard from './TestimonialCard';

function Testimonial() {
    const responsive = {

        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className='testimonial-section'>
            <div className='container-lg testimonial'>
                <h2 className='mb-5'>Client Stories</h2>
                <div className='row mt-5'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        responsive={responsive}
                        infinite={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        // removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                       
                      <TestimonialCard heading="Amazing " content="Codeify IT Service Pvt Ltd agve us the peace of mind we
                                    needed to focus on our bussiness. They took the time to
                                    understand our unique needs and created a solution that
                                    protected our sensitive data and ensured compliance
                                    with industry regulations" clientName="Tom Cruise" clientDesignation="XYZ Corp"  img="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        
                      <TestimonialCard heading="Highly Recommended " content="Codeify IT Service Pvt Ltd agve us the peace of mind we
                                    needed to focus on our bussiness. They took the time to
                                    understand our unique needs and created a solution that
                                    protected our sensitive data and ensured compliance
                                    with industry regulations" clientName="Tom Cruise" clientDesignation="XYZ Corp"  img="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        
                      <TestimonialCard heading="Best Service " content="Codeify IT Service Pvt Ltd agve us the peace of mind we
                                    needed to focus on our bussiness. They took the time to
                                    understand our unique needs and created a solution that
                                    protected our sensitive data and ensured compliance
                                    with industry regulations" clientName="Tom Cruise" clientDesignation="XYZ Corp"  img="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                        
                       
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
