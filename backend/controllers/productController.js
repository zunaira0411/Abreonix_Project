const {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../models/productModel");

// Get Products
const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts();

    res.status(200).json(products);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Add Product
const createProduct = async (req, res) => {
  try {
    const {
      name,
      category,
      supplier,
      warehouse,
      stock,
      price,
      barcode,
      description,
    } = req.body;

    if (
      !name ||
      !category ||
      !supplier ||
      !warehouse ||
      !stock ||
      !price
    ) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    let status = "In Stock";

    if (Number(stock) === 0) {
      status = "Out of Stock";
    } else if (Number(stock) < 10) {
      status = "Low Stock";
    }

    const product_id =
      "PRD-" + Date.now().toString().slice(-5);

    const product = await addProduct({
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
    });

    res.status(201).json({
      message: "Product Added Successfully",
      product,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Product
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      category,
      supplier,
      warehouse,
      stock,
      price,
      barcode,
      description,
    } = req.body;

    let status = "In Stock";

    if (Number(stock) === 0)
      status = "Out of Stock";
    else if (Number(stock) < 10)
      status = "Low Stock";

    const product = await updateProduct(id, {
      name,
      category,
      supplier,
      warehouse,
      stock,
      price,
      barcode,
      description,
      status,
    });

    res.json({
      message: "Product Updated Successfully",
      product,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Product
const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteProduct(id);

    res.json({
      message: "Product Deleted Successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getProducts,
  createProduct,
  editProduct,
  removeProduct,
};