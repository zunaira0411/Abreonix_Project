import "../../styles/products.css";

function ViewProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay">
      <div className="view-product-modal">

        <div className="modal-header">
          <h2>Product Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>
        </div>

        <div className="view-product-content">

          <p><strong>Product Name:</strong> {product.name}</p>

          <p><strong>Category:</strong> {product.category}</p>

          <p><strong>Supplier:</strong> {product.supplier}</p>

          <p><strong>Warehouse:</strong> {product.warehouse}</p>

          <p><strong>Price:</strong> {product.price}</p>

          <p><strong>Stock:</strong> {product.stock}</p>

          <p><strong>Status:</strong> {product.status}</p>

          <p><strong>Barcode:</strong> {product.barcode || "N/A"}</p>

          <p><strong>Description:</strong></p>

          <div className="product-description">
            {product.description || "No Description"}
          </div>

        </div>

      </div>
    </div>
  );
}

export default ViewProductModal;