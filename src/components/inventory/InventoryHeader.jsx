import { FaPlus, FaSearch } from "react-icons/fa";

function InventoryHeader({
  onAddInventory,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="inventory-header">

      <div>
        <h1>Inventory</h1>
        <p>Manage inventory stock and availability</p>
      </div>

      <div className="inventory-actions">

        <div className="search-box-inventory">

          <FaSearch />

          <input
            type="text"
            placeholder="Search Inventory..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

        <button
          className="add-inventory-btn"
          onClick={onAddInventory}
        >
          <FaPlus />
          Add Inventory
        </button>

      </div>

    </div>
  );
}

export default InventoryHeader;