import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="contact-wrapper">
      <div className="container">
        <div className="contact-container">
          <div className="contact-head">
            <span className="title">Contact Us</span>
            <span className="text">
              We'd love to hear from you! Just fill out the form below with what
              your looking for and where you are located and we'll get back to
              you as soon as possible.
            </span>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Enter your name"
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
              />
              <label>Message</label>
              <textarea name="message" placeholder="Enter your message" />
              <input type="submit" value="Send" />
            </form>
          </div>
          <div className="text">
            <span className="text">
              Or call us at (916) [Insert Phone Number]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
