
import { toast } from "react-toastify";
import { useState } from "react";
import "../../styles/products.css";

function ProductModal({
  isOpen,
  onClose,
  products,
  setProducts,
}) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    supplier: "",
    warehouse: "",
    price: "",
    stock: "",
    barcode: "",
    description: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const saveProduct = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.category ||
      !formData.supplier ||
      !formData.warehouse ||
      !formData.price ||
      !formData.stock
    ) {
      alert("Please fill all required fields.");
      return;
    }

    let status = "In Stock";

    if (Number(formData.stock) === 0) {
      status = "Out of Stock";
    } else if (Number(formData.stock) < 10) {
      status = "Low Stock";
    }

    const newProduct = {
      id: products.length + 1,
      name: formData.name,
      category: formData.category,
      supplier: formData.supplier,
      warehouse: formData.warehouse,
      stock: Number(formData.stock),
      price: `₹${formData.price}`,
      status,
      barcode: formData.barcode,
      description: formData.description,
    };

    setProducts([...products, newProduct]);

    setFormData({
      name: "",
      category: "",
      supplier: "",
      warehouse: "",
      price: "",
      stock: "",
      barcode: "",
      description: "",
    });

    onClose();

    toast.success("Product Added Successfully!");
  };

  return (
    <div className="modal-overlay">
      <div className="product-modal">

        <div className="modal-header">
          <h2>Add New Product</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <form
          className="product-form"
          onSubmit={saveProduct}
        >

          <div className="form-group">
            <label>Product Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Product Name"
            />
          </div>

          <div className="form-group">
            <label>Category</label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option>Electronics</option>
              <option>Accessories</option>
              <option>Office</option>
              <option>Furniture</option>
            </select>
          </div>

          <div className="form-group">
            <label>Supplier</label>

            <input
              type="text"
              name="supplier"
              value={formData.supplier}
              onChange={handleChange}
              placeholder="Supplier Name"
            />
          </div>

          <div className="form-group">
            <label>Warehouse</label>

            <input
              type="text"
              name="warehouse"
              value={formData.warehouse}
              onChange={handleChange}
              placeholder="Warehouse Name"
            />
          </div>

          <div className="form-group">
            <label>Price</label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter Price"
            />
          </div>

          <div className="form-group">
            <label>Quantity</label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="Enter Quantity"
            />
          </div>

          <div className="form-group">
            <label>Barcode / SKU</label>

            <input
              type="text"
              name="barcode"
              value={formData.barcode}
              onChange={handleChange}
              placeholder="Enter Barcode"
            />
          </div>

          <div className="form-group full-width">
            <label>Description</label>

            <textarea
              rows="4"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Product Description"
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
              Save Product
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}

export default ProductModal;