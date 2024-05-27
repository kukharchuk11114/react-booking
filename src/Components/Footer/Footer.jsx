import React from 'react'
import './footer.scss'
import { GiPlanetConquest } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className='logo flex'>
            <h1 className='flex'> 
            <GiPlanetConquest className='icon'/>
            Lil Co.
            </h1>
            </a>
          </div>

          <div className="socials flex">
          <FaFacebook className='icon'/>
          <FaTwitter className='icon'/>
          <FaInstagramSquare className='icon'/>
          </div>
        </div>  

        <div className="footerLinks">
          <span className="linkTitle">
            Informations
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel </a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle">
            Contact Us
          </span>
          <span className="phone">+48 444 444 444</span>
          <span className="email">lilkuk@gmail.com</span>
        </div>
          
      </div>
    </div>
  )
}

export default Footer