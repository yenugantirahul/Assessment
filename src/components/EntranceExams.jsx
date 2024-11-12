// src/components/EntranceExams.js

import "../styles/EntranceExam.css";
import logo1 from "../assets/Elogo1.png";
import logo2 from "../assets/Elogo2.png";
import logo3 from "../assets/Elogo3.png";
import logo4 from "../assets/Elogo4.png";
import Exam from "./Exam";
function EntranceExams() {
  return (
    <section className="entrance-exams">
      <h3 className="e-head">Entrance Exams</h3>
      <div className="all-exams">
        <Exam
          logo={logo1}
          eName={"JEE Main 2025"}
          desc={
            "JEE Main is the national level undergraduate engineering entrance exam. This exam is acceptable for the admission in various B.Tech/B.E Programs"
          }
        />
        <Exam
          logo={logo2}
          eName={"Gate 2025"}
          desc={
            "GATE 2024 is a national - level exam conducted for M,Tech admissions across India . The Scores are also accepted for PSU Recruitment"
          }
        />
        <Exam
          logo={logo3}
          eName={"CAT"}
          desc={
            "GATE 2024 is a national - level exam conducted for M,Tech admissions across India . The Scores are also accepted for PSU Recruitment"
          }
        />
        <Exam
          logo={logo4}
          eName={"NMAT"}
          desc={
            "JEE Main is the national level undergraduate engineering entrance exam. This exam is acceptable for the admission in various B.Tech/B.E Programs"
          }
        />
      </div>
    </section>
  );
}

export default EntranceExams;
