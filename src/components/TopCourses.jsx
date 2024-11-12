// src/components/TopCourses.js
import React from "react";
import Tags from "./Tags";
import "../styles/TopCourses.css";

function TopCourses() {
  return (
    <section className="top-courses">
      <h3 className="course-t">Top Courses</h3>
      <div className="sec">
        <Tags course={"BE/B.Tech"} />
        <Tags course={"BA"} />
        <Tags course={"B.Sc"} />
        <Tags course={"MBA/PGDM"} />
        <Tags course={"M.Sc"} />
        <Tags course={"ME/M.Tech"} />
        <Tags course={"MA"} />
        <Tags course={"M.Phil/PhD"} />
        <Tags course={"MD"} />
        <Tags course={"B.Com"} />
        <Tags course={"BBA/BMS"} />
        <Tags course={"M.Phil.Ph.D in Arts"} />
        <Tags course={"B.Ed"} />
      </div>
    </section>
  );
}

export default TopCourses;
