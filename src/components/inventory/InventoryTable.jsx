import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import "../../styles/inventory.css";

function InventoryTable({
  inventory,
  allInventory,
  setInventory,
  onEdit,
  onView,
}) {

  const deleteInventory = (id) => {

    Swal.fire({
      title: "Delete Inventory?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {

      if (result.isConfirmed) {

        const updatedInventory =
          allInventory.filter(
            (item) => item.id !== id
          );

        setInventory(updatedInventory);

        Swal.fire({
          title: "Deleted!",
          text: "Inventory deleted successfully.",
          icon: "success",
          timer: 1800,
          showConfirmButton: false,
        });

      }

    });

  };

  return (

    <div className="inventory-table-card">

      <table className="inventory-table">

        <thead>

          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Warehouse</th>
            <th>Stock</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>          {inventory.length === 0 ? (

            <tr>

              <td colSpan="6" className="no-data">
                No Inventory Available
              </td>

            </tr>

          ) : (

            inventory.map((item) => (

              <tr key={item.id}>

                <td>{item.id}</td>

                <td>{item.product}</td>

                <td>{item.warehouse}</td>

                <td>{item.stock}</td>

                <td>
                  <span
                    className={`inventory-status ${item.status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {item.status}
                  </span>
                </td>

                <td className="action-buttons">

                  <button
                    className="view-btn"
                    onClick={() => onView(item)}
                  >
                    <FaEye />
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(item)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteInventory(item.id)
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

export default InventoryTable;