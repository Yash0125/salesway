import React from "react";
import "./Dashboard.css";
import Sidebar from "../../compenents/Sidebar/Sidebar";
import DashboardDetails from "../../compenents/DashboardDetails/DashboardDetails";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <DashboardDetails />
    </div>
  );
};

export default Dashboard;
