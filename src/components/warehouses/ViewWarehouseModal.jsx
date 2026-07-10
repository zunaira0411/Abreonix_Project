import "../../styles/warehouses.css";

function ViewWarehouseModal({
  warehouse,
  onClose,
}) {
  if (!warehouse) return null;

  return (
    <div className="modal-overlay">

      <div className="view-warehouse-modal">

        <div className="modal-header">

          <h2>Warehouse Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>

        </div>

        <div className="view-warehouse-content">

          <p>
            <strong>ID:</strong> {warehouse.id}
          </p>

          <p>
            <strong>Warehouse Name:</strong> {warehouse.name}
          </p>

          <p>
            <strong>Manager:</strong> {warehouse.manager}
          </p>

          <p>
            <strong>Location:</strong> {warehouse.location}
          </p>

          <p>
            <strong>Capacity:</strong> {warehouse.capacity}
          </p>

          <p>
            <strong>Status:</strong> {warehouse.status}
          </p>

          <div>

            <strong>Description:</strong>

            <div className="warehouse-description">

              {warehouse.description || "No Description"}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ViewWarehouseModal;