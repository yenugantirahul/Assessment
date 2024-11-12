import React from "react";

import "../AboutStyles/Email.css";
import student from "../aboutAssets/student.png";
import frame1 from "../../assets/Frame.png";
import frame2 from "../../assets/Frame1.png";
import { MdCall, MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import call from "../aboutAssets/call.png";
const Email = () => {
  return (
    <div className="email">
      <div className="input-box">
        <span className="input-logo">
          <img src={frame1} alt="frame1" />
          <span className="input-name">CollegePur</span>
          <img src={frame2} alt="frame2" />
        </span>
        <span className="input-heading">We're glad your're here!</span>
        <div className="inputs">
          <input
            className="name-input"
            type="text"
            placeholder="Enter your Name"
          />
          <input
            className="email-input"
            type="email"
            placeholder="Enter your Email Id"
          />
          <div className="ph-input">
            <input className="ph1" type="tel" placeholder="+91" />
            <input
              className="ph2"
              type="tel"
              placeholder="Enter your Mobile No"
            />
          </div>
          <textarea
            className="message-input"
            type="text"
            placeholder="Your Message"
          />
          <button type="submit" className="input-btn">
            Send
          </button>
          <div className="contact-methods">
            <span className="company-email">
              <MdOutlineEmail />
              contact@collegepur.com
            </span>
            <span className="company-num">
              <MdCall size="20px" fill="black" />
              +91 8319301961 <span></span> +91 9580491206
            </span>
            <span className="com-location">
              <FaLocationDot />
              Ghaziabad, Uttar Pradesh India
            </span>
          </div>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="student-pic">
        <img className="st-pic" src={student} alt="student" />
      </div>
    </div>
  );
};

export default Email;
