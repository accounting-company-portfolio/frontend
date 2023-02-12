import { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

import what from "../images/what.png";
class Whatsapp extends Component {
  render() {
    return (
        <div className="whatsapp-icon">
        <Link to="/dashboard">
        <img src={what} alt="logo" className="whatsappIcon" />

        </Link>

    </div>
  );
}
}
export default Whatsapp;