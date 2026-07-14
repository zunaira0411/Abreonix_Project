import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import Layout from "../components/layout/Layout";
import PurchaseOrderHeader from "../components/purchaseOrders/PurchaseOrderHeader";
import PurchaseOrderTable from "../components/purchaseOrders/PurchaseOrderTable";
import PurchaseOrderModal from "../components/purchaseOrders/PurchaseOrderModal";
import ViewPurchaseOrderModal from "../components/purchaseOrders/ViewPurchaseOrderModal";

function PurchaseOrders() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [editingOrder, setEditingOrder] = useState(null);

  const [viewOrder, setViewOrder] = useState(null);

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/purchase-orders"
      );

      const formattedOrders = res.data.map((order) => ({
        ...order,
        unitPrice: Number(order.unit_price),
        total: `₹${order.total}`,
        orderDate: order.order_date
          ? order.order_date.split("T")[0]
          : "",
      }));

      setOrders(formattedOrders);

    } catch (error) {
      console.log(error);
      toast.error("Failed to load Purchase Orders");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const filteredOrders = orders.filter(
    (order) =>
      order.product
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      order.supplier
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      order.warehouse
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>

      <PurchaseOrderHeader
        onAddOrder={() => {
          setEditingOrder(null);
          setIsModalOpen(true);
        }}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <PurchaseOrderTable
        loading={loading}
        fetchOrders={fetchOrders}
        orders={filteredOrders}
        allOrders={orders}
        setOrders={setOrders}
        onEdit={(order) => {
          setEditingOrder(order);
          setIsModalOpen(true);
        }}
        onView={(order) => setViewOrder(order)}
      />

      <PurchaseOrderModal
        fetchOrders={fetchOrders}
        isOpen={isModalOpen}
        onClose={() => {
          setEditingOrder(null);
          setIsModalOpen(false);
        }}
        orders={orders}
        setOrders={setOrders}
        editingOrder={editingOrder}
      />

      {viewOrder && (
        <ViewPurchaseOrderModal
          order={viewOrder}
          onClose={() => setViewOrder(null)}
        />
      )}

    </Layout>
  );
}

export default PurchaseOrders;