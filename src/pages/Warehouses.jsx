import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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

  const [warehouses, setWarehouses] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchWarehouses = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/warehouses"
      );

      setWarehouses(res.data);

    } catch (error) {
      console.log(error);
      toast.error("Failed to load warehouses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWarehouses();
  }, []);

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
  );

  return (
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
        loading={loading}
        fetchWarehouses={fetchWarehouses}
        warehouses={filteredWarehouses}
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
        fetchWarehouses={fetchWarehouses}
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