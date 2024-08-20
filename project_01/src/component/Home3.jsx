import React from "react";
import Frame13 from "../Photos/Frame 13.png";
import Frame13responsive from "../Photos/Frame 13 -responsive.png";
import Framelow from "../Photos/Frame low.png";
import Frameup from "../Photos/Frame up.png";
import Frameresponsive from "../Photos/Frame-responsive.png";
import Frame15 from "../Photos/Frame 15.png";
import Frame15responsive from "../Photos/Frame 15-responsive.png";
import "../css/Home3.css";
const Home3 = () => {
  return (
    <div className="home3">
      <div className="box-1">
        <img className="high" src={Frame13} alt="not found" />
        <img className="low" src={Frame13responsive} alt="not found" />
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
          <div className="high img-high">
            <img src={Framelow} alt="not found" />
            <img src={Frameup} alt="not found" />
          </div>
          <img src={Frameresponsive} alt="not found" className="low" />
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
        <img className="high" src={Frame15} alt="not found" />
        <img className="low" src={Frame15responsive} alt="not found" />
        <div className="b1">
          <p className="heading1">Step 3:</p>
          <h3 className="heading2">Manage and Track</h3>
          <p className="heading3">
            Keep track of RSVPs, vendors, and schedules all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home3;
