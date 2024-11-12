import React from "react";
import "../AboutStyles/CollegeInfo.css";
import { FaStar } from "react-icons/fa";
import image from "../aboutAssets/image.png";
import clg from "../aboutAssets/clg.png";
import { MdArrowOutward } from "react-icons/md";
const CollegeInfo = () => {
  return (
    <div className="college-info">
      <div className="college-box">
        <div className="college-img">
          <img src={clg} alt="college-name" />
        </div>
        <div className="college-details">
          <span className="college-name">
            Jawaharlal Nehru Technological University (JNTUK)
          </span>
          <span className="college-place">Kakinada, Andhra Pradesh</span>

          <span className="college-rating">
            <span className="college-rate">
              <span className="college-stars">
                <FaStar fill="black" />
                4.7
              </span>
              <a href="#collegelink">
                Go to Website Link <img src={image} alt="college-name" />
              </a>
            </span>
          </span>
          <div className="buttons">
            <button className="contact-btn">Contact Us</button>
            <button className="apply-btn">Apply Now</button>
          </div>
        </div>
      </div>
      <span className="gallery-link">
        View Gallery <MdArrowOutward />
      </span>
    </div>
  );
};

export default CollegeInfo;
