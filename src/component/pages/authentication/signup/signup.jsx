import "./signup.css";

export default function Signup() {
  return (
    <div>
      <div className="signup-body">
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
            </div>
          </div>
          <div className="signup-button">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}
