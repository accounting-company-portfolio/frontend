import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "../pages/Home/home.js";
import ImageSlider from "../pages/Services/serviceApp.js";
import News from "../pages/News/news.js";
import Contact from "../pages/Contact Us/contactUs.js";
import About from "../pages/About/about.js";
import Dashboard from "../pages/Dashboard/dashboard.js";
import Messages from "../pages/Dashboard/message/message.js";
import Servicescard from "../pages/Services/servicescard.js";
import Servicecomponent from "../pages/Dashboard/servicecomponent/servicecomponent";
import Adminprofile from "../pages/Dashboard/admineditprofile/adminprofile";
import Login from "../pages/Login/login";
import { AnimatePresence } from "framer-motion";
function Animatedroutes() {
  const location = useLocation;
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ImageSlider />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/card" element={<Servicescard />} />
          <Route path="/servicecomponent" element={<Servicecomponent />} />
          <Route path="/profile" element={<Adminprofile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
export default Animatedroutes;
