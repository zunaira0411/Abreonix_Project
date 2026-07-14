const {
  getSuppliers,
  addSupplier,
  updateSupplier,
  deleteSupplier,
} = require("../models/supplierModel");

// Get All
const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await getSuppliers();

    res.json(suppliers);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Add
const createSupplier = async (req, res) => {
  try {
    const {
      name,
      contact,
      email,
      location,
      status,
    } = req.body;

    const supplier = await addSupplier(
      name,
      contact,
      email,
      location,
      status
    );

    res.status(201).json(supplier);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update
const editSupplier = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      contact,
      email,
      location,
      status,
    } = req.body;

    const supplier = await updateSupplier(
      id,
      name,
      contact,
      email,
      location,
      status
    );

    res.json(supplier);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete
const removeSupplier = async (req, res) => {
  try {
    await deleteSupplier(req.params.id);

    res.json({
      message: "Supplier Deleted",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllSuppliers,
  createSupplier,
  editSupplier,
  removeSupplier,
};