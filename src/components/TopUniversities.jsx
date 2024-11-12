// src/components/TopUniversities.js
import React from "react";
import "../styles/TopUniversities.css";
import University from "./University";
import img1 from "../assets/uni1.png";
import logo1 from "../assets/unilog1.png";
import img2 from "../assets/uni2.png";
import logo2 from "../assets/unilog2.png";
import img3 from "../assets/uni3.png";
import logo3 from "../assets/unilog3.png";
import img4 from "../assets/uni4.png";
import logo4 from "../assets/unilog4.png";
function TopUniversities() {
  return (
    <>
      <div className="top">Top Universities/Colleges</div>
      <section className="top-universities">
        <University
          imageUrl={img1}
          logoUrl={logo1}
          name={"IIT Madras - Indian Institute ofTechnology"}
          location={"Chennai, TamilNadu"}
          rating={"4.3 / 5"}
        />
        <University
          imageUrl={img2}
          logoUrl={logo2}
          name={"IIMA - Indian Institute of Management"}
          location={"Ahmedabad, Gujarat"}
          rating={"4.3 / 5"}
        />
        <University
          imageUrl={img3}
          logoUrl={logo3}
          name={"Chadigarh University - [CU]"}
          location={"chandigarh, chandigarh"}
          rating={"4.3 / 5"}
        />
        <University
          imageUrl={img4}
          logoUrl={logo4}
          name={"Jawaharlal Nehru Technological University (JNTUK)"}
          location={"Kakinada, Andhra Pradesh"}
          rating={"4.3 / 5"}
        />
        <button className="v-btn">View more</button>
      </section>
    </>
  );
}

export default TopUniversities;
