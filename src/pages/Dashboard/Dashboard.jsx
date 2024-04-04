import React, { useState } from "react";
import "./Dashboard.css";
import Sidebar from "../../compenents/Sidebar/Sidebar";
import DashboardDetails from "../../compenents/DashboardDetails/DashboardDetails";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  console.log(showMenu)

  return (
    <div className="dashboard-container">
      <Sidebar showMenu={showMenu} handleMenu={handleMenu} />
      <DashboardDetails handleMenu={handleMenu} />
    </div>
  );
};

export default Dashboard;
