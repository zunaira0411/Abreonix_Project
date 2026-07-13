const pool = require("../config/db");

// Get All Products
const getAllProducts = async () => {
  const result = await pool.query(
    "SELECT * FROM products ORDER BY id ASC"
  );

  return result.rows;
};

// Add Product
const addProduct = async (product) => {
  const {
    product_id,
    name,
    category,
    supplier,
    warehouse,
    stock,
    price,
    barcode,
    description,
    status,
  } = product;

  const result = await pool.query(
    `INSERT INTO products
    (product_id, name, category, supplier, warehouse, stock, price, barcode, description, status)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
    RETURNING *`,
    [
      product_id,
      name,
      category,
      supplier,
      warehouse,
      stock,
      price,
      barcode,
      description,
      status,
    ]
  );

  return result.rows[0];
};

// Update Product
const updateProduct = async (id, product) => {
  const {
    name,
    category,
    supplier,
    warehouse,
    stock,
    price,
    barcode,
    description,
    status,
  } = product;

  const result = await pool.query(
    `UPDATE products
     SET name=$1,
         category=$2,
         supplier=$3,
         warehouse=$4,
         stock=$5,
         price=$6,
         barcode=$7,
         description=$8,
         status=$9
     WHERE id=$10
     RETURNING *`,
    [
      name,
      category,
      supplier,
      warehouse,
      stock,
      price,
      barcode,
      description,
      status,
      id,
    ]
  );

  return result.rows[0];
};

// Delete Product
const deleteProduct = async (id) => {
  await pool.query(
    "DELETE FROM products WHERE id = $1",
    [id]
  );
};

module.exports = {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};