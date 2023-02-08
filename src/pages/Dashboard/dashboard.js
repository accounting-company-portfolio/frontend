import { Component } from "react";
import "./dashboard.css";

import Sidebar from "./sidebar";
class MainDash extends Component {
  render() {
    return (
      <div className="page_container">

      <div className="container">
      <div class="top">
          <i class="uil uil-bars sidebar-toggle"></i>

          <div class="search-box">
            <i class="uil uil-search"></i>
            <input type="text" placeholder="Search here..." />
          </div>

          <img src="images/profile.jpg" alt="" />
        </div>
        <div className="maindash">
          
         <Sidebar/>
       </div>
      </div>
      </div>
    );
  }
}

export default MainDash;
