import {
  Bar,
  Pie,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function ReportsCharts({
  totalProducts,
  totalSuppliers,
  totalWarehouses,
  totalInventory,
}) {

  const barData = {
    labels: [
      "Products",
      "Suppliers",
      "Warehouses",
      "Inventory",
    ],

    datasets: [
      {
        label: "Total Records",
        data: [
          totalProducts,
          totalSuppliers,
          totalWarehouses,
          totalInventory,
        ],
        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#8B5CF6",
        ],
      },
    ],
  };

  const pieData = {
    labels: [
      "Products",
      "Suppliers",
      "Warehouses",
      "Inventory",
    ],

    datasets: [
      {
        data: [
          totalProducts,
          totalSuppliers,
          totalWarehouses,
          totalInventory,
        ],

        backgroundColor: [
          "#3B82F6",
          "#10B981",
          "#F59E0B",
          "#8B5CF6",
        ],
      },
    ],
  };
    return (

    <div className="reports-charts">

      <div className="chart-card">

        <h3>Overall Records</h3>

        <Bar 
        data={barData} 
        options={{
          maintainAspectRatio: false,
        }} 
        />

      </div>

      <div className="chart-card">

        <h3>Distribution</h3>

        <Pie
         data={pieData}
         options={{
          maintainAspectRatio: false,
         }} 
        />

      </div>

    </div>

  );
}

export default ReportsCharts;