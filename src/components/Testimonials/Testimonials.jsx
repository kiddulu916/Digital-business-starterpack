import React from 'react'
import SlickSlider from '../SlickSlider/SlickSlider'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='t-wrapper'>
        <div className="container">
            <div className="t-container">
                <div className="t-head">
                    <span className="tag">Testimonials</span>
                    <span className="title">Superior Cleaning with Gauranteed Customer Satisfaction</span>
                    <span className="des">What customers are sayin about us</span>
                </div>
            </div>
            
            {/* Slider */}
            <SlickSlider />

        </div>
    </div>
  )
}

export default Testimonials
