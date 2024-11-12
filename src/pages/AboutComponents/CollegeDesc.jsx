import React from "react";
import "../AboutStyles/CollegeDesc.css";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
const CollegeDesc = () => {
  return (
    <div className="college-desc">
      <p className="about-college">
        Jawaharlal Nehru Technological University Kakinada (JNTUK) is
        established in the year 2008 vide ACT NO. 30 OF 2008 by the State of
        ANDHRA PRADESH. The University grew out of the College of Engineering
        Vizagapatnam founded by the Government of the composite Madras State in
        the year 1946. Spread over a sprawling campus of 100 acres in the port
        city of Kakinada, the college became a constituent of JNTU, Hyderabad in
        1972. Subject to the trifurcation of the JNTU Hyderabad, it was notified
        as JNTUK Kakinada by the act of legislature in 2008.
      </p>

      <span className="admissions">
        <button className="adm-btn">Admissions Open</button>
        <button className="msg-btn">
          <BiSolidMessageRoundedDetail size={25} />
        </button>
      </span>
    </div>
  );
};

export default CollegeDesc;
