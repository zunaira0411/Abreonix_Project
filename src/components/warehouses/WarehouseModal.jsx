import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../../styles/warehouses.css";

function WarehouseModal({
  isOpen,
  onClose,
  fetchWarehouses,
  editingWarehouse,
}) {
  const [formData, setFormData] = useState({
    name: "",
    manager: "",
    location: "",
    capacity: "",
    status: "Active",
    description: "",
  });

  useEffect(() => {
    if (editingWarehouse) {
      setFormData({
        name: editingWarehouse.name,
        manager: editingWarehouse.manager,
        location: editingWarehouse.location,
        capacity: editingWarehouse.capacity,
        status: editingWarehouse.status,
        description: editingWarehouse.description || "",
      });
    } else {
      setFormData({
        name: "",
        manager: "",
        location: "",
        capacity: "",
        status: "Active",
        description: "",
      });
    }
  }, [editingWarehouse, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveWarehouse = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.manager ||
      !formData.location ||
      !formData.capacity
    ) {
      toast.error("Please fill all required fields!");
      return;
    }

    try {
      if (editingWarehouse) {
        await axios.put(
          `http://localhost:5000/api/warehouses/${editingWarehouse.id}`,
          {
            ...formData,
            capacity: Number(formData.capacity),
          }
        );

        toast.success("Warehouse Updated Successfully!");
      } else {
        await axios.post(
          "http://localhost:5000/api/warehouses",
          {
            ...formData,
            capacity: Number(formData.capacity),
          }
        );

        toast.success("Warehouse Added Successfully!");
      }

      fetchWarehouses();

      setFormData({
        name: "",
        manager: "",
        location: "",
        capacity: "",
        status: "Active",
        description: "",
      });

      onClose();

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  };  return (
    <div className="modal-overlay">
      <div className="warehouse-modal">

        <div className="modal-header">
          <h2>
            {editingWarehouse
              ? "Edit Warehouse"
              : "Add New Warehouse"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <form
          className="warehouse-form"
          onSubmit={saveWarehouse}
        >

          <div className="form-group">
            <label>Warehouse Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Warehouse Name"
            />
          </div>

          <div className="form-group">
            <label>Manager Name</label>

            <input
              type="text"
              name="manager"
              value={formData.manager}
              onChange={handleChange}
              placeholder="Enter Manager Name"
            />
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Warehouse Location"
            />
          </div>

          <div className="form-group">
            <label>Capacity</label>

            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="Enter Capacity"
            />
          </div>

          <div className="form-group">
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Description</label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Warehouse Description"
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
              {editingWarehouse
                ? "Update Warehouse"
                : "Save Warehouse"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default WarehouseModal;