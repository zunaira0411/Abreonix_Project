import {
  FaHome,
  FaBoxOpen,
  FaUsers,
  FaWarehouse,
  FaClipboardList,
  FaChartBar,
  FaUserCircle,
  FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

import "../../styles/sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="logo">
        📦 Smart Inventory
      </div>

      <nav>

        <NavLink to="/dashboard" className="nav-item">
          <FaHome />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/products" className="nav-item">
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>

        <NavLink to="/suppliers" className="nav-item">
          <FaUsers />
          <span>Suppliers</span>
        </NavLink>

        <NavLink to="/warehouses" className="nav-item">
          <FaWarehouse />
          <span>Warehouses</span>
        </NavLink>

        <NavLink to="/inventory" className="nav-item">
          <FaClipboardList />
          <span>Inventory</span>
        </NavLink>

        <NavLink to="/purchase-orders" className="nav-item">
          <FaClipboardList />
          <span>Purchase Orders</span>
        </NavLink>

        <NavLink to="/reports" className="nav-item">
          <FaChartBar />
          <span>Reports</span>
        </NavLink>

        <NavLink to="/profile" className="nav-item">
          <FaUserCircle />
          <span>Profile</span>
        </NavLink>

      </nav>

      <button className="logout-btn">
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
}

export default Sidebar;