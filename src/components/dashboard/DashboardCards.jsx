import { useEffect, useState } from "react";
import axios from "axios";

import {
  FaBoxOpen,
  FaWarehouse,
  FaUsers,
  FaExclamationTriangle,
} from "react-icons/fa";

import "../../styles/cards.css";

function DashboardCards() {
  const [stats, setStats] = useState({
    products: 0,
    suppliers: 0,
    warehouses: 0,
    lowStock: 0,
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const [
        productsRes,
        suppliersRes,
        warehousesRes,
      ] = await Promise.all([
        axios.get("http://localhost:5000/api/products"),
        axios.get("http://localhost:5000/api/suppliers"),
        axios.get("http://localhost:5000/api/warehouses"),
      ]);

      const products = productsRes.data;
      const suppliers = suppliersRes.data;
      const warehouses = warehousesRes.data;

      const lowStock = products.filter(
        (item) => Number(item.stock) < 10
      ).length;

      setStats({
        products: products.length,
        suppliers: suppliers.length,
        warehouses: warehouses.length,
        lowStock,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const cardData = [
    {
      title: "Total Products",
      value: stats.products,
      icon: <FaBoxOpen />,
      color: "#2563EB",
    },
    {
      title: "Suppliers",
      value: stats.suppliers,
      icon: <FaUsers />,
      color: "#10B981",
    },
    {
      title: "Warehouses",
      value: stats.warehouses,
      icon: <FaWarehouse />,
      color: "#F59E0B",
    },
    {
      title: "Low Stock",
      value: stats.lowStock,
      icon: <FaExclamationTriangle />,
      color: "#EF4444",
    },
  ];

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