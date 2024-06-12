import "./dashboard.css";
import logo from "../authentication/login/image/logo.png";
import menuIcon from "../authentication/login/image/menu.svg";
import searchIcon from "../authentication/login/image/search.svg";
import notification from "../authentication/login/image/bell.svg";
import padlockIcon from "../authentication/login/image/padlock.svg";
import prorilePic from "../authentication/login/image/profile-pic.svg";
import { Sidebar } from "flowbite-react";
import communitiesIcon from "../../landing-page/images/communities.svg";
import membersIcon from "../../landing-page/images/members.svg";
import message from "../../landing-page/images/messages.svg";
import activities from "../../landing-page/images/activities.svg";
import running from "../../landing-page/images/outdoor-shot-active-dark-skinned-man-running-morning-has-regular-trainings-dressed-tracksuit-comfortable-sneakers-concentrated-into-distance-sees-finish-far-away.jpg";
import communityIcon from "../../landing-page/images/communityIcon.svg";
import clockIcon from "../../landing-page/images/clock.svg";
import StarIcon from "../../landing-page/images/193-1934674_star-symbol-text-star-icon-transparent-background.webp";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="nav-left">
          <div className="dashboard-logo">
            <img src={logo} alt="go logo" />
          </div>
          <div className="dashboard-menu">
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
          <div className="profile-pic">
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
        <div className="frame-1">
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
                <div className="nav-gap">
                  <img src={communitiesIcon} alt="" />
                  <p className="sidebar-items">My Communtiies</p>
                </div>

                <div className="nav-gap">
                  <img src={membersIcon} alt="" />
                  <p className="sidebar-items">Members</p>
                </div>

                <div className="nav-gap">
                  <img src={message} alt="" />
                  <p className="sidebar-items">Message</p>
                </div>

                <div className="nav-gap">
                  <img src={activities} alt="" />
                  <p className="sidebar-items">Activities</p>
                </div>

                <Sidebar.Item>
                  <button className="sidebar-button">New Communities</button>
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
        <div className="frame-2">
          <p className="title">My communities</p>
          <div className="main">
            <div className="first-frame">
              <div className="pic">
                <img src={running} alt="" />
              </div>
              <div className="stats">
                <h2>FITNESS</h2>
                <div className="row-comm">
                  <div className="col-comm">
                    <h1>Jarul Fitness</h1>
                  </div>
                  <div className="col-comm">
                    <button>OPEN</button>
                  </div>
                </div>
              </div>
              <div className="second-row">
                <div className="second-col">
                  <div className="communityIcon">
                    <img src={communityIcon} alt="" />
                  </div>
                  <div className="members">
                    <p>47</p>
                    <p>Members</p>
                  </div>
                </div>
                <div className=" duration">
                  <img src={clockIcon} alt="" />
                  <p>1 years old</p>
                </div>
              </div>
              <div className="rating">
                <img src={StarIcon} alt="" />
                <img src={StarIcon} alt="" />
                <img src={StarIcon} alt="" />
                <img src={StarIcon} alt="" />
                <img src={StarIcon} alt="" />
                <img src={StarIcon} alt="" />
              </div>
              <div className="upcoming-event">
                <h1>UPCOMING EVENT</h1>
              </div>
              <div className="last-row">
                <div className="date">
                  <p>2024.05.27</p>
                </div>
                <div className="sessions">
                  <p>Physio</p>
                  <p>Session</p>
                  <p>Lamba Court</p>
                  <p>Spintex</p>
                </div>
              </div>
              <div className="bar-wrapper">
                <div className="bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
