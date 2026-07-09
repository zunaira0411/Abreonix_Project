import {
  FaPlus,
  FaTruck,
  FaWarehouse,
  FaClipboardList,
} from "react-icons/fa";

import "../../styles/quickactions.css";

function QuickActions() {
  const actions = [
    {
      title: "Add Product",
      icon: <FaPlus />,
      color: "#2563EB",
    },
    {
      title: "Add Supplier",
      icon: <FaTruck />,
      color: "#10B981",
    },
    {
      title: "Add Warehouse",
      icon: <FaWarehouse />,
      color: "#F59E0B",
    },
    {
      title: "Purchase Order",
      icon: <FaClipboardList />,
      color: "#8B5CF6",
    },
  ];

  return (
    <div className="quick-actions">

      {actions.map((action, index) => (

        <div
          className="action-card"
          key={index}
        >

          <div
            className="action-icon"
            style={{ background: action.color }}
          >
            {action.icon}
          </div>

          <h3>{action.title}</h3>

        </div>

      ))}

    </div>
  );
}

export default QuickActions;