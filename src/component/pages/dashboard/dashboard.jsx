import "./dashboard.css";
import logo from "../authentication/login/image/logo.png";
import menuIcon from "../authentication/login/image/menu.svg";
import searchIcon from "../authentication/login/image/search.svg";
import notification from "../authentication/login/image/bell.svg";
import padlockIcon from "../authentication/login/image/padlock.svg";
import prorilePic from "../authentication/login/image/profile-pic.svg";

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
    </div>
  );
}
