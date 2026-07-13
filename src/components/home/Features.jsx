import "../../styles/features.css";

function Features() {
  return (
    <section className="features-section">

      <h2>Our Features</h2>

      <div className="features-grid">

        <div className="feature-card">
          <h3>📦 Product Management</h3>
          <p>Add, edit, delete and manage products easily.</p>
        </div>

        <div className="feature-card">
          <h3>🚚 Supplier Management</h3>
          <p>Maintain supplier records and contact details.</p>
        </div>

        <div className="feature-card">
          <h3>🏬 Warehouse Management</h3>
          <p>Monitor warehouse stock in one place.</p>
        </div>

        <div className="feature-card">
          <h3>📊 Reports & Analytics</h3>
          <p>Generate reports with charts and insights.</p>
        </div>

        <div className="feature-card">
          <h3>🛒 Purchase Orders</h3>
          <p>Track purchase orders from suppliers.</p>
        </div>

        <div className="feature-card">
          <h3>📈 Inventory Tracking</h3>
          <p>Monitor inventory levels with real-time updates.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;