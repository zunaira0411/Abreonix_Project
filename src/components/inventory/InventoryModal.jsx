import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "../../styles/inventory.css";

function InventoryModal({
  isOpen,
  onClose,
  inventory,
  setInventory,
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

  const saveInventory = (e) => {
    e.preventDefault();

    if (
      !formData.product ||
      !formData.warehouse ||
      !formData.stock
    ) {
      toast.error("Please fill all required fields!");
      return;
    }

    let status = "In Stock";

    if (Number(formData.stock) === 0) {
      status = "Out of Stock";
    } else if (Number(formData.stock) < 10) {
      status = "Low Stock";
    }    if (editingItem) {

      const updatedInventory = inventory.map((item) =>
        item.id === editingItem.id
          ? {
              ...item,
              product: formData.product,
              warehouse: formData.warehouse,
              stock: Number(formData.stock),
              status,
              description: formData.description,
            }
          : item
      );

      setInventory(updatedInventory);

      toast.success("Inventory Updated Successfully!");

    } else {

      const lastItem = inventory[inventory.length - 1];

      const nextId = lastItem
        ? `INV-${Number(lastItem.id.split("-")[1]) + 1}`
        : "INV-1001";

      const newItem = {
        id: nextId,
        product: formData.product,
        warehouse: formData.warehouse,
        stock: Number(formData.stock),
        status,
        description: formData.description,
      };

      setInventory([...inventory, newItem]);

      toast.success("Inventory Added Successfully!");
    }

    setFormData({
      product: "",
      warehouse: "",
      stock: "",
      description: "",
    });

    onClose();
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