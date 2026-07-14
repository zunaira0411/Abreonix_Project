const pool = require("../config/db");

// Get All Orders
const getOrders = async () => {
  const result = await pool.query(
    "SELECT * FROM purchase_orders ORDER BY id ASC"
  );

  return result.rows;
};

// Add Order
const addOrder = async (
  product,
  supplier,
  warehouse,
  quantity,
  unit_price,
  total,
  order_date,
  status,
  description
) => {
  const result = await pool.query(
    `INSERT INTO purchase_orders
    (product, supplier, warehouse, quantity, unit_price, total, order_date, status, description)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
    RETURNING *`,
    [
      product,
      supplier,
      warehouse,
      quantity,
      unit_price,
      total,
      order_date,
      status,
      description,
    ]
  );

  return result.rows[0];
};

// Update Order
const updateOrder = async (
  id,
  product,
  supplier,
  warehouse,
  quantity,
  unit_price,
  total,
  order_date,
  status,
  description
) => {
  const result = await pool.query(
    `UPDATE purchase_orders
     SET
     product=$1,
     supplier=$2,
     warehouse=$3,
     quantity=$4,
     unit_price=$5,
     total=$6,
     order_date=$7,
     status=$8,
     description=$9
     WHERE id=$10
     RETURNING *`,
    [
      product,
      supplier,
      warehouse,
      quantity,
      unit_price,
      total,
      order_date,
      status,
      description,
      id,
    ]
  );

  return result.rows[0];
};

// Delete Order
const deleteOrder = async (id) => {
  await pool.query(
    "DELETE FROM purchase_orders WHERE id=$1",
    [id]
  );
};

module.exports = {
  getOrders,
  addOrder,
  updateOrder,
  deleteOrder,
};