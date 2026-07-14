import { useState, useEffect } from "react";
import axios from "axios";
import { FaExclamationTriangle } from "react-icons/fa";

import "../../styles/lowstock.css";

function LowStock() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchLowStock();
  }, []);

  const fetchLowStock = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      const lowStockProducts = res.data.filter(
        (item) => Number(item.stock) < 10
      );

      setItems(lowStockProducts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="low-stock-card">

      <div className="low-stock-header">
        <h2>Low Stock Alerts</h2>
      </div>

      {items.length === 0 ? (

        <p
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#666",
          }}
        >
          No Low Stock Products
        </p>

      ) : (

        items.map((item) => (

          <div
            className="stock-item"
            key={item.id}
          >

            <div className="stock-icon">
              <FaExclamationTriangle />
            </div>

            <div>

              <h4>{item.name}</h4>

              <p>
                Only {item.stock} items left
              </p>

            </div>

          </div>

        ))

      )}

    </div>
  );
}

export default LowStock;