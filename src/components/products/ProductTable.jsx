import axios from "axios";
import Swal from "sweetalert2";
import { FaEye } from "react-icons/fa";
import "../../styles/products.css";

function ProductTable({
  products,
  onEdit,
  onView,
  fetchProducts,
}) {

  const deleteProduct = async (id) => {

    const result = await Swal.fire({
      title: "Delete Product?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#64748b",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {

      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      await fetchProducts();

      Swal.fire({
        title: "Deleted!",
        text: "Product deleted successfully.",
        icon: "success",
        timer: 1800,
        showConfirmButton: false,
      });

    } catch (error) {

      console.log(error);

      Swal.fire({
        title: "Error!",
        text: "Failed to delete product.",
        icon: "error",
      });

    }
  };

  return (

    <div className="products-table-card">

      <table className="products-table">

        <thead>

          <tr>

            <th>ID</th>
            <th>Product</th>
            <th>Category</th>
            <th>Supplier</th>
            <th>Warehouse</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {products.length === 0 ? (

            <tr>

              <td colSpan="9" className="no-data">
                No Products Available
              </td>

            </tr>

          ) : (

            products.map((product) => (

              <tr key={product.id}>

                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.supplier}</td>
                <td>{product.warehouse}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>

                <td>

                  <span
                    className={`product-status ${product.status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {product.status}
                  </span>

                </td>

                <td className="action-buttons">

                  <button
                    className="view-btn"
                    onClick={() => onView(product)}
                  >
                    <FaEye />
                  </button>

                  <button
                    className="edit-btn"
                    onClick={() => onEdit(product)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(product.id)}
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

export default ProductTable;