import { useState, useEffect } from "react";
import axios from "axios";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import "../../styles/charts.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function InventoryChart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setChartData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const data = {
    labels: chartData.map((item) => item.name),

    datasets: [
      {
        label: "Stock Quantity",
        data: chartData.map((item) => item.stock),
        borderColor: "#2563EB",
        backgroundColor: "rgba(37,99,235,0.2)",
        borderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        title: {
          display: true,
          text: "Products",
        },
      },

      y: {
        beginAtZero: true,

        title: {
          display: true,
          text: "Stock",
        },
      },
    },
  };

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h2>Inventory Overview</h2>
        <p>Current Product Stock</p>
      </div>

      <div className="chart-body">
        <Line
          data={data}
          options={options}
        />
      </div>
    </div>
  );
}

export default InventoryChart;