import React, { useState } from "react";
import "../css/Dot.css";
const Dot = () => {
  const arr = [0, 1, 2, 3, 4, 5];
  const [k, setK] = useState(0);
  return (
    <div className="dot">
      {arr.map((elm, i) => (
        <button
          className={k === i ? " blue-back" : "circle"}
          key={i}
          onClick={() => {
            setK(i);
          }}
        ></button>
      ))}
    </div>
  );
};

export default Dot;
