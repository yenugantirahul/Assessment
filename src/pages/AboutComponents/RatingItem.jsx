import React from "react";
import "../AboutStyles/RatingItems.css";

const RatingItem = ({ name, rating }) => {
  return (
    <div className="rating-item">
      <span className="rating-item-label">{name}</span>
      <div className="rating-bar-bg">
        <div className="rating-bar" style={{ width: `${rating}%` }}></div>
      </div>
      <span className="rating-percentage">{rating}%</span>
    </div>
  );
};

export default RatingItem;
