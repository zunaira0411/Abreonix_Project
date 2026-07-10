import { FaPlus, FaSearch } from "react-icons/fa";
import "../../styles/warehouses.css";

function WarehouseHeader({
  onAddWarehouse,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="warehouse-header">

      <div>
        <h1>Warehouses</h1>
        <p>Manage all warehouses in your inventory</p>
      </div>

      <div className="warehouse-actions">

        <div className="search-box-warehouse">
          <FaSearch />

          <input
            type="text"
            placeholder="Search Warehouse..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>

        <button
          className="add-warehouse-btn"
          onClick={onAddWarehouse}
        >
          <FaPlus />
          Add Warehouse
        </button>

      </div>

    </div>
  );
}

export default WarehouseHeader;