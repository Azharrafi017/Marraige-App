import React from "react";
import Line30 from "../Photos/Line 30.png";
import Arrow3 from "../Photos/Arrow 3.png";
import "../css/Home2.css";
const Home2 = () => {
  return (
    <div className="Home-2">
      <img className="photo-2" src={Line30} alt="image not found" />
      <p className="font-style3">
        NOW YOU CAN PLAN YOUE WEDDING WITH ZERO HASSLE
      </p>
      <div className="Home-2Arr">
        <img src={Arrow3} alt="not found" />
        <btn className="Home-2-btn ">Explore</btn>
      </div>
    </div>
  );
};

export default Home2;
