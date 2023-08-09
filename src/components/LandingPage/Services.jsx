import React from 'react'
import "./Services.css";
import ServiceCard from './ServiceCard';
import websiteAnimationData from "../../assets/website_dev.json"
import appAnimationData from "../../assets/mobile_dev.json"
import softwareAnimationData from "../../assets/software_dev.json"
import digitalMarketing from "../../assets/digital_marketing.json"

function Services(props) {
  return (
    <div className='services-section container'>
        {!props.servicePage&&<h1>What We Do Best </h1>}
        <div className='row mt-5 justify-content-between ' >
       <ServiceCard heading={["Website", <br/>, "Development"]} content="Migrations, plugin & theme development, site
optimization, and more." data={websiteAnimationData} servicePage={props.servicePage}/>
       <ServiceCard heading={["App", <br/>, "Development"]} content="Migrations, plugin & theme development, site
optimization, and more." data={appAnimationData} servicePage={props.servicePage}/>
       <ServiceCard heading={["Software", <br/>, "Development"]} content="Migrations, plugin & theme development, site
optimization, and more." data={softwareAnimationData} servicePage={props.servicePage}/>
       <ServiceCard heading={["Digital", <br/>, "Marketing"]} content="Migrations, plugin & theme development, site
optimization, and more." data={digitalMarketing} servicePage={props.servicePage}/>
        </div>
    </div>
  )
}

export default Services
