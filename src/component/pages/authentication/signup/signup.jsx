import "./signup.css";
import person from "../login/image/username.svg";
import passwordIcon from "../login/image/password.svg";

export default function Signup() {
  return (
    <div>
      <div className="signup-body">
        <div className="frame">
          <form>
            <div className="sign-up-input">
              <div>
                <label htmlFor="sigUpName">Name</label>
              </div>
              <div className="wrapper">
                <input
                  type="text"
                  id="signUpName"
                  name="name"
                  placeholder="enter username"
                />
                <img src={person} alt="" />
              </div>
            </div>
            <div className="sign-up-input spacing">
              <div>
                <label htmlFor="sigUpEmail">Email</label>
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
            </div>
            <div className="sign-up-input spacing">
              <div>
                <label htmlFor="sigUpPassword">Password</label>
              </div>
              <div className="wrapper">
                <input
                  type="password"
                  id="signUpPassword"
                  name="password"
                  required
                />
                <img src={passwordIcon} alt="" />
              </div>
            </div>
            <div className="sign-up-input spacing">
              <div>
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
              <div className="wrapper">
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <img src={passwordIcon} alt="" />
              </div>
            </div>
            <div className="signup-button">
              <button>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
