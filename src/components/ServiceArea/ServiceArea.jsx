"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { serviceArea } from '@/src/utils/data';
import { containerVariants, tagVariants, titleVariants } from '@/src/utils/animations';
import './ServiceArea.css'

const ServiceArea = () => {
  return (
    <div className='sa-wrapper'>
      <div className="container">
        <div className="sa-container">
        
            {/* Left Side */}
            <div className="sa-left">
                <div className="head">
                    <motion.span 
                        variants={tagVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className="tag"
                    >
                        Where We Serve
                    </motion.span>
                    <motion.span 
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className="title"
                    >
                        General Service Area
                    </motion.span>
                </div>

                {/* Features */}
                <div className="sa-features">
                    {
                        serviceArea.map((feature, i) => (
                            <motion.div 
                                variants={containerVariants(i * 0.05 + 1)} 
                                initial="offscreen"
                                whileInView={"onscreen"}
                                className="sa-feature" 
                                key={i}
                            >
                                <span className="des">{feature.title}</span>
                                <br />
                                <span className="text">{feature.des}</span>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
            
            {/* Right Side */}
            <div className="sa-map">
                <img 
                    src="map.png" 
                    alt="Service Area Map"
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceArea
