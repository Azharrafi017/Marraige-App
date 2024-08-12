import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "../responsive.css";
import Links from "./FooterLinks";
const Home = () => {
  const [circle1, setcircle1] = useState(true);
  const [circle2, setcircle2] = useState(false);
  const [circle3, setcircle3] = useState(false);
  const [circle4, setcircle4] = useState(false);
  const [circle5, setcircle5] = useState(false);
  const [circle6, setcircle6] = useState(false);
  let [i, seti] = useState(0);
  const [circle, setcircle] = useState(0);
  const image = [
    "src/Photos/marc-babin-aQWmCH_b3MU-unsplash 1.png",
    "src/Photos/cake.png",
    "src/Photos/office.png",
    "src/Photos/party.png",
  ];
  const ima = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mainhtml">
      <div className="Home-1">
        <p className="font-style1">Plan Your Perfect Event Effortlessly</p>
        <h3 className="Home-1-font">
          From <span className="Home-1-font">weddings</span> to{" "}
          <span>birthday parties</span>, our app helps you manage every detail
          with ease.
        </h3>
        <button className="btn-1">Get Started</button>
      </div>
      <div className="Home-2">
        <img
          className="photo-2"
          src="src/Photos/Line 30.png"
          alt="image not found"
        />
        <p className="font-style3">
          NOW YOU CAN PLAN YOUE WEDDING WITH ZERO HASSLE
        </p>
        <div className="Home-2Arr">
          <img src="src/Photos/Arrow 3.png" alt="not found" />
          <btn className="Home-2-btn font-style1">Explore</btn>
        </div>
      </div>
      <div className="dot">
        <button className="circle"></button>
        <button className="circle"></button>
        <button className="circle"></button>
        <button className="circle"></button>
        <button className="circle"></button>
        <button className="circle"></button>
      </div>
      <h3 className="h3-heading middle">
        HOW IT <span className="h3-heading blue">WORKS?</span>
      </h3>

      <div className="home3">
        <div className="box-1">
          <img className="high" src="src/Photos/Frame 13.png" alt="not found" />
          <img
            className="low"
            src="src/Photos/Frame 13 -responsive.png"
            alt="not found"
          />
          <div className="b1">
            <p className="heading1">Step 1:</p>
            <h3 className="heading2">Create Your Event</h3>
            <p className="heading3">
              Start by creating an event profile with all the essential details.
            </p>
          </div>
        </div>
        <div className="box-2">
          <div className="image-2">
            <div className="high">
              <img src="src/Photos/Frame low.png" alt="not found" />
              <img src="src/Photos/Frame up.png" alt="not found" />
            </div>
            <img
              src="src/Photos/Frame-responsive.png"
              alt="not found"
              className="low"
            />
          </div>
          <div className="b1">
            <p className="heading1">Step 2:</p>
            <h3 className="heading2">Customize and Plan</h3>
            <p className="heading3">
              Choose themes, set budgets, and manage guest lists with our
              easy-to-use tools.
            </p>
          </div>
        </div>
        <div className="box-3">
          <img className="high" src="src/Photos/Frame 15.png" alt="not found" />
          <img
            className="low"
            src="src/Photos/Frame 15-responsive.png"
            alt="not found"
          />
          <div className="b1">
            <p className="heading1">Step 3:</p>
            <h3 className="heading2">Manage and Track</h3>
            <p className="heading3">
              Keep track of RSVPs, vendors, and schedules all in one place.
            </p>
          </div>
        </div>
      </div>
      <h3 className="h3-heading hOME-4-HEADING width-home4">
        WHY <span className="h3-heading blue">CHOOSE</span> OUR APP?
      </h3>
      <div className="home4">
        <div className="high">
          <div className="home4-I">
            <div className="home4-box1">
              <div className="home4-text">
                <h3 className="heading2">Comprehensive Planning Tools</h3>
                <p className="font-style ">
                  From budgeting to guest lists, we've got everything you need
                  to plan the perfect event.
                </p>
              </div>
              <div className="image">
                <img
                  src="src/Photos/Administrative Tools.png"
                  alt="not found"
                />
                <img src="src/Photos/Timeline Week.png" alt="not found" />
              </div>
            </div>
            <div className="home4-box2">
              <div className="home4-text">
                <h3 className="heading2">Customizable Themes</h3>
                <p className="font-style ">
                  FPersonalize your event with a variety of themes and
                  decorations.
                </p>
              </div>
              <div className="image">
                <img src="src/Photos/Color Dropper.png" alt="not found" />
                <img src="src/Photos/Paint Palette.png" alt="not found" />
              </div>
            </div>
          </div>
          <div className="home4-I">
            <div className="home4-box1 BORDER">
              <div className="home4-text">
                <h3 className="heading2">Vendor Management</h3>
                <p className="font-style ">
                  Easily find and manage vendors for all your event needs.
                </p>
              </div>
              <div className="image">
                <img
                  className=".image-project"
                  src="src/Photos/Project Management.png"
                  alt="not found"
                />
              </div>
            </div>
            <div className="home4-box2 BORDER">
              <div className="home4-text">
                <h3 className="heading2">Customizable Themes</h3>
                <p className="font-style ">
                  FPersonalize your event with a variety of themes and
                  decorations.
                </p>
              </div>
              <div className="image">
                <img
                  className="home4-img"
                  src="src/Photos/Available Updates.png"
                  alt="not found"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="low">
          <div className="">
            <div className="box1">
              <div className="home4-text">
                <h3 className="">Comprehensive Planning Tools</h3>
                <p className="">
                  From budgeting to guest lists, we've got everything you need
                  to plan the perfect event.
                </p>
              </div>
              <div className="home4-image">
                <img
                  className="img-1"
                  src="src/Photos/Administrative Tools.png"
                  alt="not found"
                />
                <img
                  className="img-1"
                  src="src/Photos/Timeline Week.png"
                  alt="not found"
                />
              </div>
            </div>
            <div className="box2">
              <div className="home4-text">
                <h3 className="">Vendor Management</h3>
                <p className="">
                  Easily find and manage vendors for all your event needs.
                </p>
              </div>
              <div className="home4-image">
                <img
                  className="img-2"
                  src="src/Photos/Project Management.png"
                  alt="not found"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="box3">
              <div className="home4-text">
                <h3 className="">Customizable Themes</h3>
                <p className="">
                  Personalize your event with a variety of themes and
                  decorations.
                </p>
              </div>
              <div className="home4-image" id="image4">
                <img
                  className="img-3"
                  src="src/Photos/Color Dropper.png"
                  alt="not found"
                />
                <img
                  className="img-3"
                  src="src/Photos/Paint Palette.png"
                  alt="not found"
                />
              </div>
            </div>
            <div className="box4">
              <div className="home4-text">
                <h3 className="">React-time Updatess</h3>
                <p className="">
                  Stay updated with real-time notifications and reminders.
                </p>
              </div>
              <div className="home4-image">
                <img
                  className="img-4"
                  src="src/Photos/Available Updates.png"
                  alt="not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="h3-heading hOME-4-HEADING width-home5">
        OUR <span className="h3-heading blue">SERVICES</span>
      </h3>
      <div className=" high home5 ">
        <div className="home5-box-1">
          <img
            src="src/Photos/marc-babin-aQWmCH_b3MU-unsplash 1.png"
            alt="not found"
          />
          <div className="home5-text">
            <h3 className="heading2">Wedding Planning</h3>
            <p className="font-style">
              Create the wedding of your dreams with our comprehensive planning
              tools.
            </p>
          </div>
          <div className="circle-home5">
            <img src="src/Photos/Frame 59.png" alt="not found" />
          </div>
        </div>

        <div className="home5-box-1">
          <img src="src/Photos/cake.png" alt="not found" />
          <div className="home5-text">
            <h3 className="heading2">Birthday Parties</h3>
            <p className="font-style">
              Plan memorable birthday parties with fun themes and activities.
            </p>
          </div>
          <div className="circle-home5">
            <img src="src/Photos/Frame 59.png" alt="not found" />
          </div>
        </div>
        <div className="home5-box-1">
          <img src="src/Photos/office.png" alt="not found" />
          <div className="home5-text">
            <h3 className="heading2">Corporate Events</h3>
            <p className="font-style">
              Organize seamless corporate events with professional management
              tools.
            </p>
          </div>
          <div className="circle-home5">
            <img src="src/Photos/Frame 59.png" alt="not found" />
          </div>
        </div>
        <div className="home5-box-1">
          <img src="src/Photos/party.png" alt="not found" />
          <div className="home5-text">
            <h3 className="heading2">Private Parties</h3>
            <p className="font-style">
              Host amazing private parties with ease and style.
            </p>
          </div>
          <div className="circle-home5">
            <img src="src/Photos/Frame 59.png" alt="not found" />
          </div>
        </div>
      </div>
      {/* home5 */}
      <div className="low home5">
        <div className="home5-box-1">
          <img src={image[i]} alt="image not found" />
          <div className="home5-text">
            <h3 className="">Wedding Planning</h3>
            <p className="">
              Create the wedding of your dreams with our comprehensive planning
              tools.
            </p>
          </div>
          <div className="circle-home5">
            <img src="src/Photos/Frame 59.png" alt="not found" />
          </div>
        </div>
      </div>
      <div className="low">
        <div className="dot slider">
          {image.map((slide, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => {
                seti(slideIndex);
              }}
              className={i === slideIndex ? "circle blue" : "circle"}
            ></button>
          ))}
        </div>
        <div className="slideImg">
          <img
            onClick={() => {
              if (i <= 0) {
                seti(3);
                setcircle(i);
              } else {
                seti(--i);
                setcircle(i);
              }
            }}
            src="src/Photos/Frame 6.png"
            alt="image not found"
          />
          <img
            onClick={() => {
              if (i >= 3) {
                seti(0);
                setcircle(i);
              } else {
                seti(++i);
                setcircle(i);
              }
            }}
            src="src/Photos/Frame 7.png"
            alt="image not found"
          />
        </div>
      </div>

      <div className="home6">
        <h3 className="h3-heading hOME-4-HEADING width-home5">
          WHAT OUR <span className="h3-heading blue">CUSTOMERS</span> SAY
        </h3>
        <div className="customer">
          <div>
            <img src="src/Photos/Frame 23.png" alt="not found" />
          </div>
          <div className="high">
            <img src="src/Photos/Frame 23.png" alt="not found" />
          </div>
          <div className="high">
            <img src="src/Photos/Frame 23.png" alt="not found" />
          </div>
        </div>
        <div className=" low dot customer-slider">
          {ima.map((slide, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => {
                seti(slideIndex);
              }}
              className={i === slideIndex ? "circle blue" : "circle"}
            ></button>
          ))}
        </div>
      </div>
      <div className="home7">
        <p className="font-style">Ready to Plan Your Perfect Event?</p>
        <h3 className="home7-heading">
          Sign up now and start planning with ease!
        </h3>
        <button className="random">Sign up Now</button>
      </div>
      <div className="footer">
        <div className="fbox1">
          <Link to="/" className="navbar-logo " style={{ color: "#ffffff" }}>
            cele<span>brato</span>
          </Link>
          <h3 className="font-style">Contact Information:</h3>
          <p className="footer-font">Email: support@example.com</p>
          <p className="footer-font">Phone: (123) 456-7890</p>
        </div>
        <div className="high box2 ">
          <h3 className="font-style">Quick Links:</h3>
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
          <h3 className="font-style">Support Links:</h3>
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
          <h3 className="font-style">Social Media Links:</h3>

          <img src="src/Photos/WhatsApp.png" alt="not found" />
          <img src="src/Photos/Facebook.png" alt="not found" />
          <img src="src/Photos/Instagram.png" alt="not found" />
        </div>

        <div className="low size">
          <Links />
        </div>
      </div>
    </div>
  );
};

// Home2

export default Home;
