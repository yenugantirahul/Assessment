import React from "react";
import drop from "../aboutAssets/Drop.png";
import "../AboutStyles/DropDown.css";
const DropDown = ({ ques }) => {
  return (
    <div className="dropdown">
      <span>{ques}</span>
      <img src={drop} alt="ques" />
    </div>
  );
};

export default DropDown;
