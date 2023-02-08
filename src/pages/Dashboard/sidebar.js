import { Component } from "react";
import "./dashboard.css";
import Prof from "./img/prof.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faPieChart,
  faSignOut,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";

class Sidebar extends Component {
  render() {
    return (
<sidebar className="sidebar-container">
<div className="profile-head">
  <div class="logo-image">
    <img src={Prof} alt="" className="prof" />
  </div>
  <span class="logo_name">Admin profile</span>
</div>
<hr />
<div class="menu-items">
  <ul class="nav-links">
    <li>
      <Link to="/dashboard" >
        <FontAwesomeIcon icon={faDashboard} />
        &nbsp;&nbsp;
        <span class="link-name">Dahsboard</span>
        </Link>
    </li>
    <li className="link-enter">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} className="dash-icon" />
        &nbsp;&nbsp;
        <span class="link-name">Home</span>
     </Link>
    </li>
    <li className="link-enter"> <Link
          to="./servicescomponent/servicecomponent.js">
      <FontAwesomeIcon icon={faUser} />
      &nbsp;&nbsp;
          Info
        </Link>
     
    </li>
    <li className="link-enter">
      <a href="/servicecomponent">
        <FontAwesomeIcon icon={faPieChart} />
        &nbsp;&nbsp;
        <span class="link-name">Services</span>
      </a>
    </li>
    <li>
      <Link to ="/messages">
        <FontAwesomeIcon icon={faEnvelope} />
        &nbsp;&nbsp;
        <span class="link-name">Messages</span>
      </Link>
    </li>
    <li>
      <a href="/">
        <FontAwesomeIcon icon={faUser} />
        &nbsp;&nbsp;
        <span class="link-name">Share</span>
      </a>
    </li>
  </ul>
  <hr />
  <ul class="logout-mode">
    <li>
      <a href="/">
        <FontAwesomeIcon icon={faSignOut} />
        &nbsp;&nbsp;
        <span class="link-name">Logout</span>
      </a>
    </li>
  </ul>
</div>
</sidebar>
    )}}
    export default Sidebar