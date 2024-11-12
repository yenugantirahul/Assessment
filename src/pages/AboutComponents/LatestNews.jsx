import React from "react";
import "../AboutStyles/LatestNews.css";
import News from "./News";
import news1 from "../aboutAssets/news1.png";
import news2 from "../aboutAssets/news2.png";
const LatestNews = () => {
  return (
    <div className="latest-news">
      <h3 className="latest-heading">Latest News</h3>
      <div className="news-boxes">
        <News
          img={news1}
          heading={"Academic Calendar"}
          date={"16-Sep-2023-25"}
          desc={
            " The revised academic calendar for the second year of B.Pharmacy for the 2024-2025 academic year has been released. This calendar includes important dates such as the start and end of semesters, examination schedules, and holidays"
          }
        />
        <News
          img={news2}
          heading={"High Court order"}
          date={"24-Jul-2024"}
          desc={
            " The High Court has ordered a CID probe against the Registrar of JNTU Kakinada. This investigation is related to allegations of issuing No Objection Certificates (NOCs) to 48 colleges, which allegedly allowed these colleges to gain autonomous status by violating the rules. Read More"
          }
        />
      </div>
    </div>
  );
};

export default LatestNews;
