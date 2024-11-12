import React from "react";
import "../AboutStyles/FeeTable.css";
import show from "../aboutAssets/show.png";
const FeeTable = () => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr className="header-row">
            <th className="table-cell">Course Name</th>
            <th className="table-cell">Duration</th>
            <th className="table-cell">Fees</th>
            <th className="table-cell">Check Seat Availability</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row-even">
            <td className="table-cell">Bachelor of Engineering</td>
            <td className="table-cell">4 Years</td>
            <td className="table-cell">50,000</td>
            <td className="table-cell seat-link">
              <a href="#">View</a>
            </td>
          </tr>
          <tr className="row-odd">
            <td className="table-cell">Master of Engineering</td>
            <td className="table-cell">2 Years</td>
            <td className="table-cell">3,00,000</td>
            <td className="table-cell seat-link">
              <a href="#">View</a>
            </td>
          </tr>
          <tr className="row-even">
            <td className="table-cell">BTech</td>
            <td className="table-cell">4 Years</td>
            <td className="table-cell">40,000</td>
            <td className="table-cell seat-link">
              <a href="#">View</a>
            </td>
          </tr>
          <tr className="row-odd">
            <td className="table-cell">MTech</td>
            <td className="table-cell">2 Years</td>
            <td className="table-cell">30,000</td>
            <td className="table-cell seat-link">
              <a href="#">View</a>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="show-btn">
        Show more <img src={show} alt="show" />
      </button>
    </div>
  );
};

export default FeeTable;
