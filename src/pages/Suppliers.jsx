import { useState, useEffect } from "react";

import Layout from "../components/layout/Layout";
import SupplierHeader from "../components/suppliers/SupplierHeader";
import SupplierTable from "../components/suppliers/SupplierTable";
import SupplierModal from "../components/suppliers/SupplierModal";
import ViewSupplierModal from "../components/suppliers/ViewSupplierModal";

function Suppliers() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [editingSupplier, setEditingSupplier] = useState(null);

  const [viewSupplier, setViewSupplier] = useState(null);

  const defaultSuppliers = [
    {
      id: "SUP-1001",
      name: "Dell India",
      contact: "9876543210",
      email: "sales@dell.com",
      location: "Delhi",
      status: "Active",
    },
    {
      id: "SUP-1002",
      name: "HP Pvt Ltd",
      contact: "9876501234",
      email: "support@hp.com",
      location: "Mumbai",
      status: "Active",
    },
    {
      id: "SUP-1003",
      name: "Logitech",
      contact: "9876511111",
      email: "contact@logitech.com",
      location: "Bangalore",
      status: "Inactive",
    },
  ];

  const [suppliers, setSuppliers] = useState(() => {
    const savedSuppliers = localStorage.getItem("suppliers");

    return savedSuppliers
      ? JSON.parse(savedSuppliers)
      : defaultSuppliers;
  });

  useEffect(() => {
    localStorage.setItem(
      "suppliers",
      JSON.stringify(suppliers)
    );
  }, [suppliers]);

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      supplier.email
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      supplier.location
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>

      <SupplierHeader
        onAddSupplier={() => {
          setEditingSupplier(null);
          setIsModalOpen(true);
        }}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <SupplierTable
        suppliers={filteredSuppliers}
        allSuppliers={suppliers}
        setSuppliers={setSuppliers}
        onEdit={(supplier) => {
          setEditingSupplier(supplier);
          setIsModalOpen(true);
        }}
        onView={(supplier) =>
          setViewSupplier(supplier)
        }
      />

      <SupplierModal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingSupplier(null);
          setIsModalOpen(false);
        }}
        suppliers={suppliers}
        setSuppliers={setSuppliers}
        editingSupplier={editingSupplier}
      />

      {viewSupplier && (
        <ViewSupplierModal
          supplier={viewSupplier}
          onClose={() =>
            setViewSupplier(null)
          }
        />
      )}

    </Layout>
  );
}

export default Suppliers;