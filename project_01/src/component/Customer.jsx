import React from "react";
import avataar from "../Photos/avataar.png";
import StarRatings from "react-star-ratings";
const Customer = ({ classx }) => {
  return (
    <div className={classx}>
      <div className="customer">
        <div className="customer-up">
          <img src={avataar} alt="not found" />
          <div className="customer-text">
            <h4>Sarah K.</h4>
            <div className="height">
              <StarRatings
                rating={3}
                starRatedColor="#E2C971"
                numberOfStars={5}
                starEmptyColor="#DADADA"
                name="rating"
                starDimension="0.9em"
                starSpacing="0.2em"
              />
            </div>
            <div className="mid">
              <StarRatings
                rating={3}
                starRatedColor="#E2C971"
                numberOfStars={5}
                starEmptyColor="#DADADA"
                name="rating"
                starDimension="0.6em"
                starSpacing="0.08em"
              />
            </div>
            <div className="low">
              <StarRatings
                rating={3}
                starRatedColor="#E2C971"
                numberOfStars={5}
                starEmptyColor="#DADADA"
                name="rating"
                starDimension="1.15em"
                starSpacing=".15em"
              />
            </div>
          </div>
        </div>
        <p className="font-style font-5">
          “ This app made planning my wedding so much easier. I could manage
          everything in one place! “
        </p>
      </div>
    </div>
  );
};

export default Customer;
