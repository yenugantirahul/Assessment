import React from "react";

import "../AboutStyles/OverAllratings.css";
import Ratings from "./Ratings";
import info from "../aboutAssets/info.png";
import infoIcon from "../aboutAssets/info-icon.png";
const OverAllRating = () => {
  return (
    <div className="overall-ratings">
      <h3 className="overall-heading">Overall rating and Reviews</h3>
      <p className="overall-para">
        Jawaharlal Nehru Technology University Kakinada
      </p>

      <div className="rating-component">
        <div className="some">
          <div className="component">
            <span className="component-heading">Component Ratings</span>
            <span className="rate">4.7</span>
          </div>
          <Ratings name={"Infrastructure"} percentage={78} />
          <Ratings name={"Faculty"} percentage={76} />
          <Ratings name={"Clean"} percentage={80} />
          <Ratings name={"Placements"} percentage={93} />
          <Ratings name={"Hostel"} percentage={68} />
        </div>
        <div className="rating-info">
          <h3 className="info-heading">What students say about JNTUK</h3>
          <div className="all-info">
            <span className="info-img">
              <img src={info} alt="info" />
            </span>
            <span>
              <p className="info-desc">
                Top recruiting companies for CSE include Oracle, Mathworks,
                Honeywell, TCS, Pega Systems, Wipro, Infosys and many more.
                <span className="no-review">(189 Reviews)</span>
              </p>
            </span>
          </div>
          <div className="last-row">
            <span className="info-icon">
              <img src={infoIcon} alt="info" />
              +2507 reviews
            </span>
            <button className="write-review">Write a Reviews</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverAllRating;
