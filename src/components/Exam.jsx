import "../styles/Exam.css";
const Exam = ({ logo, eName, desc }) => {
  return (
    <div className="exam-box">
      <div className="exam-logo">
        <img src={logo} alt={eName} />
      </div>
      <div className="exam-info">
        <span className="exam-name">{eName}</span>
        <span className="exam-desc">{desc}</span>
        <button className="exam-btn">view</button>
      </div>
    </div>
  );
};

export default Exam;
