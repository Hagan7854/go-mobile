import logo from "./image/logo.png";
import padlock from "./image/padlock.svg";
import menuIcon from "./image/menu.svg";
import "./login.css";

export default function Login() {
  return (
    <div className="background-login">
      <div className="header">
        <div className="logo">
          <img src={logo} alt="Go logo" />
        </div>
        <div className="nav">
          <div className="icon">
            <img src={padlock} alt="" />
          </div>
          <div className="nav-text">
            <p>Login</p>
          </div>
          <div className="icon">
            <img src={menuIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
