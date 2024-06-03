import "./landing-page.css";
import phoneImage from "./images/app-concept.jpg";
import logo from "./images/logo.png";
import playStoreImage from "./images/PLAYSTORE.png";
import appStoreImage from "./images/APPLE SOTR.png";

export default function LandingPage() {
  return (
    <div>
      <div className="header">
        <nav>
          <a href="#app">The app</a>
          <a href="#login">Login</a>
          <a href="#communites">Communities</a>
          <a href="#about">About</a>
        </nav>
      </div>
      <div className="row">
        <div className="col-1">
          <img src={phoneImage} alt="" />
        </div>
        <div className="col-2">
          <div className="logo">
            <img src={logo} alt="" />
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
