"use client"

import React, { useState } from "react"
import "./Navbar.css"
import { BiMenuAltRight } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"

const Navbar = () => {
    const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
    const [navStyle, setNavStyle] = useState("");
    const { scrollYProgress } = useScroll();
    
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest > 0.2) {
            setNavStyle("sticky");
        } else {
            setNavStyle("");
        }
    });
    return (
        <div className={`n-wrapper ${navStyle}`}>
        
            {/* Desktop View */}
            <div className="container">
                <div className="n-container">
                    {/* left side */} 
                    <div className="n-logo">
                        <span>Company Name</span>
                    </div>

                    {/* right side */}
                    <div className="n-right">
                        <div className="n-menu">
                            <span>What We Do</span>
                            <span>How It Works</span>
                            <span>Service Area</span>
                            <span>Testimonials(*optional*)</span>
                        </div>
                        <div className="buttons">
                            <button>Get Quote</button>
                            <button>Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet View */}
            <div className="nm-container">
                {/* Logo */}
                <span>Company Name</span>

                {/* Menu icon */}
                {!mobileMenuOpened ? (
                    <BiMenuAltRight 
                        size={30} 
                        onClick={() => setMobileMenuOpened(true)}
                    />
                    ) : (
                    <RxCross2 
                        size={30} 
                        onClick={() => setMobileMenuOpened(false)} 
                    />
                )}

                {/* Mobile Menu */}
                <div 
                    className="nm-menu"
                    style={{transform: mobileMenuOpened && "translateX(0)"}}
                >
                    <span>About Us</span>
                    <span>What We Do</span>
                    <span>Service Area</span>
                    <span>Testimonials(*optional*)</span>
                    <div className="m-buttons">
                        <button>Get Quote</button>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
