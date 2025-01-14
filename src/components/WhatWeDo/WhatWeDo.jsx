"use client";

import React from 'react';
import Image from 'next/image';
import { features } from '@/src/utils/data';
import { motion } from 'framer-motion';
import { tagVariants, titleVariants, desVariants, containerVariants } from '@/src/utils/animations';
import "./WhatWeDo.css";

const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">

            {/* Head of Section */}
            <div className="wwd-head">
                <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={tagVariants}
                    className="tag"
                >
                    What We Do
                </motion.span>
                
                <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                    className="title"
                >
                    {" "}
                    Keeping your home clean so you can focus your time on what matters.
                </motion.span>
                
                <motion.span
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={desVariants}
                    className="des"
                >
                    Here's what we do so you don't have to.
                </motion.span>
            </div>

            {/* Two Blocks */}
            <div className="wwd-blocks">

                {/* First Block */}
                <div className="wwd-block">
                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="sec-title"
                    >
                        General Cleaning
                    </motion.span>
                    
                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="text"
                    >
                        Most common basic cleaning tasks.
                    </motion.span>
                    
                    <div className="block-features">
                        {
                            features.slice(0, 3).map((feature, i) => (
                                <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    className="block-feature" 
                                    key={i}
                                >
                                    <Image
                                        src={feature.icon}
                                        alt="feature"
                                        width={60}
                                        height={60}
                                    />
                                    <motion.span>{feature.title}</motion.span>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>

                {/* Second Block */}
                <div className="wwd-block">
                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="sec-title"
                    >
                        Deep Cleaning
                    </motion.span>
                    
                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="text"
                    >
                        More in-depth cleaning tasks.
                    </motion.span>
                    
                    <div className="block-features">
                        {
                            features.slice(3, 6).map((feature, i) => (
                                <motion.div 
                                    initial="offscreen"
                                    whileInView={"onscreen"}
                                    variants={containerVariants((i+1)*0.1)}
                                    className="block-feature" 
                                    key={i}
                                >
                                    <Image
                                        src={feature.icon}
                                        alt="feature"
                                        width={60}
                                        height={60}
                                    />
                                    <motion.span>{feature.title}</motion.span>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>                
            </div>

            {/* Support Block */}
            <div className="wwd-support">
                {/* left side*/}
                <div className="support-left">
                    <span className="sec-title">Services Details</span>
                    <span className="des">
                        The different service packs 
                        <div className="des">
                            and what they include. 
                        </div>
                        <div className='fine-print'>
                            <span className="sub-text">
                                (For pricing contact us for a quote)
                            </span>
                        </div>
                    </span>
                </div>

                {/* right side */}
                <div className="support-right">
                    <span className="text">Full-House Service: **Fill in for what you will include in this service pack**</span>
                    <span className="text">Deep-Cleaning Services: **Fill in for what you will include in this service pack**</span>
                </div>    
            </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
