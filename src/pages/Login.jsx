import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "../styles/login.css";

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <div className="login-header">
          <h1>📦 Smart Inventory</h1>
          <p>Supply Chain & Inventory Management System</p>
        </div>

        <form className="login-form">

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#">Forgot Password?</a>
          </div>

          <button className="login-btn">
            Login
          </button>

          <div className="register-link">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </div>

        </form>

      </div>

    </div>
  );
}

export default Login;