import React from 'react'
import Cover from '../components/Service/Cover'
import Navbar from '../components/LandingPage/Navbar'
import Footer from '../components/LandingPage/Footer'
import Summary from '../components/ServiceDetail/Summary'
import What from '../components/ServiceDetail/What'
import Services from '../components/ServiceDetail/Services'
import Why from '../components/ServiceDetail/Why'




function ServiceDetailPage(props) {
    return (
        <div>
            <Navbar />
            {props.page==='web'&&
            <Cover heading="Website Development" />
            }
            {props.page==='app'&&
            <Cover heading="App Development" />
            }
            {props.page==='software'&&
            <Cover heading="Software Development" />
            }
            {props.page==='digital'&&
            <Cover heading="Digital Marketing" />
            }


          
            <Summary page={props.page}/>
            <What page={props.page}/>
            <Services page={props.page}/>
            <Why page={props.page}/>
         

            <Footer />
        </div>
    )
}

export default ServiceDetailPage
