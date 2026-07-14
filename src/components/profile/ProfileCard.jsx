import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "../../styles/profile.css";

function ProfileCard() {
  const [editing, setEditing] = useState(false);

  const [user, setUser] = useState({
    id: "",
    full_name: "",
    email: "",
    phone: "",
    role: "",
    address: "",
  });

  // Load Profile from Backend
  const fetchProfile = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/profile"
      );

      setUser(res.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load profile");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/profile/${user.id}`,
        user
      );

      toast.success("Profile Updated Successfully");

      setEditing(false);

      fetchProfile();
    } catch (error) {
      console.log(error);
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-card">

        <div className="profile-image">
          <div className="profile-placeholder">
            {user.full_name
              ? user.full_name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
              : "U"}
          </div>
        </div>

        <div className="profile-details">
          <h2>{user.full_name}</h2>
          <h4>{user.role}</h4>
        </div>

        <div className="profile-form">          <div>
            <label>Full Name</label>

            <input
              type="text"
              name="full_name"
              value={user.full_name}
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