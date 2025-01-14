import React from 'react'
import { ourDiffFeatures } from '@/src/utils/data'
import { motion } from 'framer-motion';
import Image from 'next/image'
import { containerVariants, desVariants, tagVariants, titleVariants } from '@/src/utils/animations';
import './OurDiff.css'

const OurDiff = () => {
  return (
    <div className="od-wrapper">
        <div className="container">
            <div className="od-container">
                
                {/* Head */}
                <div className="od-head">
                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={tagVariants}
                        className="tag"
                    >
                        Our Difference
                    </motion.span>
                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={titleVariants}
                        className="title"
                    >
                        Quality & Flexibility,
                        <br />at A Fair Price
                    </motion.span>
                    <motion.span 
                        initial="offscreen"
                        whileInView={"onscreen"}
                        variants={desVariants}
                        className="text"
                    >
                        Our mission is to provide exceptional, eco-friendly, and personalized cleaning solutions that transform homes into healthier, happier spaces.
                        We are dedicated to exceeding expectations through meticulous attention to detail, pet-safe products, and unparalleled customer care, all while fostering sustainability and community connection. 
                        With every clean, we aim to create not just spotless homes, but peace of mind for the families we serve.
                    </motion.span>
                </div>

                {/* features */}
                <div className="od-features">
                    {
                        ourDiffFeatures.map((feature, i) => (
                            <motion.div 
                                variants={containerVariants((i + 1) * 0.1)}
                                initial="offscreen"
                                whileInView={"onscreen"}
                                key={i} 
                                className="od-feature"
                            >
                                <Image 
                                    src={feature.icon}
                                    alt="feature"
                                    width={128}
                                    height={128}
                                />
                                <motion.span className="sec-title">{feature.title}</motion.span>
                                <motion.span className="text">{feature.des}</motion.span>
                            </motion.div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurDiff
