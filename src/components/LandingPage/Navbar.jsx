import React, { useState } from 'react'
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

function Navbar(props) {

  const [navbar, setNavbar] = useState(false);

  const navigate = useNavigate();

  const toggleNavbar = () => {
    // console.log("clicked")
    setNavbar(!navbar);
  }

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
    <nav >
      <img id='logo' className='logo-img img-fluid img-responsive' src={require("../../images/codeify.png")} alt='logo' />
      <div className='hamburger'>
        {navbar ? <CloseIcon fontSize='large' onClick={toggleNavbar} /> : <MenuIcon fontSize='large' onClick={toggleNavbar} />}
      </div>
      <ul id="nav-bar" className={navbar ? 'active' : 'act'} >
        <li>
          <p  onClick={sendToHome}>Home</p>
        </li>
        <li>
          <p  onClick={sendToAbout}>About</p>
        </li>
        <li className='dropdown'>
          <p onClick={sendToService}>Services <KeyboardArrowDownOutlinedIcon fontSize='large'/></p>
          <div className="dropdown-content">
            <h5 onClick={sendToWeb}>Website Development</h5>
            <h5 onClick={sendToApp}>App Development</h5>
            <h5 onClick={sendToSoft}>Software Development</h5>
            <h5 onClick={sendToDm}>Digital Marketing</h5>
          </div>
        </li>
        <li>
          <button onClick={sendToContact} className='talk-btn btn'>Let's talk</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
