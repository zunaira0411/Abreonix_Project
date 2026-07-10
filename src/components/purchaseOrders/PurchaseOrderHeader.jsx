import { FaPlus, FaSearch } from "react-icons/fa";

function PurchaseOrderHeader({
  onAddOrder,
  searchTerm,
  setSearchTerm,
}) {
  return (
    <div className="purchase-header">

      <div>
        <h1>Purchase Orders</h1>
        <p>Manage all purchase orders</p>
      </div>

      <div className="purchase-actions">

        <div className="search-box-purchase">

          <FaSearch />

          <input
            type="text"
            placeholder="Search Purchase Order..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

        <button
          className="add-purchase-btn"
          onClick={onAddOrder}
        >
          <FaPlus />
          Add Purchase Order
        </button>

      </div>

    </div>
  );
}

export default PurchaseOrderHeader;