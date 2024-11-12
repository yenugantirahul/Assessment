import React from "react";
import "../styles/Footer.css";
import frame1 from "../assets/Frame.png";
import frame2 from "../assets/Frame1.png";
import twitter from "../assets/Twitter.png";
import instagram from "../assets/Instagram.png";
import youtube from "../assets/Youtube.png";
import linkedin from "../assets/Linkedin.png";
export const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="social">
          <span className="company">
            <img src={frame1} alt="Frame" width="40.39px" height="40.62px" />
            CollegePur
            <img src={frame2} alt="Frame2" width="40.39px" height="40.62px" />
          </span>
          <ul className="social-icons">
            <li>
              <img src={twitter} alt="twitter" />
            </li>
            <li>
              <img src={instagram} alt="instagram" />
            </li>
            <li>
              <img src={youtube} alt="youtube" />
            </li>
            <li>
              <img src={linkedin} alt="linkedin" />
            </li>
          </ul>
        </div>
        <div className="footer-names">
          <span className="footer-head">Popular Courses</span>
          <span>B.Tech</span>
          <span>MBBS</span>
          <span>BA.LLB</span>
          <span>MBA</span>
          <span>Pharmacy</span>
          <span>Psycology</span>
          <span>VFX</span>
        </div>
        <div className="footer-names">
          <span className="footer-head">Most Searched Colleges</span>
          <span>IIT Bombay</span>
          <span>IIM Ahmedabad</span>
          <span>IISc Banglore</span>
          <span>JNTU</span>
          <span>Osmania University</span>
          <span>Andhra University</span>
        </div>
        <div className="footer-names">
          <span className="footer-head">Quick Links</span>
          <span>About Us</span>
          <span>Contact Us</span>
          <span>Careers</span>
          <span>Support</span>
        </div>
        <div className="footer-names">
          <span className="footer-head">Terms&Conditions</span>
          <span>Privacy Policy</span>
          <span>Copyright notice</span>
          <span>Business License</span>
        </div>
      </section>
      <div className="copyright-footer">
        <div className="hori-line"></div>
        <span className="copyrights">
          All Copyright © 2024 CollegePur All Rights Reserved
        </span>
      </div>
    </>
  );
};
