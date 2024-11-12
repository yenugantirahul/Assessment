import vector from "../assets/Vector.jpg";
import "../styles/tags.css";
const Tags = ({ course }) => {
  return (
    <div className="course-tags">
      <ul className="all-courses">
        <li>
          {course}{" "}
          <span className="c-icon">
            <img src={vector} alt="bar" />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Tags;
