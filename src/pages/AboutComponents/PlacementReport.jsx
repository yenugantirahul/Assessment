import "../AboutStyles/Placementreport.css";
import show from "../aboutAssets/show.png";
const PlacementReport = () => {
  return (
    <div className="placement-report">
      <div className="placement-desc">
        <h3 className="placement-year">Placement report 21-2024</h3>
        <p className="about-placement">
          The highest package offered JNTUK placements 2024 till now stood
          at INR 35 LPA, which was grabbed by two students
          of ECE and CSE branch. Further, the second highest package offered
          during JNTUK CSE placements 2024 stood at INR 16.3 LPA. The highest
          and second highest package was offered by Commvault and Darwain Box,
          respectively.
        </p>
      </div>
      <h3 className="placement-highlight">Placement Highlight 2024</h3>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr className="header-row">
              <th className="table-cell">Degree</th>
              <th className="table-cell">PGP EMBA</th>
              <th className="table-cell">PGP MCMM</th>
            </tr>
          </thead>
          <tbody>
            <tr className="row-even">
              <td className="table-cell">No of Students Placed</td>
              <td className="table-cell">
                100% Placment is offered based on student performance
              </td>
              <td className="table-cell">
                {" "}
                100% Placment is offered based on student performance
              </td>
            </tr>
            <tr className="row-odd">
              <td className="table-cell">Minimum Salary</td>
              <td className="table-cell"> 6 lakhs</td>
              <td className="table-cell">4 lakhs</td>
            </tr>
            <tr className="row-even">
              <td className="table-cell">Maximum Salary</td>
              <td className="table-cell">15.50 lakhs</td>
              <td className="table-cell">7 lakhs</td>
            </tr>
            <tr className="row-even">
              <td className="table-cell">Average Salary</td>
              <td className="table-cell">7.5 lakhs</td>
              <td className="table-cell">5.5 lakhs</td>
            </tr>
            <tr className="row-even">
              <td className="table-cell">Lowest Salary</td>
              <td className="table-cell">3.5 lakhs</td>
              <td className="table-cell">2.5 lakhs</td>
            </tr>
          </tbody>
        </table>
        <button className="show-btn">
          Show more <img src={show} alt="show" />
        </button>
      </div>
    </div>
  );
};

export default PlacementReport;
