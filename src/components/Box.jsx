import { ArrowRight } from "lucide-react";
import "../styles/Box.css";
const Box = ({ courseName, duration, avgfees, num }) => {
  return (
    <div className="box">
      <div className="course">
        <p className="cn">{courseName}</p>
        <span className="type">
          <p className="cd">Duration</p>
          <p className="right">{duration}</p>
        </span>
        <span className="fees">
          <p className="cd">Avg Fees</p>
          <p className="right">{avgfees}</p>
        </span>
        <span className="number">
          <p className="cd">Collegs</p>
          <p className="right">{num}</p>
        </span>
      </div>
      <div className="hori"></div>
      <span className="cv">
        <p> Course view</p>
        <ArrowRight />
      </span>
    </div>
  );
};

export default Box;
