import React from "react";
import Frame59 from "../Photos/Frame 59.png";
const Home5_mini = ({ image, h3, p }) => {
  return (
    <div style={{ width: "100vw" }}>
      <div className="home5-box-1">
        <img src={image} alt="image not found" />
        <div className="home5-text">
          <h3 className="">{h3}</h3>
          <p className="">{p}</p>
        </div>
        <div className="circle-home5">
          <img src={Frame59} alt="not found" />
        </div>
      </div>
    </div>
  );
};

export default Home5_mini;
