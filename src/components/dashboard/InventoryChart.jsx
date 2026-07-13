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

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Stock Quantity",
      data: [420, 510, 620, 580, 720, 810, 900],
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

    title: {
      display: false,
    },
  },

  scales: {
    x: {
      title: {
        display: true,
        text: "Months",
      },
    },

    y: {
      title: {
        display: true,
        text: "Stock Quantity",
      },
      beginAtZero: true,
    },
  },
};

function InventoryChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h2>Inventory Overview</h2>
        <p>Monthly Stock Performance</p>
      </div>

      <div className="chart-body">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}

export default InventoryChart;