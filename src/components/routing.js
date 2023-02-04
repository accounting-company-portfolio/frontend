import { Component } from "react";
//import Switch from "react-switch";
import {  Route, Routes } from "react-router-dom";
import Homepage from "../pages/Home/home.js";
import Services from "../pages/Services/services.js";
import News from "../pages/News/news.js";
import Contact from "../pages/Contact Us/contactUs.js";
import About from "../pages/About/about.js";
import Dashboard from "../pages/Dashboard/dashboard.js";

class Routing extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
     
    );
  }
}

export default Routing;
