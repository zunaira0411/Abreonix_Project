import axios from "axios";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import "../../styles/warehouses.css";

function WarehouseTable({
  warehouses,
  fetchWarehouses,
  onEdit,
  onView,
}) {

  const deleteWarehouse = (id) => {

    Swal.fire({

      title: "Delete Warehouse?",

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
            `http://localhost:5000/api/warehouses/${id}`
          );

          fetchWarehouses();

          Swal.fire({

            title: "Deleted!",

            text: "Warehouse deleted successfully.",

            icon: "success",

            timer: 1800,

            showConfirmButton: false,

          });

        } catch (error) {

          console.log(error);

          Swal.fire({

            icon: "error",

            title: "Error",

            text: "Failed to delete warehouse.",

          });

        }

      }

    });

  };

  return (

    <div className="warehouses-table-card">

      <table className="warehouses-table">

        <thead>

          <tr>

            <th>ID</th>

            <th>Warehouse</th>

            <th>Manager</th>

            <th>Location</th>

            <th>Capacity</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {warehouses.length === 0 ? (

            <tr>

              <td colSpan="7" className="no-data">

                No Warehouses Available

              </td>

            </tr>

          ) : (

            warehouses.map((warehouse) => (

              <tr key={warehouse.id}>

                <td>{warehouse.id}</td>

                <td>{warehouse.name}</td>

                <td>{warehouse.manager}</td>

                <td>{warehouse.location}</td>

                <td>{warehouse.capacity}</td>

                <td>

                  <span
                    className={`warehouse-status ${warehouse.status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {warehouse.status}
                  </span>

                </td>

                <td className="action-buttons">

                  <button
                    className="view-btn"
                    onClick={() => onView(warehouse)}
                  >
                    <FaEye />
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(warehouse)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      deleteWarehouse(warehouse.id)
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

export default WarehouseTable;