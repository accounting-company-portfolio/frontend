import React, { Component } from 'react'
import './home.css'
import videoBg from './video_homepage.mp4'
// import Nav from "../../components/navbar/nav.js";

class HomePage extends Component {
  render() {
    return (
      <div className="page_container">
        <div className="home-video">
      <div className="video-container">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay={true} loop={true} muted={true} />

        <div className="content">
         <div className='p1'> <h1 className='p1'>Welcome To Me'han </h1>
          
          </div>
        </div>
        <br />
        <div className="content-text1">
          <br />
          <h2>
            <em>Mehan consulting</em> is a leading Omani consulting firm with its origins
            in Muscat. Its consulting focus and core competencies lies in the
            areas of business advisory, public finance management , taxation
            ,technical consultancy and training / development.
          </h2>
          <br />
        </div>
        <br></br>
      </div>
      </div>
      </div>
    )
  }
}

export default HomePage
