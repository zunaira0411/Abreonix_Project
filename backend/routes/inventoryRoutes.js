
const express = require("express");

const router = express.Router();

const {
  getAllInventory,
  createInventory,
  editInventory,
  removeInventory,
} = require("../controllers/inventoryController");

router.get("/", getAllInventory);

router.post("/", createInventory);

router.put("/:id", editInventory);

router.delete("/:id", removeInventory);

module.exports = router;