import { FaPlus, FaSearch } from "react-icons/fa";
import "../../styles/products.css";

function ProductHeader({ onAddProduct }) {
  return (
    <div className="product-header">

      <div>
        <h1>Products</h1>
        <p>Manage all products in your inventory</p>
      </div>

      <div className="product-actions">

        <div className="search-box-product">
          <FaSearch />
          <input
            type="text"
            placeholder="Search Product..."
          />
        </div>

        <button
          className="add-product-btn"
          onClick={onAddProduct}
        >
          <FaPlus />
          Add Product
        </button>

      </div>

    </div>
  );
}

export default ProductHeader;