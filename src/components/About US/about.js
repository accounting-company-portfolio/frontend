import React from 'react'
import 'swiper/swiper-bundle.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './about.css'
import about_image1 from './images/aboutsection.jpeg'
import { faAdjust,  faAreaChart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = () => {
  return (
    <div className="page_container">
    <div className="wrapp1">
      <div className="heading1">
        <h1>about us</h1>
      </div>
      <div className="space1"></div>
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      {/* about section */}
      <section className="about1">
        <div className="image1">
          <img src={about_image1} alt="" crossOrigin="anonymous" />
        </div>

        <div className="content1">
          <h3>why choose us?</h3>
          <p classname="para1">
            Mehan international network is made up of experienced and trusted
            advisors from independent member firms, sharing their expertise and
            experience.
          </p>
          <p className='para1'>
            The Mehan network collaborates to deliver solutions in a timely and
            professional manner, capitalizing on the firm strength and ability
            to offer globally relevant advice, grounded in local knowledge.
          </p>
          <div className="icons-container1">
            <div className="icons">
            <FontAwesomeIcon icon={faAdjust} className="para"/>

              <span>top destinations</span>
            </div>
            <div className="icons">
              <i className="fas fa-hand-holding-usd"></i>
              <span>affordable price</span>
            </div>
            <div className="icons">
            <FontAwesomeIcon icon={faAreaChart} className="para"/>
              <span>24/7 guide service</span>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}

      <div className="space1"></div>
     
      <div className="space1"></div>
   </div>
    </div>
  )
}

export default About
