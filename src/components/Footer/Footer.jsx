import React from 'react'
import EmailBox from '../EmailBox/EmailBox'
import './Footer.css'

const Footer = () => {
  return (
    <div className='f-wrapper'>
        <div className="container">
            <div className="f-container">
              <span className="title">Make Your Appointment Today</span>
              <EmailBox />
              
              <hr />
              <div className="f-menu">
                <span>Home</span>
                <span>What We Do</span>
                <span>How It Works</span>
                <span>Service Area</span>
                <span>Testimonials</span>
              </div>

              <hr />
              <span className="text">Made with ❤️ By Kiddulu</span>
            </div>
        </div>
    </div>
  )
}

export default Footer