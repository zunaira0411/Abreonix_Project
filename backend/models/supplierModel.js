const pool = require("../config/db");

// Get All Suppliers
const getSuppliers = async () => {
  const result = await pool.query(
    "SELECT * FROM suppliers ORDER BY id ASC"
  );

  return result.rows;
};

// Add Supplier
const addSupplier = async (
  name,
  contact,
  email,
  location,
  status
) => {
  const result = await pool.query(
    `INSERT INTO suppliers
    (name, contact, email, location, status)
    VALUES ($1,$2,$3,$4,$5)
    RETURNING *`,
    [name, contact, email, location, status]
  );

  return result.rows[0];
};

// Update Supplier
const updateSupplier = async (
  id,
  name,
  contact,
  email,
  location,
  status
) => {
  const result = await pool.query(
    `UPDATE suppliers
     SET
     name=$1,
     contact=$2,
     email=$3,
     location=$4,
     status=$5
     WHERE id=$6
     RETURNING *`,
    [name, contact, email, location, status, id]
  );

  return result.rows[0];
};

// Delete Supplier
const deleteSupplier = async (id) => {
  await pool.query(
    "DELETE FROM suppliers WHERE id=$1",
    [id]
  );
};

module.exports = {
  getSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier,
};