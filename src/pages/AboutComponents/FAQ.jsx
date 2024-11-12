import React from "react";
import "../AboutStyles/FAQ.css";
import DropDown from "./DropDown";
const FAQ = () => {
  return (
    <div className="faq">
      <h3 className="faq-heading">Frequenty Asked Questions</h3>
      <div className="drop-list">
        <DropDown ques={"How can I get in touch with JNTUK fir queries?"} />
        <DropDown ques={"What are the placement oppurtunities at JNTUK?"} />
        <DropDown ques={"What are the placement opportunities at JNTUK?"} />
        <DropDown ques={"What are the courses offered at JNTUK?"} />
        <DropDown ques={"Is JNTUK affiliated with other colleges?"} />
      </div>
    </div>
  );
};

export default FAQ;
