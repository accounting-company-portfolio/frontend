import React, { useRef } from "react";
import "./contactUs.css";
import emailjs from "@emailjs/browser";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wb57obe",
        "template_9ryokvk",
        form.current,
        "mril4OUXRvwQpPCzM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contactus">
      <div className="container">
        <div>
          <h3>Contact us</h3>
        </div>
        <div className="form">
          <form className="contact" ref={form} onSubmit={sendEmail}>
            <label for="name">Name</label>
            <input name="your name" type="text" id="name" required />
            <label for="email">Email</label>
            <input name="your email" type="email" id="email" required />
            <label for="message">message</label>
            <textarea name="message" type="text" id="message" required />
            <button type="submit" value="Submit" id="btn">
              Send your message
            </button>
          </form>
        </div>
      </div>
      <div className="maps">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=13dBE989HrUCM2vVH8I4QuxygL5Q&hl=en_US&ehbc=2E312F"
          width="750"
          height="765"
          style={{ border: 0 }}
          alt="map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
