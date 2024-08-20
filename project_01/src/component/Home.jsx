import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import "../responsive.css";

import Home1 from "./Home1";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Dot from "./Dot";
import Home6 from "./Home6";
import Home7 from "./Home7";
import Footer from "./Footer";

const Home = () => {
  const ima = [1, 2, 3, 4, 5, 6];
  return (
    <div className="mainhtml">
      <Home1 />
      <Home2 />
      <Dot />
      <h3 className="h3-heading middle">
        HOW IT <span className="h3-heading blue">WORKS?</span>
      </h3>
      <Home3 />
      <h3 className="h3-heading hOME-4-HEADING middle">
        WHY <span className="h3-heading blue">CHOOSE</span> OUR APP?
      </h3>
      <Home4 />
      <h3 className="h3-heading middle  width-home5">
        OUR <span className="h3-heading blue">SERVICES</span>
      </h3>
      <Home5 />
      <Home6 />
      <Home7 />
      <Footer />
    </div>
  );
};

export default Home;
