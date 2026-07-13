const pool = require("../config/db");

// Find user by email
const findUserByEmail = async (email) => {
  const result = await pool.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  return result.rows[0];
};

// Create new user
const createUser = async (fullName, email, password) => {
  const result = await pool.query(
    `INSERT INTO users (full_name, email, password)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [fullName, email, password]
  );

  return result.rows[0];
};

module.exports = {
  findUserByEmail,
  createUser,
};