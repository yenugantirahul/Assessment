import React from "react";
import "../styles/University.css"; // Import the CSS file
import { Star } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FaStar } from "react-icons/fa";

const University = ({ imageUrl, logoUrl, name, location, rating }) => {
  return (
    <>
      <div className="card">
        <div>
          <img src={imageUrl} alt={name} />
        </div>
        <div className="details">
          <div className="uni-logo">
            <img src={logoUrl} alt={name} />
          </div>
          <div className="info">
            <span className="uni-name">{name}</span>
            <span className="uni-location">
              {location}
              <span className="rating">
                <span className="star">
                  <FaStar fill="gold" />
                </span>
                {rating}
              </span>
            </span>
            <div className="line"></div>

            <span className="others1">
              <a href="#">View All Courses and fees</a>
              <ArrowRight />
            </span>
            <div className="line"></div>
            <span className="others2">
              <a href="#">Download Brochureand fees</a>
              <ArrowRight />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default University;
