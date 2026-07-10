import "../../styles/inventory.css";

function ViewInventoryModal({
  item,
  onClose,
}) {
  if (!item) return null;

  return (
    <div className="modal-overlay">

      <div className="view-inventory-modal">

        <div className="modal-header">

          <h2>Inventory Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>

        </div>

        <div className="view-inventory-content">

          <p>
            <strong>Inventory ID:</strong> {item.id}
          </p>

          <p>
            <strong>Product:</strong> {item.product}
          </p>

          <p>
            <strong>Warehouse:</strong> {item.warehouse}
          </p>

          <p>
            <strong>Stock:</strong> {item.stock}
          </p>

          <p>
            <strong>Status:</strong> {item.status}
          </p>

          <div className="inventory-description">

            <strong>Description</strong>

            <p>{item.description}</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ViewInventoryModal;