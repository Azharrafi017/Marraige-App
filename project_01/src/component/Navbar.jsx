import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignLeft } from "react-icons/fi";

const Navbar = () => {
  const [isOpen,setisOpen]=useState(true)
  const [className,setclass]=useState("active")
  const toggleMenu=()=>{
    setisOpen(!isOpen)
    isOpen?setclass("responsive"):setclass("active")
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo ">
          cele<span>brato</span>
        </Link>
        <div className={isOpen?"menu-icon ":"hidden" }>
        <FiAlignLeft  onClick={toggleMenu}/>
        </div>
        <ul className={className}>
          <li className="nav-item">
            <Link to="/" className="nav-links font-style" onClick={toggleMenu} >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links font-style" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links font-style" onClick={toggleMenu} >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links font-style" onClick={toggleMenu} >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={!isOpen?"nav-logged font-style":"hidden" } onClick={toggleMenu}>
              Login
            </Link>
          </li>
        </ul>
        <Link to="/contact" className="nav-login" onClick={toggleMenu}>
              Login
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
