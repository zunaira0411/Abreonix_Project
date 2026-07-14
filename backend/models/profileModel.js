const pool = require("../config/db");

// Get Profile
const getProfile = async (id) => {
  const result = await pool.query(
    `
    SELECT
      id,
      full_name,
      email,
      phone,
      role,
      address
    FROM users
    WHERE id = $1
    `,
    [id]
  );

  return result.rows[0];
};

// Update Profile
const updateProfile = async (id, user) => {
  const {
    full_name,
    email,
    phone,
    role,
    address,
  } = user;

  const result = await pool.query(
    `
    UPDATE users
    SET
      full_name = $1,
      email = $2,
      phone = $3,
      role = $4,
      address = $5
    WHERE id = $6
    RETURNING *
    `,
    [
      full_name,
      email,
      phone,
      role,
      address,
      id,
    ]
  );

  return result.rows[0];
};

module.exports = {
  getProfile,
  updateProfile,
};