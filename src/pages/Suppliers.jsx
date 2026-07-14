import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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

  const [suppliers, setSuppliers] = useState([]);

  const [loading, setLoading] = useState(true);

  const fetchSuppliers = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/suppliers"
      );

      const formattedSuppliers = res.data.map((supplier) => ({
        ...supplier,
      }));

      setSuppliers(formattedSuppliers);

    } catch (error) {
      toast.error("Failed to load suppliers");
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuppliers();
  }, []);

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
        loading={loading}
        fetchSuppliers={fetchSuppliers}
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
        fetchSuppliers={fetchSuppliers}
        isOpen={isModalOpen}
        onClose={() => {
          setEditingSupplier(null);
          setIsModalOpen(false);
        }}
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