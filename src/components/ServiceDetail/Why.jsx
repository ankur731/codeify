import React from 'react'
import "./Why.css";
import MobileFirst from "../../assets/mobile-first.json";
import Responsive from "../../assets/responsive.json";
import Optimize from "../../assets/optimize.json"
import Hosting from "../../assets/hosting.json";
import Edit from "../../assets/edit.json"
import Support from "../../assets/support.json"
import WhyUsCard from './WhyUsCard';

const webWhyusCard = [
    {
        heading:"Mobile First Design",
        content:"We start building your site for mobile devices first, then we add on to it make tablet and desktop.",
        data:MobileFirst,
    },
    {
        heading:"Fully Responsive",
        content:"Your website will fill all mobile screen sizes, tablets, and desktop sizes so new clients access your site from anywhere.",
        data:Responsive,
    },
    {
        heading:"Optimization",
        content:"60% of all internet is on mobile devices, so we optimize your mobile to perform their best in search engines.",
        data:Optimize,
    },
    {
        heading:"Free Hosting", content:"Hosting fees are built right into the monthly payment",
        data:Hosting,
    },
    {
        heading:"Unlimited Edits",
        content:"Change anything you want at anytime and it will be done that day.",
        data:Edit,
    },
    {
        heading:"24*7 Service",
        content:"Call directly anytime day or night, no phone trees or automated responses.",
        data:Support,
    },
]

const appWhyusCard = [
    {
        heading:"Mobile First Design",
        content:"app We start building your site for mobile devices first, then we add on to it make tablet and desktop.",
        data:MobileFirst,
    },
    {
        heading:"Fully Responsive",
        content:"Your website will fill all mobile screen sizes, tablets, and desktop sizes so new clients access your site from anywhere.",
        data:Responsive,
    },
    {
        heading:"Optimization",
        content:"60% of all internet is on mobile devices, so we optimize your mobile to perform their best in search engines.",
        data:Optimize,
    },
    {
        heading:"Free Hosting", content:"Hosting fees are built right into the monthly payment",
        data:Hosting,
    },
    {
        heading:"Unlimited Edits",
        content:"Change anything you want at anytime and it will be done that day.",
        data:Edit,
    },
    {
        heading:"24*7 Service",
        content:"Call directly anytime day or night, no phone trees or automated responses.",
        data:Support,
    },
]

const softwareWhyusCard = [
    {
        heading:"Mobile First Design",
        content:"software We start building your site for mobile devices first, then we add on to it make tablet and desktop.",
        data:MobileFirst,
    },
    {
        heading:"Fully Responsive",
        content:"Your website will fill all mobile screen sizes, tablets, and desktop sizes so new clients access your site from anywhere.",
        data:Responsive,
    },
    {
        heading:"Optimization",
        content:"60% of all internet is on mobile devices, so we optimize your mobile to perform their best in search engines.",
        data:Optimize,
    },
    {
        heading:"Free Hosting", content:"Hosting fees are built right into the monthly payment",
        data:Hosting,
    },
    {
        heading:"Unlimited Edits",
        content:"Change anything you want at anytime and it will be done that day.",
        data:Edit,
    },
    {
        heading:"24*7 Service",
        content:"Call directly anytime day or night, no phone trees or automated responses.",
        data:Support,
    },
]

const digitalWhyusCard = [
    {
        heading:"Mobile First Design",
        content:"digital We start building your site for mobile devices first, then we add on to it make tablet and desktop.",
        data:MobileFirst,
    },
    {
        heading:"Fully Responsive",
        content:"Your website will fill all mobile screen sizes, tablets, and desktop sizes so new clients access your site from anywhere.",
        data:Responsive,
    },
    {
        heading:"Optimization",
        content:"60% of all internet is on mobile devices, so we optimize your mobile to perform their best in search engines.",
        data:Optimize,
    },
    {
        heading:"Free Hosting", content:"Hosting fees are built right into the monthly payment",
        data:Hosting,
    },
    {
        heading:"Unlimited Edits",
        content:"Change anything you want at anytime and it will be done that day.",
        data:Edit,
    },
    {
        heading:"24*7 Service",
        content:"Call directly anytime day or night, no phone trees or automated responses.",
        data:Support,
    },
]

function Why(props) {
    return (
        <div className='whyus container'>
            <h2>Why Us</h2>
            <h5>We are specialized in small business web design and development for clients anywhere. Every line of code is written by
                hand to ensure the best performance , which helps bring in more customers to your site and bring more revenue to your
                business</h5>
            <div className='row whyus-cards'>
        {props.page==='web'&&
            webWhyusCard.map((card)=>(
              <WhyUsCard heading={card.heading} content={card.content} data={card.data}/>

            ))}

        {props.page==='app'&&
            appWhyusCard.map((card)=>(
              <WhyUsCard heading={card.heading} content={card.content} data={card.data}/>

            ))}

        {props.page==='software'&&
            softwareWhyusCard.map((card)=>(
              <WhyUsCard heading={card.heading} content={card.content} data={card.data}/>

            ))}
        {props.page==='digital'&&
            digitalWhyusCard.map((card)=>(
              <WhyUsCard heading={card.heading} content={card.content} data={card.data}/>

            ))}


            

         
              
            </div>
        </div>
    )
}

export default Why
