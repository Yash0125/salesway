import React from "react";
import "./DashboardDetails.css";
import DashboardTop from "../DashboardTop/DashboardTop";
import ComparisonChart from "../ComparisonChart/ComparisonChart";

const DashboardDetails = () => {
  return (
    <div className="dashboard-details-container">
      <div className="dashboard-details-left-container">
        <DashboardTop/>
        <ComparisonChart/>
      </div>
      <div className="dashboard-details-right-container"></div>
    </div>
  );
};

export default DashboardDetails;
