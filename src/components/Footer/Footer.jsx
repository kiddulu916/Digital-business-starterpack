import React from "react";
import EmailBox from "../EmailBox/EmailBox";
import "./Footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="container">
        <div className="f-container">
          <span className="title">Make Your Appointment Today</span>
          <EmailBox />

          <hr />
          <div className="f-menu">
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

          <hr />
          <span className="text">Made with ❤️ By Kiddulu</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
