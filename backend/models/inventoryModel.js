const pool = require("../config/db");

// Get All Inventory
const getInventory = async () => {
  const result = await pool.query(
    "SELECT * FROM inventory ORDER BY id ASC"
  );

  return result.rows;
};

// Add Inventory
const addInventory = async (inventory) => {
  const {
    inventory_id,
    product,
    warehouse,
    stock,
    status,
    description,
  } = inventory;

  const result = await pool.query(
    `INSERT INTO inventory
    (inventory_id, product, warehouse, stock, status, description)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING *`,
    [
      inventory_id,
      product,
      warehouse,
      stock,
      status,
      description,
    ]
  );

  return result.rows[0];
};

// Update Inventory
const updateInventory = async (id, inventory) => {
  const {
    product,
    warehouse,
    stock,
    status,
    description,
  } = inventory;

  const result = await pool.query(
    `UPDATE inventory
     SET
     product=$1,
     warehouse=$2,
     stock=$3,
     status=$4,
     description=$5
     WHERE id=$6
     RETURNING *`,
    [
      product,
      warehouse,
      stock,
      status,
      description,
      id,
    ]
  );

  return result.rows[0];
};

// Delete Inventory
const deleteInventory = async (id) => {
  await pool.query(
    "DELETE FROM inventory WHERE id=$1",
    [id]
  );
};

module.exports = {
  getInventory,
  addInventory,
  updateInventory,
  deleteInventory,
};