import "../../styles/health.css";

function InventoryHealth() {
  return (
    <div className="health-card">

      <div className="health-header">
        <h2>Inventory Health</h2>
        <p>Current Stock Status</p>
      </div>

      <div className="progress-item">
        <div className="progress-text">
          <span>In Stock</span>
          <span>80%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill stock"
            style={{ width: "80%" }}
          ></div>
        </div>
      </div>

      <div className="progress-item">
        <div className="progress-text">
          <span>Low Stock</span>
          <span>15%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill low"
            style={{ width: "15%" }}
          ></div>
        </div>
      </div>

      <div className="progress-item">
        <div className="progress-text">
          <span>Out Of Stock</span>
          <span>5%</span>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill out"
            style={{ width: "5%" }}
          ></div>
        </div>
      </div>

    </div>
  );
}

export default InventoryHealth;