const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Create Tables
const createTables = async () => {
  try {
    // Users Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        full_name VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Users table ready");

    // Products Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        product_id VARCHAR(20) UNIQUE NOT NULL,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(100) NOT NULL,
        supplier VARCHAR(100) NOT NULL,
        warehouse VARCHAR(100) NOT NULL,
        stock INT NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        barcode VARCHAR(100),
        description TEXT,
        status VARCHAR(30) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Products table ready");

  } catch (error) {
    console.log("❌ Table Creation Error:", error.message);
  }
};

pool
  .connect()
  .then(async () => {
    console.log("✅ PostgreSQL Connected Successfully");
    await createTables();
  })
  .catch((err) => {
    console.log("❌ Database Connection Error:", err.message);
  });

module.exports = pool;