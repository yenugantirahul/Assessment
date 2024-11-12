// src/components/FeaturedColleges.js

import College from "./College";
import col1 from "../assets/col1.png";
import col2 from "../assets/col2.png";
import col3 from "../assets/col3.png";
import col4 from "../assets/col4.png";
import "../styles/Featured.css";
function FeaturedColleges() {
  return (
    <>
      <div className="top-c">Featured Colleges</div>
      <section className="top-collegs">
        <College
          imageUrl={col1}
          location={"Jaipur (Rajastan)"}
          name={"Vevekanandha - Global University (VGU)"}
          rating={"4.3(93 Reviews)"}
          packagey={"54 Lags"}
          year={2012}
        />
        <College
          imageUrl={col2}
          location={"Jaipur (Rajastan)"}
          name={"Vevekanandha - Global University (VGU)"}
          rating={"4.3(93 Reviews)"}
          packagey={"54 Lags"}
          year={2012}
        />
        <College
          imageUrl={col3}
          location={"Jaipur (Rajastan)"}
          name={"Vevekanandha - Global University (VGU)"}
          rating={"4.3(93 Reviews)"}
          packagey={"54 Lags"}
          year={2012}
        />
        <College
          imageUrl={col4}
          location={"Jaipur (Rajastan)"}
          name={"Vevekanandha - Global University (VGU)"}
          rating={"4.3(93 Reviews)"}
          packagey={"54 Lags"}
          year={2012}
        />
        <button className="v-btn-c">View more</button>
      </section>
    </>
  );
}

export default FeaturedColleges;
