import { useState, useEffect } from "react";
import axios from "axios";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../../styles/charts.css";

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
  "#EC4899",
];

function StockChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      const products = res.data;

      const categoryMap = {};

      products.forEach((item) => {
        if (categoryMap[item.category]) {
          categoryMap[item.category] += 1;
        } else {
          categoryMap[item.category] = 1;
        }
      });

      const chartData = Object.keys(categoryMap).map((key) => ({
        name: key,
        value: categoryMap[key],
      }));

      setData(chartData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="chart-card">

      <div className="chart-header">
        <h2>Stock Distribution</h2>
        <p>Products by Category</p>
      </div>

      <ResponsiveContainer width="100%" height={320}>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}

export default StockChart;