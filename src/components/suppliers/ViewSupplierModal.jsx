import "../../styles/suppliers.css";

function ViewSupplierModal({
  supplier,
  onClose,
}) {
  if (!supplier) return null;

  return (
    <div className="modal-overlay">

      <div className="view-supplier-modal">

        <div className="modal-header">

          <h2>Supplier Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>

        </div>

        <div className="view-supplier-content">

          <p>
            <strong>Supplier Name:</strong>{" "}
            {supplier.name}
          </p>

          <p>
            <strong>Contact:</strong>{" "}
            {supplier.contact}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {supplier.email}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {supplier.location}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            <span
              className={`supplier-status ${supplier.status.toLowerCase()}`}
            >
              {supplier.status}
            </span>
          </p>

          <p>
            <strong>Address:</strong>
          </p>

          <div className="supplier-description">
            {supplier.address || "No Address"}
          </div>

          <p style={{ marginTop: "15px" }}>
            <strong>Description:</strong>
          </p>

          <div className="supplier-description">
            {supplier.description || "No Description"}
          </div>

        </div>

      </div>

    </div>
  );
}

export default ViewSupplierModal;