import React from "react";
import "./contactUs.css";
class Contact extends React.Component {
  state = {};
  render() {
    return (
      <div className="contactus">
        <div className="container">
          <div>
            <h3>Contact us</h3>
          </div>
          <div className="form">
            <form className="contact">
              <label for="name">Name</label>
              <input name="your name" type="text" id="name" required />
              <label for="email">Email</label>
              <input name="your email" type="email" id="email" required />
              <label for="message">message</label>
              <input name="message" type="text" id="message" required />
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
  }
}

export default Contact;
