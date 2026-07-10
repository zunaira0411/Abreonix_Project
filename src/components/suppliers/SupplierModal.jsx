import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "../../styles/suppliers.css";

function SupplierModal({
  isOpen,
  onClose,
  suppliers,
  setSuppliers,
  editingSupplier,
}) {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    location: "",
    status: "Active",
    address: "",
    description: "",
  });

  useEffect(() => {
    if (editingSupplier) {
      setFormData({
        name: editingSupplier.name,
        contact: editingSupplier.contact,
        email: editingSupplier.email,
        location: editingSupplier.location,
        status: editingSupplier.status,
        address: editingSupplier.address || "",
        description: editingSupplier.description || "",
      });
    } else {
      setFormData({
        name: "",
        contact: "",
        email: "",
        location: "",
        status: "Active",
        address: "",
        description: "",
      });
    }
  }, [editingSupplier, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveSupplier = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.contact ||
      !formData.email ||
      !formData.location
    ) {
      toast.error("Please fill all required fields!");
      return;
    }

    if (editingSupplier) {
      const updatedSuppliers = suppliers.map((supplier) =>
        supplier.id === editingSupplier.id
          ? {
              ...supplier,
              name: formData.name,
              contact: formData.contact,
              email: formData.email,
              location: formData.location,
              status: formData.status,
              address: formData.address,
              description: formData.description,
            }
          : supplier
      );

      setSuppliers(updatedSuppliers);

      toast.success("Supplier Updated Successfully!");
    } else {
      const lastSupplier = suppliers[suppliers.length - 1];

      const nextId = lastSupplier
        ? `SUP-${Number(lastSupplier.id.split("-")[1]) + 1}`
        : "SUP-1001";

      const newSupplier = {
        id: nextId,
        name: formData.name,
        contact: formData.contact,
        email: formData.email,
        location: formData.location,
        status: formData.status,
        address: formData.address,
        description: formData.description,
      };

      setSuppliers([...suppliers, newSupplier]);

      toast.success("Supplier Added Successfully!");
    }

    setFormData({
      name: "",
      contact: "",
      email: "",
      location: "",
      status: "Active",
      address: "",
      description: "",
    });

    onClose();
  };  return (
    <div className="modal-overlay">
      <div className="supplier-modal">

        <div className="modal-header">
          <h2>
            {editingSupplier ? "Edit Supplier" : "Add New Supplier"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <form
          className="supplier-form"
          onSubmit={saveSupplier}
        >

          <div className="form-group">
            <label>Supplier Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Supplier Name"
            />
          </div>

          <div className="form-group">
            <label>Contact Number</label>

            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter Contact Number"
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group">
            <label>Location</label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Location"
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
            <label>Address</label>

            <textarea
              rows="3"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter Supplier Address"
            ></textarea>
          </div>

          <div className="form-group full-width">
            <label>Description</label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Supplier Description"
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
              {editingSupplier
                ? "Update Supplier"
                : "Save Supplier"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default SupplierModal;