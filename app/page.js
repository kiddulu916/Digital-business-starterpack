"use client";

import Navbar from "@/src/components/Navbar/Navbar";
import Hero from "@/src/components/Hero/Hero";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import WhatWeDo from "@/src/components/WhatWeDo/WhatWeDo";
import OurDiff from "@/src/components/OurDiff/OurDiff";
import HowItWorks from "@/src/components/HowItWorks/HowItWorks";
import ServiceArea from "@/src/components/ServiceArea/ServiceArea";
import { motion, useAnimation } from 'framer-motion';
import Testimonials from "@/src/components/Testimonials/Testimonials";
import Footer from "@/src/components/Footer/Footer";
import Contact from "@/src/components/Contact/Contact";
import "./page.css";

export default function Home() {
  const controls = useAnimation();
  
  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      <Hero />
      <BrandingVideo />
      <WhatWeDo />
      
      <motion.div
        onViewportEnter={() => 
          controls.start({
            backgroundColor: "var(--secondary-color)",
          })
        }
        onViewportLeave={() => 
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{amount: 0.4}}
      >
        <OurDiff />
      </motion.div>
      
      <HowItWorks />

      <motion.div
        onViewportEnter={() =>
          controls.start({
            backgroundColor: "var(--primary-color)",
          })
        }
        onViewportLeave={() =>
          controls.start({
            backgroundColor: "white",
          })
        }
        viewport={{ amount: 0.4 }}
      >
        <ServiceArea />
      </motion.div>
      
      <Contact />
      <Footer />
    </motion.div>
  );
}
