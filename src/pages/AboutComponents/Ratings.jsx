import React from "react";

import "../AboutStyles/Ratings.css";

const Ratings = ({ name, percentage }) => {
  return (
    <div className="overall-container">
      <span className="rating-name">{name}</span>
      <div className="divide">
        <div className="bar">
          <div
            style={{
              height: "20px",
              width: `${percentage}%`,
              backgroundColor: "#554a98",
              borderRadius: "9999px",
            }}
          ></div>
        </div>
        <span className="percentage">{percentage}%</span>
      </div>
    </div>
  );
};
export default Ratings;
