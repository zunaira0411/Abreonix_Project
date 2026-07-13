import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import "../../styles/profile.css";

function ProfileCard() {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    name: "Zunaira Fatima",
    email: "zunaira@example.com",
    phone: "+91 9876543210",
    role: "Warehouse Manager",
    address: "Prayagraj, Uttar Pradesh",
  });

  useEffect(() => {
    const savedProfile = localStorage.getItem("profile");

    if (savedProfile) {
      setUser(JSON.parse(savedProfile));
    }
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(user));

    toast.success("Profile Updated Successfully");

    setEditing(false);
  };

  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="profile-image">
          <div className="profile-placeholder">
            ZF
          </div>
        </div>

        <div className="profile-details">
          <h2>{user.name}</h2>
          <h4>{user.role}</h4>
        </div>

        <div className="profile-form">

          <div>
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div>
            <label>Phone Number</label>

            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div>
            <label>Role</label>

            <input
              type="text"
              name="role"
              value={user.role}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

          <div className="full-width">
            <label>Address</label>

            <textarea
              name="address"
              value={user.address}
              onChange={handleChange}
              disabled={!editing}
            />
          </div>

        </div>

        <div className="button-group">

          {!editing ? (
            <button
              className="edit-btn"
              onClick={() => setEditing(true)}
            >
              Edit Profile
            </button>
          ) : (
            <button
              className="save-btn"
              onClick={saveProfile}
            >
              Save Changes
            </button>
          )}

        </div>

      </div>
    </div>
  );
}

export default ProfileCard;