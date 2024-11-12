import { FaStar } from "react-icons/fa";
import "../styles/College.css";
const College = ({ imageUrl, name, location, rating, packagey, year }) => {
  return (
    <>
      <div className="card-c">
        <div>
          <img src={imageUrl} alt={name} />
        </div>
        <div className="details-c">
          <div className="info-c">
            <span className="uni-name-c">{name}</span>
            <span className="uni-location-c">
              {location}
              <span className="rating-c">
                <span className="star-c">
                  <FaStar fill="gold" />
                </span>
                {rating}
              </span>
            </span>
            <div className="line-c"></div>

            <span className="others1-c">
              <a href="#">Highest Package</a>
              {packagey}
            </span>
            <div className="line-c"></div>
            <span className="others2-c">
              <a href="#">Download Brochureand fees</a>
              {year}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default College;
