import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../../styles/inventory.css";

function InventoryModal({
  isOpen,
  onClose,
  fetchInventory,
  editingItem,
}) {
  const [formData, setFormData] = useState({
    product: "",
    warehouse: "",
    stock: "",
    description: "",
  });

  useEffect(() => {
    if (editingItem) {
      setFormData({
        product: editingItem.product,
        warehouse: editingItem.warehouse,
        stock: editingItem.stock,
        description: editingItem.description || "",
      });
    } else {
      setFormData({
        product: "",
        warehouse: "",
        stock: "",
        description: "",
      });
    }
  }, [editingItem, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveInventory = async (e) => {
    e.preventDefault();

    if (
      !formData.product ||
      !formData.warehouse ||
      !formData.stock
    ) {
      toast.error("Please fill all required fields!");
      return;
    }

    const status =
      Number(formData.stock) === 0
        ? "Out of Stock"
        : Number(formData.stock) < 10
        ? "Low Stock"
        : "In Stock";

    try {
      if (editingItem) {
        await axios.put(
          `http://localhost:5000/api/inventory/${editingItem.id}`,
          {
            ...formData,
            stock: Number(formData.stock),
            status,
          }
        );

        toast.success("Inventory Updated Successfully!");
      } else {
        const inventoryId = `INV-${Date.now()}`;

        await axios.post(
          "http://localhost:5000/api/inventory",
          {
            inventory_id: inventoryId,
            ...formData,
            stock: Number(formData.stock),
            status,
          }
        );

        toast.success("Inventory Added Successfully!");
      }

      await fetchInventory();

      setFormData({
        product: "",
        warehouse: "",
        stock: "",
        description: "",
      });

      onClose();

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="inventory-modal">

        <div className="modal-header">
          <h2>
            {editingItem
              ? "Edit Inventory"
              : "Add Inventory"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <form
          className="inventory-form"
          onSubmit={saveInventory}
        >

          <div className="form-group">
            <label>Product</label>

            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="Enter Product Name"
            />
          </div>

          <div className="form-group">
            <label>Warehouse</label>

            <input
              type="text"
              name="warehouse"
              value={formData.warehouse}
              onChange={handleChange}
              placeholder="Enter Warehouse"
            />
          </div>

          <div className="form-group">
            <label>Stock</label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Enter Stock Quantity"
            />
          </div>

          <div className="form-group full-width">
            <label>Description</label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Inventory Description"
            ></textarea>
          </div>

          <div className="form-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              {editingItem
                ? "Update Inventory"
                : "Save Inventory"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default InventoryModal;