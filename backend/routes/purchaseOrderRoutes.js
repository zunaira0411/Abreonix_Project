const express = require("express");
const router = express.Router();

const {
  getAllOrders,
  createOrder,
  editOrder,
  removeOrder,
} = require("../controllers/purchaseOrderController");

router.get("/", getAllOrders);

router.post("/", createOrder);

router.put("/:id", editOrder);

router.delete("/:id", removeOrder);

module.exports = router;