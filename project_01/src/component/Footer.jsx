import React from "react";
import "../css/Footer.css";
import WhatsApp from "../Photos/WhatsApp.png";
import Facebook from "../Photos/Facebook.png";
import Instagram from "../Photos/Instagram.png";
import { Link } from "react-router-dom";
import Links from "./FooterLinks";
const Footer = () => {
  return (
    <div className="footer">
      <div className="fbox1">
        <Link to="/" className="navbar-logo nva" style={{ color: "#ffffff" }}>
          cele<span className="nva">brato</span>
        </Link>
        <h3 className=" footer-fbox1">Contact Information:</h3>
        <div className="fbox1-p">
          <p className="footer-font">Email: support@example.com</p>
          <p className="footer-font">Phone: (123) 456-7890</p>
        </div>
      </div>
      <div className="high box2 ">
        <h3 className="footer-fbox1">Quick Links:</h3>
        <ul>
          <li>
            <Link to="/" className="link-style footer-font">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="link-style footer-font">
              Browse Events
            </Link>
          </li>
          <li>
            <Link to="/" className="link-style footer-font">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="link-style footer-font">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" className="link-style footer-font">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className="box3 high">
        <h3 className="footer-fbox1">Support Links:</h3>
        <ul>
          <li>
            <Link to="/" className="link-style footer-font">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="link-style footer-font">
              Browse Events
            </Link>
          </li>
          <li>
            <Link to="/" className="link-style footer-font">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/" className="link-style footer-font">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/" className="link-style footer-font">
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <div className=" high box4 ">
        <h3 className="footer-fbox1">Social Media Links:</h3>

        <img src={WhatsApp} alt="not found" />
        <img src={Facebook} alt="not found" />
        <img src={Instagram} alt="not found" />
      </div>

      <div className="low size">
        <Links />
      </div>
    </div>
  );
};

export default Footer;
