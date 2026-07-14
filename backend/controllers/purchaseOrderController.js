const {
  getOrders,
  addOrder,
  updateOrder,
  deleteOrder,
} = require("../models/purchaseOrderModel");

// Get All Orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await getOrders();

    res.json(orders);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Create Order
const createOrder = async (req, res) => {
  try {
    const {
      product,
      supplier,
      warehouse,
      quantity,
      unit_price,
      total,
      order_date,
      status,
      description,
    } = req.body;

    const order = await addOrder(
      product,
      supplier,
      warehouse,
      quantity,
      unit_price,
      total,
      order_date,
      status,
      description
    );

    res.status(201).json(order);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Update Order
const editOrder = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      product,
      supplier,
      warehouse,
      quantity,
      unit_price,
      total,
      order_date,
      status,
      description,
    } = req.body;

    const order = await updateOrder(
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
    );

    res.json(order);

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Order
const removeOrder = async (req, res) => {
  try {
    await deleteOrder(req.params.id);

    res.json({
      message: "Purchase Order Deleted",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllOrders,
  createOrder,
  editOrder,
  removeOrder,
};