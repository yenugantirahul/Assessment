// src/components/ExploreCourses.js
import Box from "./Box";
import "../styles/Courses.css";
function ExploreCourses() {
  return (
    <section className="explore-courses">
      <h3 className="c-head">Explore Courses</h3>
      <ul className="course-categories">
        <li>Bachelors</li>
        <li>Masters</li>
        <li>Doctorae</li>
        <li>Diploma</li>
        <li>Cerification</li>
      </ul>
      <div className="boxes">
        <Box
          courseName={"BCA General"}
          duration={"3 Years"}
          avgfees={"68.26 K"}
          num={6678}
        />
        <Box
          courseName={"BCA General"}
          duration={"3 Years"}
          avgfees={"68.26 K"}
          num={6678}
        />
        <Box
          courseName={"BCA General"}
          duration={"3 Years"}
          avgfees={"68.26 K"}
          num={6678}
        />
      </div>
      <div className="scroll">
        <span className="big"></span>
        <span className="small"></span>
        <span className="small"></span>
      </div>
    </section>
  );
}

export default ExploreCourses;
