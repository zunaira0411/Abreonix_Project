const pool = require("../config/db");

// Get All Warehouses
const getWarehouses = async () => {
  const result = await pool.query(
    "SELECT * FROM warehouses ORDER BY id ASC"
  );

  return result.rows;
};

// Add Warehouse
const addWarehouse = async (
  name,
  manager,
  location,
  capacity,
  status,
  description
) => {
  const result = await pool.query(
    `INSERT INTO warehouses
    (name, manager, location, capacity, status, description)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *`,
    [
      name,
      manager,
      location,
      capacity,
      status,
      description,
    ]
  );

  return result.rows[0];
};

// Update Warehouse
const updateWarehouse = async (
  id,
  name,
  manager,
  location,
  capacity,
  status,
  description
) => {
  const result = await pool.query(
    `UPDATE warehouses
     SET
     name=$1,
     manager=$2,
     location=$3,
     capacity=$4,
     status=$5,
     description=$6
     WHERE id=$7
     RETURNING *`,
    [
      name,
      manager,
      location,
      capacity,
      status,
      description,
      id,
    ]
  );

  return result.rows[0];
};

// Delete Warehouse
const deleteWarehouse = async (id) => {
  await pool.query(
    "DELETE FROM warehouses WHERE id=$1",
    [id]
  );
};

module.exports = {
  getWarehouses,
  addWarehouse,
  updateWarehouse,
  deleteWarehouse,
};