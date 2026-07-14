const {
  getInventory,
  addInventory,
  updateInventory,
  deleteInventory,
} = require("../models/inventoryModel");

// Get All Inventory
const getAllInventory = async (req, res) => {
  try {
    const inventory = await getInventory();

    res.json(inventory);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Add Inventory
const createInventory = async (req, res) => {
  try {
    const inventory = await addInventory(req.body);

    res.status(201).json(inventory);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Inventory
const editInventory = async (req, res) => {
  try {
    const inventory = await updateInventory(
      req.params.id,
      req.body
    );

    res.json(inventory);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Inventory
const removeInventory = async (req, res) => {
  try {
    await deleteInventory(req.params.id);

    res.json({
      message: "Inventory Deleted Successfully",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllInventory,
  createInventory,
  editInventory,
  removeInventory,
};