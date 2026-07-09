import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaUserTag } from "react-icons/fa";
import "../styles/register.css";

function Register() {
  return (
    <div className="register-container">
      <div className="register-card">

        <div className="register-header">
          <h1>📦 Smart Inventory</h1>
          <p>Create your account</p>
        </div>

        <form className="register-form">

          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Full Name"
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email Address"
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="input-group">
            <FaUserTag className="input-icon" />
            <select>
              <option>Select Role</option>
              <option>Admin</option>
              <option>Supplier</option>
              <option>Warehouse Manager</option>
            </select>
          </div>

          <button className="register-btn">
            Create Account
          </button>

          <div className="login-link">
            Already have an account?
            <Link to="/login"> Login</Link>
          </div>

        </form>

      </div>
    </div>
  );
}

export default Register;