import React from "react";
import "./DashboardDetails.css";
import DashboardTop from "../DashboardTop/DashboardTop";
import ComparisonChart from "../ComparisonChart/ComparisonChart";
import TopProducts from "../TopProducts/TopProducts";

const DashboardDetails = () => {
  return (
    <div className="dashboard-details-container">
      <div className="dashboard-details-left-container">
        <DashboardTop/>
        <ComparisonChart/>
        <TopProducts/>
      </div>
      <div className="dashboard-details-right-container"></div>
    </div>
  );
};

export default DashboardDetails;
