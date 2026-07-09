import { FaPlus, FaSearch } from "react-icons/fa";
import "../../styles/products.css";

function ProductHeader({
  onAddProduct,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="product-header">

      <div>
        <h1>Products</h1>
        <p>Manage all products in your inventory</p>
      </div>

      <div className="product-actions">

        {/* Search */}
        <div className="search-box-product">
          <FaSearch />

          <input
            type="text"
            placeholder="Search Product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category */}
        <select
          className="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Accessories">Accessories</option>
          <option value="Office">Office</option>
          <option value="Furniture">Furniture</option>
        </select>

        {/* Sorting */}
        <select
          className="category-filter"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Name (A-Z)</option>
          <option value="priceLow">Price (Low → High)</option>
          <option value="priceHigh">Price (High → Low)</option>
          <option value="stockLow">Stock (Low → High)</option>
          <option value="stockHigh">Stock (High → Low)</option>
        </select>

        {/* Add Product */}
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