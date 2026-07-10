import { FaPlus, FaSearch } from "react-icons/fa";
import "../../styles/suppliers.css";

function SupplierHeader({
  onAddSupplier,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="supplier-header">

      <div>
        <h1>Suppliers</h1>
        <p>Manage all suppliers in your inventory</p>
      </div>

      <div className="supplier-actions">

        <div className="search-box-supplier">
          <FaSearch />

          <input
            type="text"
            placeholder="Search Supplier..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>

        <button
          className="add-supplier-btn"
          onClick={onAddSupplier}
        >
          <FaPlus />
          Add Supplier
        </button>

      </div>

    </div>
  );
}

export default SupplierHeader;