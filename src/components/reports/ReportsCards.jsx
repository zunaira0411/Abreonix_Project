import {
  FaBoxOpen,
  FaUsers,
  FaWarehouse,
  FaClipboardList,
} from "react-icons/fa";

function ReportsCards({
  totalProducts,
  totalSuppliers,
  totalWarehouses,
  totalInventory,
}) {
  return (

    <div className="reports-cards">

      <div className="report-card">

        <div className="report-icon products-icon">
          <FaBoxOpen />
        </div>

        <div>
          <h3>Total Products</h3>
          <h2>{totalProducts}</h2>
        </div>

      </div>

      <div className="report-card">

        <div className="report-icon suppliers-icon">
          <FaUsers />
        </div>

        <div>
          <h3>Total Suppliers</h3>
          <h2>{totalSuppliers}</h2>
        </div>

      </div>

      <div className="report-card">

        <div className="report-icon warehouses-icon">
          <FaWarehouse />
        </div>

        <div>
          <h3>Total Warehouses</h3>
          <h2>{totalWarehouses}</h2>
        </div>

      </div>

      <div className="report-card">

        <div className="report-icon inventory-icon">
          <FaClipboardList />
        </div>

        <div>
          <h3>Total Inventory</h3>
          <h2>{totalInventory}</h2>
        </div>

      </div>

    </div>

  );
}

export default ReportsCards;