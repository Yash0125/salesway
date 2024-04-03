import React from "react";
import "./DashboardTop.css";
import {
  IoIosArrowDown,
  IoMdTrendingUp,
  IoMdTrendingDown,
} from "react-icons/io";

const DashboardTop = () => {
  return (
    <div className="dashboardtop-container">
      <div className="dashboardtop-header-container">
        <h2 className="dashboardtop-header-title">Dashboard</h2>
        <div className="dashboardtop-header-right-container">
          <p className="dashboardtop-header-right-text">Compare to</p>
          <div className="dashboardtop-header-year-container">
            <p className="dashboardtop-header-right-text">Last Year</p>
            <IoIosArrowDown className="dashboardtop-header-year-icon" />
          </div>
        </div>
      </div>

      <div className="dashboardtop-card-details-container">
        <div className="dashboardtop-card-container">
          <h3 className="dashboardtop-card-title">Purchase</h3>
          <div className="dashboardtop-card-description-container">
            <h4 className="dashboardtop-card-description-left">4,294</h4>
            <span className="dashboardtop-card-description-right">
              +32%{" "}
              <IoMdTrendingUp className="dashboardtop-card-description-right-tp-icon" />
            </span>
          </div>
        </div>
        <div className="dashboardtop-card-container">
          <h3 className="dashboardtop-card-title">Revenue</h3>
          <div className="dashboardtop-card-description-container">
            <h4 className="dashboardtop-card-description-left">$322,3k</h4>
            <span className="dashboardtop-card-description-right">
              +49%{" "}
              <IoMdTrendingUp className="dashboardtop-card-description-right-tp-icon" />
            </span>
          </div>
        </div>
        <div className="dashboardtop-card-container">
          <h3 className="dashboardtop-card-title">Refunds</h3>
          <div className="dashboardtop-card-description-container">
            <h4 className="dashboardtop-card-refund-description-left">$8,2k</h4>
            <span className="dashboardtop-card-refund-description-right">
              +7%{" "}
              <IoMdTrendingDown className="dashboardtop-card-description-right-down-icon" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTop;
