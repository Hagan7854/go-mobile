import logo from "./image/logo.png";
import padlock from "./image/padlock.svg";
import menuIcon from "./image/menu.svg";
import usernameIcon from "./image/username.svg";
import passwordIcon from "./image/password.svg";
import "./login.css";
import Signup from "../signup/signup";

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
      {/* <div className="signup">
        <Signup />
      </div> */}

      <div className="body">
        <div className="welcome-text">
          <h2>Welcome</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
        </div>
        <form>
          <div className="name-wrapper">
            <div className="input-wrapper">
              <input type="text" placeholder="Email or Username" />
            </div>
            <div className="icon">
              <img src={usernameIcon} alt="" />
            </div>
          </div>
          <div className="password-wrapper">
            <div className="input-wrapper">
              <input type="text" placeholder="Password" />
            </div>
            <div className="icon">
              <img src={passwordIcon} alt="" />
            </div>
          </div>
          <div className="div-wrapper">
            <div className="row">
              <div className="col-1">
                <div className="remember-password">
                  <div className="box"></div>
                  <div className="text">Remember</div>
                </div>
              </div>
              <div className="col-2">
                <a href="#">Lost Password?</a>
              </div>
            </div>
          </div>

          <div className="button">
            <button>Log into your account</button>
          </div>
          <div className="button register-btn">
            <button>Register your account</button>
          </div>
        </form>
      </div>
    </div>
  );
}
