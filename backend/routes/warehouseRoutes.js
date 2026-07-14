const express = require("express");

const router = express.Router();

const {
  getAllWarehouses,
  createWarehouse,
  editWarehouse,
  removeWarehouse,
} = require("../controllers/warehouseController");

router.get("/", getAllWarehouses);

router.post("/", createWarehouse);

router.put("/:id", editWarehouse);

router.delete("/:id", removeWarehouse);

module.exports = router;