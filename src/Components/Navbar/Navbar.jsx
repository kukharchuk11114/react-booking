import {React, useState} from 'react'
import './navbar.css'
import './navbar.scss'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {

  // code to toggle/show navBar
const [active, setActive] = useState('navBar')
const showNav = () => {setActive('navBar activeNavbar')}

// code to close navBar
const closeNav = () => {setActive('navBar')}

  return (
    <section className='navBarSection'>
      <div className="header">
        <div className="logoDiv">
          <a href="#" className='logo'>
            <h1 className='flex'><MdOutlineTravelExplore className='icon'/>Lil Co.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className='navList flex'>
            <li className='navItem'>
              <a href="#" className='navLink'> Home</a>
            </li>
            <li className='navItem'>
              <a href="#" className='navLink'> Products</a>
            </li>
            <li className='navItem'>
              <a href="#" className='navLink'> Resources</a>
            </li>
            <li className='navItem'>
              <a href="#" className='navLink'> Contact</a>
            </li>
            <li className='navItem'>
              <a href="#" className='navLink'> Blog</a>
            </li>

            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">Login</a>
              </button>
              <button className='btn SignBtn'>
                <a href="#">Sign Up</a>
              </button>
            </div>
          </ul>

          <div onClick={closeNav} className="closeNavbar">
          <IoMdCloseCircleOutline className='icon'/>

          </div>

          
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>

      </div>
    </section>
  )
}

export default Navbar