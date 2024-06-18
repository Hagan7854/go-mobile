import React, { useState } from "react";
import "./dashboard.css";
import logo from "../authentication/login/image/logo.png";
import menuIcon from "../authentication/login/image/menu.svg";
import searchIcon from "../authentication/login/image/search.svg";
import notification from "../authentication/login/image/bell.svg";
import padlockIcon from "../authentication/login/image/padlock.svg";
import prorilePic from "../authentication/login/image/profile-pic.svg";
import { Sidebar } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsersLine,
  faUser,
  faMessage,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Dashboard() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [hoverCommunities, setHoverCommunities] = useState(false);
  const [hoverMember, setHoverMember] = useState(false);
  const [hoverMessage, setHoverMessage] = useState(false);
  const [hoverActivities, setHoverActivies] = useState(false);

  const styleCommunities = {
    backgroundColor: hoverCommunities ? "#47af5b" : "#fff",
    color: hoverCommunities ? "white" : "#47af5b",
    fill: hoverCommunities ? "white" : "#47af5b",
    borderRadius: hoverCommunities ? "10px" : "",
  };

  const styleMember = {
    backgroundColor: hoverMember ? "#47af5b" : "#fff",
    color: hoverMember ? "white" : "#47af5b",
    fill: hoverMember ? "white" : "#47af5b",
    borderRadius: hoverMember ? "10px" : "",
  };
  const styleMessage = {
    backgroundColor: hoverMessage ? "#47af5b" : "#fff",
    color: hoverMessage ? "white" : "#47af5b",
    fill: hoverMessage ? "white" : "#47af5b",
    borderRadius: hoverMessage ? "10px" : "",
  };
  const styleActivities = {
    backgroundColor: hoverActivities ? "#47af5b" : "#fff",
    color: hoverActivities ? "white" : "#47af5b",
    fill: hoverActivities ? "white" : "#47af5b",
    borderRadius: hoverActivities ? "10px" : "",
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="nav-left">
          <div className="dashboard-logo">
            <img src={logo} alt="go logo" />
          </div>
          <div className="dashboard-menu" onClick={toggleSidebar}>
            <img src={menuIcon} alt="menu icon" />
          </div>
          <div className="search-container">
            <img src={searchIcon} alt="" />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-icon">
            <img src={notification} alt="" />
          </div>
          <div className="nav-profile-pic">
            <img src={prorilePic} alt="" />
          </div>
          <div className="login-text">
            <p>Logout</p>
          </div>
          <div className="nav-icon">
            <img src={padlockIcon} alt="" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className={`frame-1 ${isSidebarVisible ? "" : "hidden"}`}>
          <Sidebar
            aria-label="Sidebar with logo branding example"
            className="sidebar"
          >
            <div className="profile-wrapper">
              <div className="profile-pic">
                <img src={prorilePic} alt="" />
              </div>
              <div className="profile-txt">
                <p className="profile-name">Ken Cann</p>
                <p className="sub-profile-name">@ncann</p>
              </div>
            </div>
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Link to="communities">
                  <div
                    className="nav-gap"
                    style={styleCommunities}
                    onMouseOver={() => setHoverCommunities(true)}
                    onMouseOut={() => setHoverCommunities(false)}
                  >
                    <FontAwesomeIcon icon={faUsersLine} />
                    <p
                      style={styleCommunities}
                      onMouseOver={() => setHoverCommunities(true)}
                      onMouseOut={() => setHoverCommunities(false)}
                      className="sidebar-items"
                    >
                      My Communities
                    </p>
                  </div>
                </Link>
                <div
                  className="nav-gap"
                  style={styleMember}
                  onMouseOver={() => setHoverMember(true)}
                  onMouseOut={() => setHoverMember(false)}
                >
                  <FontAwesomeIcon icon={faUser} />

                  <p
                    style={styleMember}
                    onMouseOver={() => setHoverMember(true)}
                    onMouseOut={() => setHoverMember(false)}
                    className="sidebar-items"
                  >
                    Members
                  </p>
                </div>

                <div
                  className="nav-gap"
                  style={styleMessage}
                  onMouseOver={() => setHoverMessage(true)}
                  onMouseOut={() => setHoverMessage(false)}
                >
                  <FontAwesomeIcon icon={faMessage} />
                  <p
                    style={styleMessage}
                    onMouseOver={() => setHoverMessage(true)}
                    onMouseOut={() => setHoverMessage(false)}
                    className="sidebar-items"
                  >
                    Message
                  </p>
                </div>

                <div
                  className="nav-gap"
                  style={styleActivities}
                  onMouseOver={() => setHoverActivies(true)}
                  onMouseOut={() => setHoverActivies(false)}
                >
                  <FontAwesomeIcon icon={faCalendarCheck} />

                  <p
                    style={styleActivities}
                    onMouseOver={() => setHoverActivies(true)}
                    onMouseOut={() => setHoverActivies(false)}
                    className="sidebar-items"
                  >
                    Activities
                  </p>
                </div>

                <Sidebar.Item>
                  <button className="sidebar-button">New Communities</button>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div className="frame-2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
