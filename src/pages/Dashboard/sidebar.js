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
  <div className="logo-image">
    <img src={Prof} alt="" className="prof" />
  </div>
  <span className="logo_name">Admin profile</span>
</div>
<hr />
<div className="menu-items">
  <ul className="nav-links">
    <li>
      <Link to="/dashboard" >
        <FontAwesomeIcon icon={faDashboard} />
        &nbsp;&nbsp;
        <span className="link-name">Dahsboard</span>
        </Link>
    </li>
    <li className="link-enter">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} className="dash-icon" />
        &nbsp;&nbsp;
        <span className="link-name">Home</span>
     </Link>
    </li>
    <li className="link-enter"> <Link
          to="/profile">
      <FontAwesomeIcon icon={faUser} />
      &nbsp;&nbsp;
          Info
        </Link>
     
    </li>
    <li className="link-enter">
      <a href="/servicecomponent">
        <FontAwesomeIcon icon={faPieChart} />
        &nbsp;&nbsp;
        <span className="link-name">Services</span>
      </a>
    </li>
    <li>
      <Link to ="/messages">
        <FontAwesomeIcon icon={faEnvelope} />
        &nbsp;&nbsp;
        <span className="link-name">Messages</span>
      </Link>
    </li>
    <li>
      <a href="/">
        <FontAwesomeIcon icon={faUser} />
        &nbsp;&nbsp;
        <span className="link-name">Share</span>
      </a>
    </li>
  </ul>
  <hr />
  <ul className="logout-mode">
    <li>
    <Link to="/">
        <FontAwesomeIcon icon={faSignOut} />
        &nbsp;&nbsp;
        <span className="link-name">Logout</span>
      </Link>
    </li>
  </ul>
</div>
</sidebar>
    )}}
    export default Sidebar