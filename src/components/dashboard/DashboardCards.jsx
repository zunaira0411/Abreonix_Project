import {
  FaBoxOpen,
  FaWarehouse,
  FaUsers,
  FaExclamationTriangle,
} from "react-icons/fa";

import "../../styles/cards.css";

const cardData = [
  {
    title: "Total Products",
    value: "1,245",
    icon: <FaBoxOpen />,
    color: "#2563EB",
  },
  {
    title: "Suppliers",
    value: "85",
    icon: <FaUsers />,
    color: "#10B981",
  },
  {
    title: "Warehouses",
    value: "12",
    icon: <FaWarehouse />,
    color: "#F59E0B",
  },
  {
    title: "Low Stock",
    value: "24",
    icon: <FaExclamationTriangle />,
    color: "#EF4444",
  },
];

function DashboardCards() {
  return (
    <div className="cards-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <div
            className="card-icon"
            style={{ background: card.color }}
          >
            {card.icon}
          </div>

          <div className="card-info">
            <h2>{card.value}</h2>
            <p>{card.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardCards;