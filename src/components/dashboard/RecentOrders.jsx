import "../../styles/table.css";

const orders = [
  {
    id: "PO1001",
    supplier: "ABC Traders",
    product: "Laptop",
    quantity: 120,
    status: "Delivered",
    date: "09 Jul 2026",
  },
  {
    id: "PO1002",
    supplier: "Tech World",
    product: "Mouse",
    quantity: 250,
    status: "Pending",
    date: "08 Jul 2026",
  },
  {
    id: "PO1003",
    supplier: "Global Supply",
    product: "Keyboard",
    quantity: 180,
    status: "Shipped",
    date: "07 Jul 2026",
  },
  {
    id: "PO1004",
    supplier: "Smart Tech",
    product: "Monitor",
    quantity: 90,
    status: "Delivered",
    date: "06 Jul 2026",
  },
];

function RecentOrders() {
  return (
    <div className="table-card">
      <div className="table-header">
        <h2>Recent Purchase Orders</h2>
        <button>View All</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Supplier</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.supplier}</td>
              <td>{order.product}</td>
              <td>{order.quantity}</td>

              <td>
                <span
                  className={`status ${order.status.toLowerCase()}`}
                >
                  {order.status}
                </span>
              </td>

              <td>{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;