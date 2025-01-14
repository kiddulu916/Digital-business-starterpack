"use client";

import React from 'react'
import { hitFeatures } from '@/src/utils/data'
import { motion } from 'framer-motion'
import { 
    tagVariants, 
    titleVariants, 
    desVariants, 
    containerVariants 
} from '@/src/utils/animations';
import './HowItWorks.css'
import EmailBox from '../EmailBox/EmailBox';

const HowItWorks = () => {

    const featureVariants = {
        offscree: {
            scale: 0.5
        },
        onscreen: {
            scale: 1,
            transition: {
                type: "spring",
                delay: 1.5
            },
        },   
    }

  return (
    <div className='hiw-wrapper'>
        <div className="container">
            <div className="hiw-container">
                
                {/* Head */}
                <div className="hiw-head">
                    <motion.span 
                        variants={tagVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className="tag">
                            How it works
                    </motion.span>
                    <motion.span 
                        variants={titleVariants}
                        initial="offscreen"
                        whileInView={"onscreen"}
                        className="title">
                            Get A Quote & Schedule Your Service Today
                    </motion.span>
                </div>

                <div className="hiw-features">
                    {
                        hitFeatures.map((feature, i) => (
                            <motion.div 
                                variants={featureVariants} 
                                initial="offscreen"
                                whileInView={"onscreen"}
                                className="hiw-feature" 
                                key={i}
                            >
                            
                                {/* Left side */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{
                                        opacity: 1,
                                        x: 0,
                                        transition: {
                                            type: "easeIn",
                                            duration: 1,
                                            delay: 0.7
                                        }
                                    }}
                                    className="detail"
                                >
                                    <span className="des">0{i+1}</span>
                                    <span className="sec-title">{feature.title}</span>
                                    <span className="text">{feature.des}</span>
                                </motion.div>

                                {/* Right side */}
                                <div className="icon">
                                    <img
                                        src={feature.icon}
                                        alt="feature"
                                        width={128}
                                        height={128}
                                        style={{translate: "50% 0rem"}}
                                    />
                                </div>
                            </motion.div>
                        ))
                    }
                </div>
                <div className="hiw-emailBox">
                    <div className="title">
                        Get A Quote Today!
                    </div>
                    <EmailBox />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks
