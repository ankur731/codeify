import React from 'react';
import "./Summary.css";

const webSummary = {
  heading:"Trusted Web Application Development Company",
  content1:"As a leading web development company, we always create robust, secure, custom web applications with high scalability.According to the need of the product, we use open-source technology to develop a product with high-quality standards.We help you stand out in this digital world by providing bespoke web development solutions.",
  content2:"Codeify IT Services has been developing futuristic websites and web applications that take businesses to greater heights. Our highly skilled web developers adopted a customer-focused approach by upgrading themselves to the latest web technology like ReactJS,  Node.js, Laravel,  and many others."
}

const appSummary = {
  heading:"Trusted Application Development ",
  content1:"We are a Mobile App Development Company to Design & Develop Your Custom Mobile Application. Trusted Mobile Application Development Company.",
  content2:"Mobile app development is indeed nowadays necessary for all businesses. We, as a mobile application development company can provide high quality standard mobile apps of any category. We have worked with diverse brands, organizations, startups and individuals to create powerful apps from excellent ideas.",
  content3:"Our team of mobile app developers is capable of creating apps for multiple-platforms like iOS, Android and cross-platform solutions in Flutter, React Native & Ionic. Being one of the top-rated mobile application development companies in the USA and India, we have expertise in developing mobile app development solutions to meet your business requirements."
}

const softwareSummary = {
  heading:"Custom Software Development",
  content1:"Tailored custom software development solutions for your business. Trusted by some of the top companies to power their business with innovative and cost-effective custom software development services.",
  content2:"Get in touch with Codeify IT Service to develop the best and the most advanced custom software to drive your business efficiency and make a difference in the marketplace."
}

const digitalSummary = {
  heading:"Digital Marketing Services ",
  content1:"Helping Businesses create a solid digital presence with targeted, expert-led marketing services. Your One-Stop Digital Marketing Agency For All Needs.",
  content2:"Nowadays, the internet is full of similar websites and social media profiles with creative content. This makes it hard to get exposure for your digital profiles. At 3S IT Services, we offer 360° digital marketing services to help businesses get their global digital exposure.",
  content3:"etter creative content, better leads, better revenue conversions. We have a great reputation across the world as the top digital marketing company based in India and USA. Our team of proficient digital marketing professionals can meet all businesses’ marketing needs by communicating cognitively with clients to find the best-fit solution. With our suite of services, businesses can find the right target audience and improve their business conversion rate."
}

function Summary(props) {
  return (
    <div className='container summary'>
    {props.page==='web'&&<>
      <h1>{webSummary.heading}</h1>
      <h5>{webSummary.content1}</h5>
      <h5>{webSummary.content2}</h5>
      <h5>{webSummary.content3}</h5>
    </>}

    {props.page==='app'&&<>
      <h1>{appSummary.heading}</h1>
      <h5>{appSummary.content1}</h5>
      <h5>{appSummary.content2}</h5>
      <h5>{appSummary.content3}</h5>
    </>}

    {props.page==='software'&&<>
      <h1>{softwareSummary.heading}</h1>
      <h5>{softwareSummary.content1}</h5>
      <h5>{softwareSummary.content2}</h5>
      <h5>{softwareSummary.content3}</h5>
    </>}

    {props.page==='digital'&&<>
      <h1>{digitalSummary.heading}</h1>
      <h5>{digitalSummary.content1}</h5>
      <h5>{digitalSummary.content2}</h5>
      <h5>{digitalSummary.content3}</h5>
    </>}
    </div>
  )
}

export default Summary
