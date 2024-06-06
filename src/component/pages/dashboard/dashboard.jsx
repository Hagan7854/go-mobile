import "./dashboard.css";
import logo from "../authentication/login/image/logo.png";
import menuIcon from "../authentication/login/image/menu.svg";
import searchIcon from "../authentication/login/image/search.svg";

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
      </div>
    </div>
  );
}
