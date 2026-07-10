import { useState, useEffect } from "react";

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

  const defaultOrders = [
    {
      id: "PO-1001",
      product: "Laptop",
      supplier: "Tech Suppliers Ltd",
      warehouse: "Warehouse A",
      quantity: 10,
      unitPrice: 50000,
      total: "₹500000",
      orderDate: "2026-07-08",
      status: "Delivered",
      description: "Office laptops purchase",
    },
    {
      id: "PO-1002",
      product: "Wireless Mouse",
      supplier: "ABC Electronics",
      warehouse: "Warehouse B",
      quantity: 50,
      unitPrice: 700,
      total: "₹35000",
      orderDate: "2026-07-09",
      status: "Pending",
      description: "Accessories stock",
    },
    {
      id: "PO-1003",
      product: "Office Chair",
      supplier: "Furniture Hub",
      warehouse: "Warehouse C",
      quantity: 20,
      unitPrice: 4500,
      total: "₹90000",
      orderDate: "2026-07-10",
      status: "Shipped",
      description: "Office furniture",
    },
  ];

  const [orders, setOrders] = useState(() => {

    const savedOrders =
      localStorage.getItem("purchaseOrders");

    if (!savedOrders) {
      return defaultOrders;
    }

    const parsedOrders = JSON.parse(savedOrders);

    return parsedOrders.length > 0
      ? parsedOrders
      : defaultOrders;

  });

  useEffect(() => {

    localStorage.setItem(
      "purchaseOrders",
      JSON.stringify(orders)
    );

  }, [orders]);

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
  );  return (
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
        orders={filteredOrders}
        allOrders={orders}
        setOrders={setOrders}
        onEdit={(order) => {
          setEditingOrder(order);
          setIsModalOpen(true);
        }}
        onView={(order) =>
          setViewOrder(order)
        }
      />

      <PurchaseOrderModal
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
          onClose={() =>
            setViewOrder(null)
          }
        />
      )}

    </Layout>
  );
}

export default PurchaseOrders;