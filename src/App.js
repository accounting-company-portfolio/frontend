import React from "react";
import "./App.css";
import Nav from "./components/nav.js";
import Footer from "./components/footer/footer.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/home.js";
import ImageSlider from "./pages/Services/serviceApp.js";
import NewsItem from "./components/News/newsItem";
import ContactUs from "./pages/Contact Us/contactUs.js";
import About from "./components/About US/about";
import Dashboard from "./pages/Dashboard/dashboard.js";
import Messages from "./pages/Dashboard/message/message.js";
import Servicescard from "./pages/Services/servicescard.js";
import Servicecomponent from "./pages/Dashboard/servicecomponent/servicecomponent";
import Adminprofile from "./pages/Dashboard/admineditprofile/adminprofile";
import Login from "./pages/Login/login";
import Addadmin from "./pages/Dashboard/admineditprofile/addadmin.js";
import Whatsapp from "./components/waht";
import Maincontactus from "./pages/Contact Us/main-contact";
import Navbar from "./createadmin/dashHome";
import AddUser from "./createadmin/adduser";
import EditUser from "./createadmin/edituser";
import ViewUser from "./createadmin/viewuser";

import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="page_container">
        <Nav />

        <br></br>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ImageSlider />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact us" element={<ContactUs />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/card" element={<Servicescard />} />
          <Route path="/servicecomponent" element={<Servicecomponent />} />
          <Route path="/profile" element={<Adminprofile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/addadmin" element={<Addadmin />} />
          <Route path="/maincontact" element={<Maincontactus />} />
          <Route path="/news" element={<NewsItem />} />
          <Route path="/navb" element={<Navbar />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/edituser" element={<EditUser />} />
          <Route exact path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <div className="App"> */}
        {/* </div> */}
        <Footer />
        <Whatsapp />
      </div>
    );
  }
}

export default App;
