import { useState, useEffect } from "react";

import Layout from "../components/layout/Layout";
import InventoryHeader from "../components/inventory/InventoryHeader";
import InventoryTable from "../components/inventory/InventoryTable";
import InventoryModal from "../components/inventory/InventoryModal";
import ViewInventoryModal from "../components/inventory/ViewInventoryModal";

function Inventory() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [editingItem, setEditingItem] = useState(null);

  const [viewItem, setViewItem] = useState(null);

  const defaultInventory = [
    {
      id: "INV-1001",
      product: "Laptop",
      warehouse: "Warehouse A",
      stock: 25,
      status: "In Stock",
      description: "Dell Latitude laptops",
    },
    {
      id: "INV-1002",
      product: "Wireless Mouse",
      warehouse: "Warehouse B",
      stock: 8,
      status: "Low Stock",
      description: "Logitech wireless mouse",
    },
    {
      id: "INV-1003",
      product: "Office Chair",
      warehouse: "Warehouse C",
      stock: 0,
      status: "Out of Stock",
      description: "Ergonomic office chairs",
    },
  ];

  const [inventory, setInventory] = useState(() => {

    const savedInventory =
      localStorage.getItem("inventory");

    if (!savedInventory) {
      return defaultInventory;
    }

    const parsedInventory =
      JSON.parse(savedInventory);

    return parsedInventory.length > 0
      ? parsedInventory
      : defaultInventory;

  });

  useEffect(() => {

    localStorage.setItem(
      "inventory",
      JSON.stringify(inventory)
    );

  }, [inventory]);

  const filteredInventory = inventory.filter(
    (item) =>
      item.product
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||

      item.warehouse
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );  return (
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
        allInventory={inventory}
        setInventory={setInventory}
        onEdit={(item) => {
          setEditingItem(item);
          setIsModalOpen(true);
        }}
        onView={(item) =>
          setViewItem(item)
        }
      />

      <InventoryModal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingItem(null);
          setIsModalOpen(false);
        }}
        inventory={inventory}
        setInventory={setInventory}
        editingItem={editingItem}
      />

      {viewItem && (
        <ViewInventoryModal
          item={viewItem}
          onClose={() =>
            setViewItem(null)
          }
        />
      )}

    </Layout>
  );
}

export default Inventory;