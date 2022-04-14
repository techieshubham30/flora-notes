import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="signup-container">
      <h1 className="signup-title">SIGN UP</h1>
      <form className="display-flex-column">
        
        <div className="display-flex-row">
          <label className="form-label">Email</label>
          <input
            type="email"
            class="form-field"
            placeholder="shubham@gmail.com"
          />
        </div>
        <div className="display-flex-row">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-field"
            placeholder="Enter new password"
          />
        </div>
        <div className="display-flex-row">
          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-field"
            placeholder="Re-type your password"
          />
        </div>

        <button className="register-btn">Register</button>
        <p>
          Already registered ?
          <Link to="/signin" className="login-link">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
};

export { Signup };
