import {
  FaExclamationTriangle,
} from "react-icons/fa";

import "../../styles/lowstock.css";

const items = [
  {
    name: "Wireless Mouse",
    stock: 5,
  },
  {
    name: "Mechanical Keyboard",
    stock: 3,
  },
  {
    name: "HP Printer",
    stock: 2,
  },
  {
    name: "USB Cable",
    stock: 7,
  },
];

function LowStock() {
  return (
    <div className="low-stock-card">

      <div className="low-stock-header">
        <h2>Low Stock Alerts</h2>
      </div>

      {items.map((item, index) => (

        <div className="stock-item" key={index}>

          <div className="stock-icon">

            <FaExclamationTriangle />

          </div>

          <div>

            <h4>{item.name}</h4>

            <p>Only {item.stock} items left</p>

          </div>

        </div>

      ))}

    </div>
  );
}

export default LowStock;