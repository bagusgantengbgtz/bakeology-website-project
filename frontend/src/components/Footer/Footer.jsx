import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" className="logo" />
            <p>At Bakeology, baking is more than just a craft—it’s our passion. We blend the finest ingredients with a touch of creativity to bring you desserts that are as delightful to look at as they are to taste. From our oven to your!</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+62-852-1104-1554</li>
                <li>contact@bakeology.com</li>
            </ul>
         </div>
        </div>
        <hr />
        <p className="footer-copyright"> Copyright 2025 © Bakeology.com - All right Reserved</p>
    </div>
  )
}

export default Footer