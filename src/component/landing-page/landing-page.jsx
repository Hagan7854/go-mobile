import "./landing-page.css";
import phoneImage from "./images/app-concept.jpg";
import logoApp from "./images/logo.png";
import playStoreImage from "./images/PLAYSTORE.png";
import appStoreImage from "./images/APPLE SOTR.png";
import Layout from "../pages/Layout";
import { Outlet, Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="header1">
        <nav>
          <Link to="/">The app</Link>
          <Link to="login">Login</Link>
          <Link to="dashboard">Communities</Link>
          <Outlet />
        </nav>
        {/* <nav>
          <a href="#app">The app</a>
          <a href="#login">Login</a>
          <a href="#communites">Communities</a>
          <a href="#about">About</a>
        </nav> */}
      </div>
      <div className="row-1">
        <div className="col1">
          <img src={phoneImage} alt="" />
        </div>
        <div className="col2">
          <div className="logo-app">
            <img src={logoApp} alt="" />
          </div>
          <div className="sub-titles">
            <h1>Mobile App</h1>
            <p>Get the App</p>
          </div>
          <div className="app">
            <img src={playStoreImage} alt="" />
            <img src={appStoreImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
