import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../../styles/purchaseOrders.css";

function PurchaseOrderModal({
  isOpen,
  onClose,
  orders,
  setOrders,
  editingOrder,
  fetchOrders,
}) {
  const [formData, setFormData] = useState({
    product: "",
    supplier: "",
    warehouse: "",
    quantity: "",
    unitPrice: "",
    orderDate: "",
    status: "Pending",
    description: "",
  });

  useEffect(() => {
    if (editingOrder) {
      setFormData({
        product: editingOrder.product,
        supplier: editingOrder.supplier,
        warehouse: editingOrder.warehouse,
        quantity: editingOrder.quantity,
        unitPrice: editingOrder.unitPrice,
        orderDate: editingOrder.orderDate,
        status: editingOrder.status,
        description: editingOrder.description || "",
      });
    } else {
      setFormData({
        product: "",
        supplier: "",
        warehouse: "",
        quantity: "",
        unitPrice: "",
        orderDate: "",
        status: "Pending",
        description: "",
      });
    }
  }, [editingOrder, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveOrder = async (e) => {
    e.preventDefault();

    if (
      !formData.product ||
      !formData.supplier ||
      !formData.warehouse ||
      !formData.quantity ||
      !formData.unitPrice ||
      !formData.orderDate
    ) {
      toast.error("Please fill all required fields!");
      return;
    }

    const orderData = {
      product: formData.product,
      supplier: formData.supplier,
      warehouse: formData.warehouse,
      quantity: Number(formData.quantity),
      unit_price: Number(formData.unitPrice),
      total:
        Number(formData.quantity) *
        Number(formData.unitPrice),
      order_date: formData.orderDate,
      status: formData.status,
      description: formData.description,
    };

    try {
      if (editingOrder) {
        await axios.put(
          `http://localhost:5000/api/purchase-orders/${editingOrder.id}`,
          orderData
        );

        toast.success(
          "Purchase Order Updated Successfully!"
        );
      } else {
        await axios.post(
          "http://localhost:5000/api/purchase-orders",
          orderData
        );

        toast.success(
          "Purchase Order Added Successfully!"
        );
      }

      fetchOrders();

      setFormData({
        product: "",
        supplier: "",
        warehouse: "",
        quantity: "",
        unitPrice: "",
        orderDate: "",
        status: "Pending",
        description: "",
      });

      onClose();

    } catch (error) {
      console.log(error);

      toast.error("Something went wrong!");
    }
  };  return (
    <div className="modal-overlay">
      <div className="purchase-modal">

        <div className="modal-header">
          <h2>
            {editingOrder
              ? "Edit Purchase Order"
              : "Add Purchase Order"}
          </h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <form
          className="purchase-form"
          onSubmit={saveOrder}
        >

          <div className="form-group">
            <label>Product</label>

            <input
              type="text"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="Enter Product"
            />
          </div>

          <div className="form-group">
            <label>Supplier</label>

            <input
              type="text"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              placeholder="Enter Supplier"
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
            <label>Quantity</label>

            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter Quantity"
            />
          </div>

          <div className="form-group">
            <label>Unit Price (₹)</label>

            <input
              type="number"
              name="unitPrice"
              value={formData.unitPrice}
              onChange={handleChange}
              placeholder="Enter Unit Price"
            />
          </div>

          <div className="form-group">
            <label>Order Date</label>

            <input
              type="date"
              name="orderDate"
              value={formData.orderDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Description</label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Order Description"
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
              {editingOrder
                ? "Update Order"
                : "Save Order"}
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default PurchaseOrderModal;