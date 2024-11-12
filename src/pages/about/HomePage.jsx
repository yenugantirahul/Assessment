import React from "react";
import { Router } from "react-router-dom";
import ExploreCourses from "../../components/ExploreCourses";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import LatestArticles from "../../components/LatestArticles";
import TopCourses from "../../components/TopCourses";
import TopUniversities from "../../components/TopUniversities";
import EntranceExams from "../../components/EntranceExams";
import FeaturedColleges from "../../components/FeaturedColleges";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Introduction />

      <TopUniversities />
      <FeaturedColleges />
      <ExploreCourses />
      <TopCourses />
      <EntranceExams />
      <LatestArticles />
    </div>
  );
};

export default HomePage;
