import React, { useState } from "react";
import "../css/Home6.css";
import Customer from "./Customer.jsx";
import Dot from "./Dot.jsx";
const Home6 = () => {
  const ima = [0, 1, 2, 3, 4, 5];
  const [k, setK] = useState(0);
  return (
    <div className="home6">
      <h3 className="h3-heading middle ">
        WHAT OUR <span className="h3-heading blue">CUSTOMERS</span> SAY
      </h3>
      <div className="customer-rating">
        <Customer classx="lower" />
        <Customer classx="high" />
        <Customer classx="high" />
      </div>
      <div className="low customer-dot">
        {ima.map((elm, i) => (
          <button
            onClick={() => {
              setK(i);
            }}
            className={k === i ? " blue-back" : "circle"}
            key={i}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Home6;
