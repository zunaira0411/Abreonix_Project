import { Link } from "react-router-dom";

import "../../styles/homeNavbar.css";

function Navbar() {
  return (
    <nav className="home-navbar">

      <div className="home-logo">
        📦 Smart Inventory
      </div>

      <ul className="home-nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/dashboard">Dashboard</Link></li>

        <li><Link to="/products">Products</Link></li>

        <li><Link to="/suppliers">Suppliers</Link></li>

        <li><Link to="/warehouses">Warehouses</Link></li>

        <li><Link to="/inventory">Inventory</Link></li>

        <li><Link to="/purchase-orders">Orders</Link></li>

        <li><Link to="/reports">Reports</Link></li>

        <li><a href="#about">About</a></li>

      </ul>

      <Link to="/login" className="home-login-btn">
        Login
      </Link>

    </nav>
  );
}

export default Navbar;