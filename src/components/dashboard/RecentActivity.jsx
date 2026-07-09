import {
  FaBoxOpen,
  FaTruck,
  FaWarehouse,
  FaExclamationCircle,
} from "react-icons/fa";

import "../../styles/activity.css";

const activities = [
  {
    id: 1,
    icon: <FaBoxOpen />,
    title: "New Product Added",
    description: "Dell Inspiron Laptop",
    time: "2 minutes ago",
    color: "#10B981",
  },
  {
    id: 2,
    icon: <FaTruck />,
    title: "Purchase Order Created",
    description: "PO1024",
    time: "15 minutes ago",
    color: "#F59E0B",
  },
  {
    id: 3,
    icon: <FaWarehouse />,
    title: "Warehouse Updated",
    description: "Warehouse A",
    time: "1 hour ago",
    color: "#3B82F6",
  },
  {
    id: 4,
    icon: <FaExclamationCircle />,
    title: "Low Stock Alert",
    description: "Wireless Mouse",
    time: "2 hours ago",
    color: "#EF4444",
  },
];

function RecentActivity() {
  return (
    <div className="activity-card">
      <div className="activity-header">
        <h2>Recent Activity</h2>
        <p>Latest inventory updates</p>
      </div>

      {activities.map((item) => (
        <div className="activity-item" key={item.id}>
          <div
            className="activity-icon"
            style={{ background: item.color }}
          >
            {item.icon}
          </div>

          <div className="activity-info">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </div>

          <span>{item.time}</span>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;