const {
  getWarehouses,
  addWarehouse,
  updateWarehouse,
  deleteWarehouse,
} = require("../models/warehouseModel");

// Get All
const getAllWarehouses = async (req, res) => {
  try {
    const warehouses = await getWarehouses();

    res.json(warehouses);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Add
const createWarehouse = async (req, res) => {
  try {
    const {
      name,
      manager,
      location,
      capacity,
      status,
      description,
    } = req.body;

    const warehouse = await addWarehouse(
      name,
      manager,
      location,
      capacity,
      status,
      description
    );

    res.status(201).json(warehouse);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update
const editWarehouse = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      name,
      manager,
      location,
      capacity,
      status,
      description,
    } = req.body;

    const warehouse = await updateWarehouse(
      id,
      name,
      manager,
      location,
      capacity,
      status,
      description
    );

    res.json(warehouse);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete
const removeWarehouse = async (req, res) => {
  try {
    await deleteWarehouse(req.params.id);

    res.json({
      message: "Warehouse Deleted",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllWarehouses,
  createWarehouse,
  editWarehouse,
  removeWarehouse,
};