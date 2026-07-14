import { useState, useEffect } from "react";
import axios from "axios";

import Layout from "../components/layout/Layout";
import InventoryHeader from "../components/inventory/InventoryHeader";
import InventoryTable from "../components/inventory/InventoryTable";
import InventoryModal from "../components/inventory/InventoryModal";
import ViewInventoryModal from "../components/inventory/ViewInventoryModal";

function Inventory() {
  const [inventory, setInventory] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [editingItem, setEditingItem] = useState(null);

  const [viewItem, setViewItem] = useState(null);

  const fetchInventory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/inventory"
      );

      setInventory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  const filteredInventory = inventory.filter(
    (item) =>
      item.product
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.warehouse
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <InventoryHeader
        onAddInventory={() => {
          setEditingItem(null);
          setIsModalOpen(true);
        }}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <InventoryTable
        inventory={filteredInventory}
        fetchInventory={fetchInventory}
        onEdit={(item) => {
          setEditingItem(item);
          setIsModalOpen(true);
        }}
        onView={(item) => setViewItem(item)}
      />

      <InventoryModal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingItem(null);
          setIsModalOpen(false);
        }}
        editingItem={editingItem}
        fetchInventory={fetchInventory}
      />

      {viewItem && (
        <ViewInventoryModal
          item={viewItem}
          onClose={() => setViewItem(null)}
        />
      )}
    </Layout>
  );
}

export default Inventory;