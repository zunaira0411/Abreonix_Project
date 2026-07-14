import { useState } from "react";
import {
  FaBell,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import "../../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <div className="navbar">

      <div className="search-box">
        <FaSearch />

        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="navbar-right">

        {/* Notifications */}

        <div className="icon-wrapper">

          <button
            className="icon-btn"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowProfile(false);
            }}
          >
            <FaBell />
            <span className="notification-dot"></span>
          </button>

          {showNotifications && (

            <div className="dropdown notification-dropdown">

              <h4>Notifications</h4>

              <div className="dropdown-item">
                🔴 Mouse stock is below 5
              </div>

              <div className="dropdown-item">
                🟢 New Supplier Added
              </div>

              <div className="dropdown-item">
                🟡 Order Delivered
              </div>

            </div>

          )}

        </div>

        {/* Profile */}

        <div className="icon-wrapper">

          <button
            className="icon-btn"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
            }}
          >
            <FaUserCircle />
          </button>

          {showProfile && (

            <div className="dropdown profile-dropdown">

              <div
                className="dropdown-item"
                onClick={() => {
                  navigate("/profile");
                  setShowProfile(false);
                }}
                style={{ cursor: "pointer" }}
              >
                👤 My Profile
              </div>

              <div
                className="dropdown-item"
                onClick={() => {
                  toast.info("Settings feature coming soon.");
                  setShowProfile(false);
                }}
                style={{ cursor: "pointer" }}
              >
                ⚙️ Settings
              </div>

              <div
                className="dropdown-item logout"
                onClick={handleLogout}
                style={{ cursor: "pointer" }}
              >
                🚪 Logout
              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}

export default Navbar;