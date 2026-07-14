import { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/table.css";

function RecentOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/purchase-orders"
      );

      setOrders(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="table-card">

      <div className="table-header">
        <h2>Recent Purchase Orders</h2>
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

          {orders.length === 0 ? (

            <tr>
              <td
                colSpan="6"
                style={{ textAlign: "center" }}
              >
                No Orders Found
              </td>
            </tr>

          ) : (

            orders.slice(0, 5).map((order) => (

              <tr key={order.id}>

                <td>
                  {order.purchase_order_id ||
                    order.id}
                </td>

                <td>{order.supplier}</td>

                <td>{order.product}</td>

                <td>{order.quantity}</td>

                <td>

                  <span
                    className={`status ${order.status
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    {order.status}
                  </span>

                </td>

                <td>
                  {new Date(
                    order.order_date
                  ).toLocaleDateString()}
                </td>

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default RecentOrders;