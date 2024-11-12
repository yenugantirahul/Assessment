import React from "react";

import "../AboutStyles/News.css";

const News = ({ img, heading, date, desc }) => {
  return (
    <div className="news">
      <div className="news-photo">
        <img src={img} alt={heading} />
      </div>
      <div className="news-content">
        <h3 className="news-heading">{heading}</h3>
        <span className="news-date">{date} / Ctaegory</span>
        <p className="news-desc">{desc}</p>
        <button className="news-btn">Read More</button>
      </div>
    </div>
  );
};

export default News;
