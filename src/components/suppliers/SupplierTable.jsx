import Swal from "sweetalert2";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import "../../styles/suppliers.css";

function SupplierTable({
  suppliers,
  loading,
  fetchSuppliers,
  onEdit,
  onView,
}) {

  const deleteSupplier = (id) => {

    Swal.fire({

      title: "Delete Supplier?",

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
            `http://localhost:5000/api/suppliers/${id}`
          );

          fetchSuppliers();

          Swal.fire({

            title: "Deleted!",

            text: "Supplier deleted successfully.",

            icon: "success",

            timer: 1800,

            showConfirmButton: false,

          });

        } catch (error) {

          console.log(error);

          Swal.fire({

            title: "Error!",

            text: "Failed to delete supplier.",

            icon: "error",

          });

        }

      }

    });

  };

  return (

    <div className="suppliers-table-card">

      <table className="suppliers-table">

        <thead>

          <tr>

            <th>ID</th>

            <th>Supplier</th>

            <th>Contact</th>

            <th>Email</th>

            <th>Location</th>

            <th>Status</th>

            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {loading ? (

            <tr>

              <td colSpan="7" className="no-data">

                Loading...

              </td>

            </tr>

          ) : suppliers.length === 0 ? (

            <tr>

              <td colSpan="7" className="no-data">

                No Suppliers Available

              </td>

            </tr>

          ) : (

            suppliers.map((supplier) => (

              <tr key={supplier.id}>

                <td>{supplier.id}</td>

                <td>{supplier.name}</td>

                <td>{supplier.contact}</td>

                <td>{supplier.email}</td>

                <td>{supplier.location}</td>

                <td>

                  <span
                    className={`supplier-status ${supplier.status.toLowerCase()}`}
                  >
                    {supplier.status}
                  </span>

                </td>

                <td className="action-buttons">

                  <button
                    className="view-btn"
                    onClick={() => onView(supplier)}
                  >
                    <FaEye />
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(supplier)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteSupplier(supplier.id)}
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

export default SupplierTable;