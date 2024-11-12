import React from "react";
import "../AboutStyles/About.css";
import CollegeInfo from "../AboutComponents/CollegeInfo";
import CollegeOverview from "../AboutComponents/CollegeOverview";
import CollegeDesc from "../AboutComponents/CollegeDesc";
import FeesStructure from "../AboutComponents/FeesStructure";
import FeeTable from "../AboutComponents/FeeTable";
import ContactDeatils from "../AboutComponents/ContactDeatils";
import FAQ from "../AboutComponents/FAQ";
import OverAllRating from "../AboutComponents/OverAllRating";
import Gallery from "../AboutComponents/Gallery";
import PlacementReport from "../AboutComponents/PlacementReport";
import LatestNews from "../AboutComponents/LatestNews";
import Email from "../AboutComponents/Email";
const About = () => {
  return (
    <div className="about-page">
      <CollegeInfo />
      <CollegeOverview />
      <CollegeDesc />
      <FeesStructure />
      <FeeTable />
      <ContactDeatils />
      <FAQ />
      <OverAllRating />
      <Gallery />
      <PlacementReport />
      <LatestNews />
      <Email />
    </div>
  );
};

export default About;
