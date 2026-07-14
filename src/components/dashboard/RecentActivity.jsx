import { useState, useEffect } from "react";
import axios from "axios";

import {
  FaBoxOpen,
  FaTruck,
  FaWarehouse,
} from "react-icons/fa";

import "../../styles/activity.css";

function RecentActivity() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const [products, orders, warehouses] =
        await Promise.all([
          axios.get("http://localhost:5000/api/products"),
          axios.get("http://localhost:5000/api/purchase-orders"),
          axios.get("http://localhost:5000/api/warehouses"),
        ]);

      const activityData = [];

      products.data
        .slice(-2)
        .reverse()
        .forEach((item) => {
          activityData.push({
            id: `P-${item.id}`,
            icon: <FaBoxOpen />,
            title: "New Product",
            description: item.name,
            time: new Date(
              item.created_at
            ).toLocaleString(),
            color: "#10B981",
          });
        });

      orders.data
        .slice(-2)
        .reverse()
        .forEach((item) => {
          activityData.push({
            id: `O-${item.id}`,
            icon: <FaTruck />,
            title: "Purchase Order",
            description: item.product,
            time: new Date(
              item.created_at || item.order_date
            ).toLocaleString(),
            color: "#F59E0B",
          });
        });

      warehouses.data
        .slice(-2)
        .reverse()
        .forEach((item) => {
          activityData.push({
            id: `W-${item.id}`,
            icon: <FaWarehouse />,
            title: "Warehouse",
            description: item.name,
            time: new Date(
              item.created_at || Date.now()
            ).toLocaleString(),
            color: "#2563EB",
          });
        });

      activityData.sort(
        (a, b) =>
          new Date(b.time) - new Date(a.time)
      );

      setActivities(activityData.slice(0, 6));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="activity-card">

      <div className="activity-header">
        <h2>Recent Activity</h2>
        <p>Latest System Updates</p>
      </div>

      {activities.length === 0 ? (

        <p
          style={{
            textAlign: "center",
            padding: "20px",
          }}
        >
          No Recent Activity
        </p>

      ) : (

        activities.map((item) => (

          <div
            className="activity-item"
            key={item.id}
          >

            <div
              className="activity-icon"
              style={{
                background: item.color,
              }}
            >
              {item.icon}
            </div>

            <div className="activity-info">

              <h4>{item.title}</h4>

              <p>{item.description}</p>

            </div>

            <span
              style={{
                fontSize: "12px",
              }}
            >
              {item.time}
            </span>

          </div>

        ))

      )}

    </div>
  );
}

export default RecentActivity;