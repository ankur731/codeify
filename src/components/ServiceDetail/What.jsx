import React from 'react'
import "./What.css"


const webWhat = [
  {
    heading: "Front-End Web Development",
    content: "Front-end or client-side development is the practice of managing everything that users visually see first in their application or browser."
  },
  {
    heading: "Back-End Web Development",
    content: "Back-end or server-side development is responsible for managing data to ensure everything on the client side actually works."
  }
]
const appWhat = [
  {
    heading: "Native App Development",
    content: "Native mobile apps are developed for specific mobile OS such as iOS or Android and users can access them from dedicated app stores."
  },
  {
    heading: "Cross-platform App Development",
    content: "Cross-platform mobile apps are developed to function for multiple mobile platforms like iOS, Android, etc. without changing the codebase."
  }
]
const softwareWhat = [
  {
    heading: "Software Testing Services",
    content: "Quality assurance to ensure high quality and reliability of software products using a multitude of software testing methods from unit testing to overall regression testing that maximizes performance enhances scalability and maintains the top-notch quality of products."
  },
  {
    heading: "QA Automation Services",
    content: "Expedite your quality assurance testing method by implementing a large number of functions that encompass test automation planning, tools analysis, maintenance, and implementation of test scripts to accelerate overall test coverage with utmost quality."
  },
 
 
]
const digitalWhat = [
  {
    heading: "Search Engine Optimization",
    content: "Achieve your top SERP position on highly used search engines, including Google, Bing, etc., with SEO best practices (On Page + Off Page) and solutions offered by SEO experts at 3S IT Services."
  },
  {
    heading: "Pay Per Click",
    content: "Maximize your returns on paid ad campaigns, strategically led by SEO experts with a decade of experience in the industry. Inquire today to get a quick quote for your right-fit PPC campaign from 3S IT Services."
  },
  {
    heading: "Social Media Marketing",
    content: "Get expert content creators’ help to create attractive social media post copies, reach new target audiences, impress them, optimize social media accounts, and boost your sales with our social media marketing impact services for all platforms."
  },
  {
    heading: "Content Writing and Marketing",
    content: "Today, content is king. Get expert industry writers’ help to draft your data-driven, story-telling marketing copies to drive maximum digital traffic to your website and social media profiles and boost sales."
  },
  {
    heading: "Social Media Advertising",
    content: "Hire our creative content creators and ad-campaign managers to strategically plan your social media promotions through targeted paid marketing campaigns to quickly boost your social media reach, profile impressions, and thus, sales."
  },
]


function What(props) {
  return (
    <div className='container what'>
      <h1>What We Do ?</h1>
      <div className='what-content'>
      {props.page==="web"&&
        webWhat.map((data) => (
          <>
            <h2>{data.heading}</h2>
            <h5>{data.content}</h5>
          </>
        ))}

      {props.page==="app"&&
        appWhat.map((data) => (
          <>
            <h2>{data.heading}</h2>
            <h5>{data.content}</h5>
          </>
        ))}

      {props.page==="software"&&
        softwareWhat.map((data) => (
          <>
            <h2>{data.heading}</h2>
            <h5>{data.content}</h5>
          </>
        ))}

      {props.page==="digital"&&
        digitalWhat.map((data) => (
          <>
            <h2>{data.heading}</h2>
            <h5>{data.content}</h5>
          </>
        ))}

      </div>
    </div>
  )
}

export default What
