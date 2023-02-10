import { Component } from "react";
import "./dashboard.css";
import Adminprofile from "./admineditprofile/adminprofile.js";
class MainDash extends Component {
  render() {
    return (
      <div className="page_container">

      <div className="container">
       

          <img src="images/profile.jpg" alt="" />
        </div>
        <div className="maindash">
          
         
      
      </div>
      < Adminprofile/>
      </div>
    );
  }
}

export default MainDash;
