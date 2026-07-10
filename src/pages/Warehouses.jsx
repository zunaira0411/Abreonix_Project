import { useState, useEffect } from "react";

import Layout from "../components/layout/Layout";
import WarehouseHeader from "../components/warehouses/WarehouseHeader";
import WarehouseTable from "../components/warehouses/WarehouseTable";
import WarehouseModal from "../components/warehouses/WarehouseModal";
import ViewWarehouseModal from "../components/warehouses/ViewWarehouseModal";

function Warehouses() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [editingWarehouse, setEditingWarehouse] = useState(null);

  const [viewWarehouse, setViewWarehouse] = useState(null);

  const defaultWarehouses = [
    {
      id: "WH-1001",
      name: "Warehouse A",
      manager: "Rahul Sharma",
      location: "Delhi",
      capacity: 5000,
      status: "Active",
      description: "Main warehouse for North India inventory.",
    },
    {
      id: "WH-1002",
      name: "Warehouse B",
      manager: "Priya Singh",
      location: "Mumbai",
      capacity: 3000,
      status: "Active",
      description: "Handles West India product distribution.",
    },
    {
      id: "WH-1003",
      name: "Warehouse C",
      manager: "Amit Verma",
      location: "Bangalore",
      capacity: 7000,
      status: "Inactive",
      description: "Currently under maintenance.",
    },
    {
      id: "WH-1004",
      name: "Warehouse D",
      manager: "Neha Gupta",
      location: "Hyderabad",
      capacity: 4500,
      status: "Active",
      description: "Warehouse for South India operations.",
    },
  ];

  const [warehouses, setWarehouses] = useState(() => {
    const savedWarehouses = localStorage.getItem("warehouses");
    if (!savedWarehouses) {
      return defaultWarehouses;
    }
    const parsedWarehouses = JSON.parse(savedWarehouses);

    return parsedWarehouses.length > 0
      ? parsedWarehouses
      : defaultWarehouses;
  });

  useEffect(() => {
    localStorage.setItem(
      "warehouses",
      JSON.stringify(warehouses)
    );
  }, [warehouses]);

  const filteredWarehouses = warehouses.filter(
    (warehouse) =>
      warehouse.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      warehouse.manager
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      warehouse.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );  return (
    <Layout>

      <WarehouseHeader
        onAddWarehouse={() => {
          setEditingWarehouse(null);
          setIsModalOpen(true);
        }}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <WarehouseTable
        warehouses={filteredWarehouses}
        allWarehouses={warehouses}
        setWarehouses={setWarehouses}
        onEdit={(warehouse) => {
          setEditingWarehouse(warehouse);
          setIsModalOpen(true);
        }}
        onView={(warehouse) =>
          setViewWarehouse(warehouse)
        }
      />

      <WarehouseModal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingWarehouse(null);
          setIsModalOpen(false);
        }}
        warehouses={warehouses}
        setWarehouses={setWarehouses}
        editingWarehouse={editingWarehouse}
      />

      {viewWarehouse && (
        <ViewWarehouseModal
          warehouse={viewWarehouse}
          onClose={() =>
            setViewWarehouse(null)
          }
        />
      )}

    </Layout>
  );
}

export default Warehouses;