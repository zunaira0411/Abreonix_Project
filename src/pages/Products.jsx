import { useState } from "react";

import Layout from "../components/layout/Layout";
import ProductHeader from "../components/products/ProductHeader";
import ProductTable from "../components/products/ProductTable";
import ProductModal from "../components/products/ProductModal";

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editingProduct, setEditingProduct] = useState(null);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      supplier: "Dell",
      warehouse: "Warehouse A",
      stock: 45,
      price: "₹55000",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Keyboard",
      category: "Accessories",
      supplier: "Logitech",
      warehouse: "Warehouse B",
      stock: 8,
      price: "₹1500",
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Monitor",
      category: "Electronics",
      supplier: "HP",
      warehouse: "Warehouse A",
      stock: 20,
      price: "₹12000",
      status: "In Stock",
    },
    {
      id: 4,
      name: "Printer",
      category: "Office",
      supplier: "Canon",
      warehouse: "Warehouse C",
      stock: 0,
      price: "₹18000",
      status: "Out of Stock",
    },
  ]);

  return (
    <Layout>

      <ProductHeader
        onAddProduct={() => {
          setEditingProduct(null);
          setIsModalOpen(true);
        }}
      />

      <ProductTable
        products={products}
        setProducts={setProducts}
        onEdit={(product) => {
          setEditingProduct(product);
          setIsModalOpen(true);
        }}
      />

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => {
          setEditingProduct(null);
          setIsModalOpen(false);
        }}
        products={products}
        setProducts={setProducts}
        editingProduct={editingProduct}
      />

    </Layout>
  );
}

export default Products;