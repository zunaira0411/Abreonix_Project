import axios from "axios";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import "../../styles/purchaseOrders.css";

function PurchaseOrderTable({
  orders,
  allOrders,
  setOrders,
  onEdit,
  onView,
  fetchOrders,
}) {

  const deleteOrder = (id) => {

    Swal.fire({
      title: "Delete Purchase Order?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then(async (result) => {

      if (result.isConfirmed) {

        try {

          await axios.delete(
            `http://localhost:5000/api/purchase-orders/${id}`
          );

          fetchOrders();

          Swal.fire({
            title: "Deleted!",
            text: "Purchase Order deleted successfully.",
            icon: "success",
            timer: 1800,
            showConfirmButton: false,
          });

        } catch (error) {

          console.log(error);

          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Unable to delete purchase order!",
          });

        }

      }

    });

  };

  return (

    <div className="purchase-table-card">

      <table className="purchase-table">

        <thead>

          <tr>

            <th>ID</th>

            <th>Product</th>

            <th>Supplier</th>

            <th>Warehouse</th>

            <th>Quantity</th>

            <th>Total</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {orders.length === 0 ? (

            <tr>

              <td
                colSpan="8"
                className="no-data"
              >
                No Purchase Orders Available
              </td>

            </tr>

          ) : (

            orders.map((order) => (

              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.product}</td>

                <td>{order.supplier}</td>

                <td>{order.warehouse}</td>

                <td>{order.quantity}</td>

                <td>{order.total}</td>

                <td>

                  <span
                    className={`purchase-status ${order.status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {order.status}
                  </span>

                </td>

                <td className="action-buttons">

                  <button
                    className="view-btn"
                    onClick={() => onView(order)}
                  >
                    <FaEye />
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(order)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteOrder(order.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>

  );

}

export default PurchaseOrderTable;