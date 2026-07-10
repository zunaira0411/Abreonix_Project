import "../../styles/purchaseOrders.css";

function ViewPurchaseOrderModal({
  order,
  onClose,
}) {
  if (!order) return null;

  return (
    <div className="modal-overlay">

      <div className="view-purchase-modal">

        <div className="modal-header">

          <h2>Purchase Order Details</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✖
          </button>

        </div>

        <div className="view-purchase-content">

          <p>
            <strong>Order ID:</strong> {order.id}
          </p>

          <p>
            <strong>Product:</strong> {order.product}
          </p>

          <p>
            <strong>Supplier:</strong> {order.supplier}
          </p>

          <p>
            <strong>Warehouse:</strong> {order.warehouse}
          </p>

          <p>
            <strong>Quantity:</strong> {order.quantity}
          </p>

          <p>
            <strong>Unit Price:</strong> ₹{order.unitPrice}
          </p>

          <p>
            <strong>Total Amount:</strong> {order.total}
          </p>

          <p>
            <strong>Order Date:</strong> {order.orderDate}
          </p>

          <p>
            <strong>Status:</strong> {order.status}
          </p>

          <div className="purchase-description">

            <strong>Description</strong>

            <p>{order.description}</p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ViewPurchaseOrderModal;