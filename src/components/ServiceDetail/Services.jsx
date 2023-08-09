import React from 'react'
import "./Services.css";

const Webservices = {
  heading: "Cutting-edge Web App Development Services One Needs For Growing Business",
  content1: "Codeify IT Services Pvt Ltd offers high-quality web app development services by keeping targeted customers in mind for startups, mid sized companies, and enterprises. As a reputed web development company in India, we have a dedicated team of web developers who can work with the latest technology and you can hire web developers for your project needs.",
  content2: "We are a renowned custom web app development company, offering a wide range of web development services that cater to all your business needs:",
  items: [
    "Website Design and Development",
    "Web Portal Development",
    "Custom Application Development",
    "Ecommerce Development",
    "CMS Development",
    "ERP Solutions",
    "Maintenance and Support"
  ]
}
const Appservices = {
  heading: "End-to-End Mobile App Development Services for iOS, Android and Cross-platform",
  content1: "We have been providing world-class mobile app development services for Startups, mid-scale businesses, and enterprises since 2011. Our highly skilled mobile app developers will work on transforming your app idea into an innovative and secure mobile application.",
  content2: "Whether you require native mobile apps or cross-platform apps, our superior mobile app development services are designed to deliver cutting-edge mobility solutions tailored to your business needs. As a leading mobile app development company in USA and India, 3S IT Services offers a complete range of mobile application development services to the clients worldwide:",
  items: [
    "Mobile App UI/UX Design",
    "Native App Development",
    "Cross-platform App Development",
    "Progressive Web App Development",
    "Enterprise Mobility Solutions",
    "Wearable App Development",
    "IoT App Development",
    "Maintenance and Support"
  ]
}
const Softwareservices = {
  heading: "Codeify Software Testing and QA Services",
  // content2: "We are a renowned custom web app development company, offering a wide range of web development services that cater to all your business needs:",
  items: [
    "Functional Testing",
    "Security Testing",
    "Compatibility Testing",
    "Performance Testing",
    "Usability Testing",
    "Mobile App Testing",
  ]
}
const Digitalservices = {
  // heading: "Cutting-edge Web App Development Services One Needs For Growing Business",
  // content1: "Codeify IT Services Pvt Ltd offers high-quality web app development services by keeping targeted customers in mind for startups, mid sized companies, and enterprises. As a reputed web development company in India, we have a dedicated team of web developers who can work with the latest technology and you can hire web developers for your project needs.",
  // content2: "We are a renowned custom web app development company, offering a wide range of web development services that cater to all your business needs:",
 
}


function Services(props) {
  return (
    <div className='services container'>
      {props.page === "web" && <>
        <h2>{Webservices.heading}</h2>
        <h5>{Webservices.content1}</h5>
        <h5>{Webservices.content2}</h5>
        {/* <li>{Softwareservices.items[0]}</li> */}
        <ul>
          {Webservices.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </>
      }
      {props.page === "app" && <>
        <h2>{Appservices.heading}</h2>
        <h5>{Appservices.content1}</h5>
        <h5>{Appservices.content2}</h5>
        {/* <li>{Softwareservices.items[0]}</li> */}
        <ul>
          {Appservices.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </>
      }

      {props.page === "software" && <>
        <h2>{Softwareservices.heading}</h2>
        <h5>{Softwareservices.content1}</h5>
        <h5>{Softwareservices.content2}</h5>
        {/* <li>{Softwareservices.items[0]}</li> */}
        <ul>
          {Softwareservices.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </>
      }

      {props.page === "digital" && <>
        <h2>{Digitalservices.heading}</h2>
        <h5>{Digitalservices.content1}</h5>
        <h5>{Digitalservices.content2}</h5>
        {/* <li>{Softwareservices.items[0]}</li> */}
        {/* <ul>
          {Digitalservices.items.map((item) => (
            <li>{item}</li>
          ))}
        </ul> */}
      </>
      }
    </div>
  )
}

export default Services
