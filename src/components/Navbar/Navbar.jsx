"use client"

import React, { useState } from "react"
import "./Navbar.css"
import { BiMenuAltRight } from "react-icons/bi"
import { RxCross2 } from "react-icons/rx"
import { motion, useMotionValueEvent, useScroll } from "framer-motion"
import { Link } from "react-scroll";
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
                            <Link to="h-wrapper" spy={true} smooth={true}>
                              <span>Home</span>
                            </Link>
                            <Link to="wwd-wrapper" spy={true} smooth={true}>
                              <span>What We Do</span>
                            </Link>
                            <Link to="hiw-wrapper" spy={true} smooth={true}>
                              <span>How It Works</span>
                            </Link>
                            <Link to="sa-wrapper" spy={true} smooth={true}>
                              <span>Service Area</span>
                            </Link> 
                        </div>
                        <div className="buttons">
                            <Link to="contact-wrapper" spy={true} smooth={true}>
                              <button>Contact Us</button>
                            </Link>

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
                    <Link to="h-wrapper" spy={true} smooth={true} onClick={() => setMobileMenuOpened(false)}>
                      <span>Home</span>
                    </Link>
                    <Link to="wwd-wrapper" spy={true} smooth={true} onClick={() => setMobileMenuOpened(false)}>
                      <span>What We Do</span>
                    </Link>
                    <Link to="hiw-wrapper" spy={true} smooth={true} onClick={() => setMobileMenuOpened(false)}>
                      <span>How It Works</span>
                    </Link>
                    <Link to="sa-wrapper" spy={true} smooth={true} onClick={() => setMobileMenuOpened(false)}>
                      <span>Service Area</span>
                    </Link>
                    <div className="m-buttons">
                        <Link to="contact-wrapper" spy={true} smooth={true} onClick={() => setMobileMenuOpened(false)}>
                          <button>Contact Us</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
