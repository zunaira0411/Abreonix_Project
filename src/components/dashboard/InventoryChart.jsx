import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

import "../../styles/charts.css";

const data = [
  { month: "Jan", stock: 420 },
  { month: "Feb", stock: 510 },
  { month: "Mar", stock: 620 },
  { month: "Apr", stock: 580 },
  { month: "May", stock: 720 },
  { month: "Jun", stock: 810 },
  { month: "Jul", stock: 900 },
];

function InventoryChart() {
  return (
    <div className="chart-card">
      <div className="chart-header">
        <h2>Inventory Overview</h2>
        <p>Monthly Stock Performance</p>
      </div>

      <div className="chart-body">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 30,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month">
              <Label
                value="Months"
                position="insideBottom"
                offset={-10}
              />
            </XAxis>

            <YAxis>
              <Label
                value="Stock Quantity"
                angle={-90}
                position="insideLeft"
                style={{ textAnchor: "middle" }}
              />
            </YAxis>

            <Tooltip />

            <Line
              type="monotone"
              dataKey="stock"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{ r: 5 }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default InventoryChart;