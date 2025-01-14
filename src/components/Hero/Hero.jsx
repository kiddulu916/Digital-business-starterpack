"use client";

import React from 'react'
import EmailBox from '../EmailBox/EmailBox'
import './Hero.css'
import { HeroData } from '@/src/utils/data'
import { motion, transform } from 'framer-motion'

const Hero = () => {
    const variants = (delay) => ({
        initial : {
            y: "18rem"
        },
        animate : {
            y: "0rem",
            transition: {
                type: "spring",
                damping: 25,
                duration: 2.5,
                delay
            }
        }
    });

    const imgVariants = () => ({
        initial: {
            y: "18rem",
            position: "absolute",
            top: "2.25rem",
            left: "-1.5rem",
            scale: 0.95
        },
        animate: {
            y: "0rem",
            transition: {
                type: "spring",
                duration: 2,
                stiffness: 30,
            },
        },
    });

  return (
    <div className="h-wrapper">
        <div className="container">
            <img 
                className="h-arrow" 
                src="hero/hero-arrow.png/" 
                alt="arrow in backdrop" 
            />
            <div className="h-container">
                
                {/* Left Side */}
                <div className="h-left">
                    <div className="image-row">
                        {
                            HeroData.slice(0, 3).map((cleaning, i) => (
                                <div className="cleaning-pill" key={i}>
                                    <motion.div  
                                        initial={"initial"}
                                        animate={"animate"}
                                        variants={variants(cleaning.delay)}
                                        style={{backgroundColor: cleaning.bg}}
                                        className="cleaning-pill-bg" 
                                    >
                                        
                                        <motion.img
                                            initial={"initial"}
                                            animate={"animate"}
                                            variants={imgVariants()}
                                            src={cleaning.src} 
                                            alt={cleaning.src} 
                                        />
                                    </motion.div>
                                </div>
                            ))
                        }         
                    </div>
                    <div className="image-row">
                        {
                            HeroData.slice(3, 6).map((cleaning, i) => (
                                <div className="cleaning-pill" key={i}>
                                    <motion.div 
                                        initial={"initial"}
                                        animate={"animate"}
                                        variants={variants(cleaning.delay)}
                                        className="cleaning-pill-bg" 
                                        style={{backgroundColor: cleaning.bg}}
                                    >
                                        <motion.img 
                                            initial={"initial"}
                                            animate={"animate"}
                                            variants={imgVariants()}
                                            src={cleaning.src} 
                                            alt={cleaning.src} 
                                        />
                                    </motion.div>
                                </div>
                            ))
                        }            
                    </div>
                </div>

                {/* Right Side */}
                <div className="h-right">
                    <div className="h-title">
                        <span>Never Think</span>
                        <span>About Cleaning</span>
                        <span>Your Home Again</span>
                    </div>

                    <div className="h-description">
                        Professional cleaning services for your home and office.
                        We are here to help you keep your place clean and tidy.
                    </div>

                    <EmailBox />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
