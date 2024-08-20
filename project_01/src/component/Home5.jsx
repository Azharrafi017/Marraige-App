import React, { useState } from "react";
import "../css/Home5.css";
import Frame6 from "../Photos/Frame 6.png";
import Frame7 from "../Photos/Frame 7.png";
import Frame59 from "../Photos/Frame 59.png";
import marcs from "../Photos/marc-babin-aQWmCH_b3MU-unsplash 1.png";
import office from "../Photos/office.png";
import cake from "../Photos/cake.png";
import party from "../Photos/party.png";
import Home5_mini from "./Home5_mini";

const Home5 = () => {
  let [i, seti] = useState(0);
  const dot = [0, 1, 2, 3];
  const H3 = [
    "Wedding Planning",
    "Birthday Parties",
    "Corporate Events",
    "Private Parties",
  ];
  const P = [
    "Create the wedding of your dreams with our comprehensive planning tools.",
    "Plan memorable birthday parties with fun themes and activities.",
    "Organize seamless corporate events with professional management tools.",
    "Host amazing private parties with ease and style.",
  ];
  const image = [marcs, cake, office, party];
  return (
    <div>
      <div className=" high home5 ">
        <div className="home5-box-1">
          <img src={marcs} alt="not found" />
          <div className="home5-text">
            <h3 className="heading2">Wedding Planning</h3>
            <p className="font-style font-4">
              Create the wedding of your dreams with our comprehensive planning
              tools.
            </p>
          </div>
          <div className="circle-home5">
            <img src={Frame59} alt="not found" />
          </div>
        </div>

        <div className="home5-box-1">
          <img src={cake} alt="not found" />
          <div className="home5-text">
            <h3 className="heading2">Birthday Parties</h3>
            <p className="font-style font-4">
              Plan memorable birthday parties with fun themes and activities.
            </p>
          </div>
          <div className="circle-home5">
            <img src={Frame59} alt="not found" />
          </div>
        </div>
        <div className="home5-box-1">
          <img src={office} alt="not found" />
          <div className="home5-text">
            <h3 className="heading2">Corporate Events</h3>
            <p className="font-style font-4">
              Organize seamless corporate events with professional management
              tools.
            </p>
          </div>
          <div className="circle-home5">
            <img src={Frame59} alt="not found" />
          </div>
        </div>
        <div className="home5-box-1">
          <img src={party} alt="not found" />
          <div className="home5-text">
            <h3 className="heading2">Private Parties</h3>
            <p className="font-style font-4">
              Host amazing private parties with ease and style.
            </p>
          </div>
          <div className="circle-home5">
            <img src={Frame59} alt="not found" />
          </div>
        </div>
      </div>
      <div className="low ">
        <Home5_mini h3={H3[i]} p={P[i]} image={image[i]} />
      </div>
      <div className="low">
        <div className="slider">
          {dot.map((slide, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => {
                seti(slide);
              }}
              className={i === slide ? "blue-back" : "circle"}
            ></button>
          ))}
        </div>
      </div>
      <div className="slideImg low">
        <img
          onClick={() => {
            if (i <= 0) {
              seti(3);
            } else {
              seti(--i);
            }
          }}
          src={Frame6}
          alt="image not found"
        />
        <img
          onClick={() => {
            if (i >= 3) {
              seti(0);
            } else {
              seti(++i);
            }
          }}
          src={Frame7}
          alt="image not found"
        />
      </div>
      ;
    </div>
  );
};

export default Home5;
