const express = require("express");
const router = express.Router();

const {
  getAllSuppliers,
  createSupplier,
  editSupplier,
  removeSupplier,
} = require("../controllers/supplierController");

router.get("/", getAllSuppliers);

router.post("/", createSupplier);

router.put("/:id", editSupplier);

router.delete("/:id", removeSupplier);

module.exports = router;