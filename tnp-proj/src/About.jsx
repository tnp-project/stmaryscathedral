import React from 'react'
import "./css/about.css"
import pic1 from "./assets/images/pic1.jpg";

const About = () => {
  return (
    <div className='about-body'>
      <div className="about-container">
        <div className="about-text">
          <h2>Welcome to Our Church</h2>
          <p>
            St. Mary's Jacobite Syrian Cathedral, Pallikara, is a spiritual home for all who seek peace and connection with God.
            Founded with a strong tradition and deep faith, our church has grown into a vibrant and welcoming community.
          </p>
          <p>
            We offer regular services, community outreach programs, and a place of comfort for everyone.
            Our mission is to serve with love, worship with passion, and grow together in Christ.
          </p>
          <p>
            Whether you're new in town or exploring your faith, you're always welcome at our church.
          </p>
        </div>
        <div className="about-image">
          <img src={pic1} alt="Church" />
        </div>
      </div>
    </div>
  )
}

export default About;
