import "../../styles/about.css";

function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        <h2>About Smart Inventory Tracker</h2>

        <p>
          Smart Inventory Tracker is a modern Inventory Management System
          developed to simplify inventory operations. It helps businesses
          manage products, suppliers, warehouses, purchase orders,
          inventory and reports from one centralized dashboard.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h3>📦 Products</h3>
            <p>Manage products with complete stock details.</p>
          </div>

          <div className="about-card">
            <h3>🏬 Warehouses</h3>
            <p>Track inventory across multiple warehouses.</p>
          </div>

          <div className="about-card">
            <h3>🚚 Suppliers</h3>
            <p>Manage supplier information efficiently.</p>
          </div>

          <div className="about-card">
            <h3>📊 Reports</h3>
            <p>Generate inventory insights and analytics.</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;