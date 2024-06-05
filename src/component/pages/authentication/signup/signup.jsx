import "./signup.css";
import person from "../login/image/username.svg";
import passwordIcon from "../login/image/password.svg";

export default function Signup() {
  return (
    <div>
      <div className="signup-body">
        <div className="frame">
          <form>
            <div className="wrapper">
              <input
                type="text"
                id="signUpName"
                name="name"
                placeholder="enter username"
              />
              <img src={person} alt="" />
            </div>
            <div className="wrapper">
              <input
                type="email"
                id="signUpEmail"
                name="Email"
                required
                placeholder="example@.x.com"
              />
              <img src={person} alt="" />
            </div>
            <div className="wrapper">
              <input
                type="password"
                id="signUpPassword"
                name="password"
                placeholder="●●●●●●●●"
                required
              />
              <img src={passwordIcon} alt="" />
            </div>
            <div className="wrapper">
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="●●●●●●●●"
                required
              />
              <img src={passwordIcon} alt="" />
            </div>
            <div className="signup-button btn">
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
