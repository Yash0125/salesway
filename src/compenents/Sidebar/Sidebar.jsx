import React from "react";
import "./Sidebar.css";
import { FaFan } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdDashboard } from "react-icons/md";
import { RiBarChart2Line } from "react-icons/ri";
import { GoWorkflow } from "react-icons/go";
import { TbMathIntegral } from "react-icons/tb";
import { TfiMenuAlt } from "react-icons/tfi";
import profileImg from "./../../assets/Profile.png";
import { IoMdClose } from "react-icons/io";

const Sidebar = ({ showMenu, handleMenu }) => {
  return (
    <>
      <aside className="sidebar-container">
        <div className="sidebar-top-container">
          <div className="sidebar-title-container">
            <FaFan className="sidebar-logo" />
            <h1 className="sidebar-title">Salesway</h1>
          </div>

          <div className="sidebar-top-page-container">
            <div className="sidebar-top-page-details-container">
              <IoSettingsOutline className="sidebar-top-page-icons" />
              <p className="sidebar-top-page-icons-title">Settings</p>
            </div>
            <div className="sidebar-top-page-details-container">
              <CgProfile className="sidebar-top-page-icons" />
              <p className="sidebar-top-page-icons-title">Team</p>
            </div>
          </div>
          <div className="sidebar-top-menu-container">
            <h2 className="sidebar-top-menu-title">MENU</h2>
            <div className="sidebar-top-menu-details-container">
              <div className="sidebar-top-page-details-dashboard-container">
                <MdDashboard className="sidebar-top-page-dashboard-icons" />
                <p className="sidebar-top-page-icons-title">Dashboard</p>
              </div>
              <div className="sidebar-top-page-details-container">
                <RiBarChart2Line className="sidebar-top-page-icons" />
                <p className="sidebar-top-page-icons-title">Campaigns</p>
              </div>
              <div className="sidebar-top-page-details-container">
                <GoWorkflow className="sidebar-top-page-icons" />
                <p className="sidebar-top-page-icons-title">Flows</p>
              </div>
              <div className="sidebar-top-page-details-container">
                <TbMathIntegral className="sidebar-top-page-icons" />
                <p className="sidebar-top-page-icons-title">Integrations</p>
              </div>
              <div className="sidebar-top-page-details-container">
                <TfiMenuAlt className="sidebar-top-page-icons" />
                <p className="sidebar-top-page-icons-title">Customers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-bottom-container">
          <img
            className="sidebar-bottom-img"
            src={profileImg}
            alt="Profile Img"
          />
          <p className="sidebar-bottom-profile-name">Tom Wang</p>
        </div>
      </aside>

      {showMenu && (
        <aside className="sidebar-mobile-container">
          <div className="sidebar-top-container">
            <div className="sidebar-top-title-container">
              <div className="sidebar-title-container">
                <FaFan className="sidebar-logo" />
                <h1 className="sidebar-title">Salesway</h1>
              </div>
              <IoMdClose onClick={handleMenu} className="sidebar-close-icon" />
            </div>

            <div className="sidebar-top-page-container">
              <div className="sidebar-top-page-details-container">
                <IoSettingsOutline className="sidebar-top-page-icons" />
                <p className="sidebar-top-page-icons-title">Settings</p>
              </div>
              <div className="sidebar-top-page-details-container">
                <CgProfile className="sidebar-top-page-icons" />
                <p className="sidebar-top-page-icons-title">Team</p>
              </div>
            </div>
            <div className="sidebar-top-menu-container">
              <h2 className="sidebar-top-menu-title">MENU</h2>
              <div className="sidebar-top-menu-details-container">
                <div className="sidebar-top-page-details-dashboard-container">
                  <MdDashboard className="sidebar-top-page-dashboard-icons" />
                  <p className="sidebar-top-page-icons-title">Dashboard</p>
                </div>
                <div className="sidebar-top-page-details-container">
                  <RiBarChart2Line className="sidebar-top-page-icons" />
                  <p className="sidebar-top-page-icons-title">Campaigns</p>
                </div>
                <div className="sidebar-top-page-details-container">
                  <GoWorkflow className="sidebar-top-page-icons" />
                  <p className="sidebar-top-page-icons-title">Flows</p>
                </div>
                <div className="sidebar-top-page-details-container">
                  <TbMathIntegral className="sidebar-top-page-icons" />
                  <p className="sidebar-top-page-icons-title">Integrations</p>
                </div>
                <div className="sidebar-top-page-details-container">
                  <TfiMenuAlt className="sidebar-top-page-icons" />
                  <p className="sidebar-top-page-icons-title">Customers</p>
                </div>
              </div>
            </div>
            <div className="sidebar-bottom-container">
              <img
                className="sidebar-bottom-img"
                src={profileImg}
                alt="Profile Img"
              />
              <p className="sidebar-bottom-profile-name">Tom Wang</p>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};

export default Sidebar;
