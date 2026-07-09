import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../../styles/charts.css";

const data = [
  { name: "Electronics", value: 45 },
  { name: "Furniture", value: 20 },
  { name: "Food", value: 18 },
  { name: "Clothing", value: 17 },
];

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#EF4444",
];

function StockChart() {
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
                fill={COLORS[index]}
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