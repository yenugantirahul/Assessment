// src/components/LatestArticles.js

import Articles from "./Articles";
import article1 from "../assets/article1.png";
import article2 from "../assets/article2.png";
import article3 from "../assets/article3.png";
import "../styles/LatestArticles.css";
function LatestArticles() {
  return (
    <section className="latest-articles">
      <h3 className="article-heading">Latest Articles</h3>
      <div className="article-list">
        <Articles
          logoUrl={article1}
          name={"Karnataka PGCET Result 2024"}
          desc={
            "KEA has recently released the revised answer key for Karnataka PGCET ME, MTech and MArch exam that was held on September 18. Catch live updates on Karnataka PGCET 2024 results here"
          }
        />
        <Articles
          logoUrl={article2}
          name={"CUET Courses List 2025"}
          desc={
            "CUET course list 2025 offers various UG and PG courses, such as BA, BSc, BCom, BBA, B Arch, MSc, and so on, for candidates seeking CUET UG admission 2025. Candidates can look over the list of available courses and begin applying for their preferred course"
          }
        />
        <Articles
          logoUrl={article3}
          name={
            "Assam NEET PG Counselling 2024 Provisional Merit List Released."
          }
          desc={
            "Assam NEET PG counseling 2024 provisional state merit list has been released on the official website by DME. The names of 2930 candidates are mentioned in the list, meaning they are eligible to participate in the Assam ....."
          }
        />
      </div>
    </section>
  );
}

export default LatestArticles;
