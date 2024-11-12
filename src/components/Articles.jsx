import React from "react";
import "../styles/Articles.css";
import frame1 from "../assets/Frame.png";
import frame2 from "../assets/Frame1.png";

const Articles = ({ logoUrl, name, desc }) => {
  return (
    <div className="article">
      <div className="article-border">
        <div className="company-logo">
          <img src={frame1} alt="Frame" width="20.39px" height="20.62px" />
          CollegePur
          <img src={frame2} alt="Frame2" width="20.39px" height="20.62px" />
        </div>
        <div className="article-image">
          <img src={logoUrl} alt={name} />
        </div>
        <div className="article-content">
          <span className="article-name">{name}</span>
          <span className="article-desc">{desc}</span>
          <button className="article-btn">View</button>
        </div>
      </div>
    </div>
  );
};

export default Articles;
