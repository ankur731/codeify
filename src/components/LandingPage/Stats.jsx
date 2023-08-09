import React from 'react'
import "./Stats.css"
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Stats() {

  

   
   
      
   

    return (
        <div style={{ backgroundColor: "#f5f5f7", width: "100%" }}>
            <div className='stats-section container-lg mt-5'>
                <div className='stats-div'>
                <h1 >We believe that technology can
                    change the world</h1>
                <h5>That's why we re committed to delivering innovative IT solutions to bussinesses
                    of all sizes. Our team of experinced professionals is dedicated to helping you
                    achieve your goals and thrive in a rapidly evolving digital landscape.</h5>
                </div>
                <div className='stats'>
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                {({ isVisible }) => (
                    <>
                    <div className='stat'>
                     <h2> {isVisible ?  <CountUp enableScrollSpy={true} scrollSpyDelay={500}  duration={4} end={100}  onEnd={({ pauseResume, reset, start, update }) => start()} />: '100'}+</h2>
                        <h5>Successful Projects</h5>
                    </div>
                
                    <div className='stat'>
                    <h2>{isVisible ? <CountUp enableScrollSpy={true} scrollSpyDelay={500}   duration={4} end={98}  onEnd={({ pauseResume, reset, start, update }) => start()} />: '98'}%</h2>
                        <h5>Client Satisfaction</h5>
                    </div>
                    <div className='stat'>
                        <h2>{isVisible ? <CountUp enableScrollSpy={true} scrollSpyDelay={500}   duration={4} end={32}  onEnd={({ pauseResume, reset, start, update }) => start()} />: '32'}+</h2>
                        <h5>Dedicated Team Member</h5>
                    </div>
                    </>
                    )}
                    </VisibilitySensor>
                </div>
            </div>
        </div>
    )
}

export default Stats
