import React from 'react'
import "./Footer.css";
import { useNavigate } from 'react-router-dom';

function Footer() {

    const navigate = useNavigate();

    const sendToHome = () => {
        navigate("/");
      }
      const sendToService = () => {
        navigate("/service");
      }
      const sendToAbout = () => {
        navigate("/about");
      }
      const sendToContact = () => {
        navigate("/contact");
      }
    
      const sendToWeb = ()=>{
        navigate("/service/websitedevelopment")
      }
      const sendToApp = ()=>{
        navigate("/service/appdevelopment")
      }
      const sendToSoft = ()=>{
        navigate("/service/softwaredevelopment")
      }
      const sendToDm = ()=>{
        navigate("/service/digitalmarketing")
      }

    return (
        <div style={{ width: "100%", backgroundColor: "#01112b" }}>
            <div className='container-lg footer-div'>
                <div className='row'>
                    <div className='col-lg-4 '>
                        <h2>CODEIFY IT SERVICE PVT LTD</h2>
                    </div>
                    <div className='col-lg-2 footer-item' >
                        <h5>Links</h5>
                        <div className='footer-list'>
                            <p onClick={sendToHome}>Home</p>
                            <p onClick={sendToAbout}>About</p>
                            <p onClick={sendToService}>Service</p>
                            <p onClick={sendToContact}>Contact Us</p>
                        </div>
                    </div>
                    <div className='col-lg-2 footer-item' >
                        <h5>Service</h5>
                        <div className='footer-list'>
                            <p onClick={sendToWeb}>Website <br/> Development</p>
                            <p onClick={sendToApp}>App <br/> Development</p>
                            <p onClick={sendToSoft}>Software <br/> Development</p>
                            <p onClick={sendToDm}>Digital <br/> Marketing</p>
                        </div>
                    </div>
                    <div className='col-lg-4 footer-address' >
                        <h5>Plot 15B &work Neelam
                            Chowk Ajronda Metro
                            station</h5>
                            <h6>Codeify@gmail.com</h6>
                            <h6>996515451</h6>
                            <div>

                            </div>
                    </div>
                </div>
                <hr style={{marginTop:"25px"}}/>
                <p className='copyright'>Copyright reserved &copy; Codeify It Service Pvt Ltd</p>
            </div>

        </div>
    )
}

export default Footer
