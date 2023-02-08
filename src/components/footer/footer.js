import React, { Component } from "react";
import  "./footer.css";
import logo from "./footerlogo.png";
import facebook from "./icon/facebook.png";
import instagram from "./icon/instagram.png"
import linkedin from "./icon/linkedin.png";
import twitter from "./icon/twitter.png";


class Footer extends Component {
    render() { 
      return (
        <div className="Footer">
         <footer className="footer">
          <div className="footercontainer">
            <div className="row">
              <div className="footer-col">
               <img src={logo} className="logo-footer" crossOrigin="anonymous" alt=""/>
              </div>
              <div className="footer-col">
                <h4>company</h4>
                <ul>
                  <li><a href="/">services</a></li>
                  <li><a href="/">About Us</a></li>
                  <li><a href="/">Contact Us</a></li>
                  <li><a href="/">News</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>project</h4>
                <ul>
                  <li><a href="/">text</a></li>
                  <li><a href="/">text</a></li>
                  <li><a href="/">text</a></li>
                  <li><a href="/">text</a></li>
                  <li><a href="/">text</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Address</h4>
                <ul>
                  <li><a href="/"><i className ="fa-solid fa-location-dot"></i>&nbsp; Text</a></li>
                  <li><a href="/">Text</a></li>
                  <li><a href="/">Text</a></li>
               
                </ul>
              </div>
              
           
            </div>
        <br/>
            <hr/>
            
            <div className="Copyright">
          
          <div className="social-links">
                  <a href="/"><img src={facebook} className="sociallogo" alt=""></img></a>
                  <a href="/"><img src={instagram} className="sociallogo" alt=""></img></a>
                  <a href="/"><img src={linkedin} className="sociallogo" alt=""></img></a>
                  <a href="/"><img src={twitter} className="sociallogo" alt=""></img></a>
                </div>
              <p>
                
          <strong>Financial & management services and consulting  &nbsp;</strong><span>  &nbsp;Copyright &copy; 2010-2023  Mehan Company S.L. All rights reserved.</span>
          
              </p>
            </div>
            {/*  */}
          </div>
        </footer>
        <script src="https://kit.fontawesome.com/56a9fd35a4.js" crossorigin="anonymous"></script>
        </div>
    )}
}
    





export default Footer;
  