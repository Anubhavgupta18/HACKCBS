import React from 'react'
import MainNavbar from './MainNavbar'
import '../App.css'
import image from '../assets/Capture1.PNG'
import logo from '../assets/urban-928.gif'
const Home = () => {
  return (
    <div className="row">
      <MainNavbar />
      
      <div className='col-md-6'>
        <img src={image} className='bgimage' alt="" />
      </div>

      <div className='col-md-6'>
        <span id='homeContent'>
          Diagnosis is not the end,<br />but the beginning of practice. <br />
        </span>
        <span id='homeContent2'>
          Not Feeling Well?
        </span>
        <img src={logo} alt="Error loading gif" id='gif' />
        <span id='homeContent3'>
         <br /> Get a FREE self diagnosis test by sitting at the comfort of your home.
        </span>
      </div>
    </div>
    
  )
}

export default Home