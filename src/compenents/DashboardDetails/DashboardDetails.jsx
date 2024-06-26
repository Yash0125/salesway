import React from "react";
import "./DashboardDetails.css";
import DashboardTop from "../DashboardTop/DashboardTop";
import ComparisonChart from "../ComparisonChart/ComparisonChart";
import TopProducts from "../TopProducts/TopProducts";
import Score from "../Score/Score";
import CustomerChart from "../CustomerChart/CustomerChart";
import CommunityFeedback from "../CommunityFeedback/CommunityFeedback";

const DashboardDetails = ({handleMenu}) => {
  return (
    <div className="dashboard-details-container">
      <div className="dashboard-details-left-container">
        <DashboardTop handleMenu={handleMenu} />
        <ComparisonChart/>
        <TopProducts/>
      </div>
      <div className="dashboard-details-right-container">
        <Score/>
        <CustomerChart/>
        <CommunityFeedback/>
      </div>
    </div>
  );
};

export default DashboardDetails;
