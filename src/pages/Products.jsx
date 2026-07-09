
import { useState, useEffect } from "react";

import Layout from "../components/layout/Layout";
import ProductHeader from "../components/products/ProductHeader";
import ProductTable from "../components/products/ProductTable";
import ProductModal from "../components/products/ProductModal";
import ViewProductModal from "../components/products/ViewProductModal";

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [sortBy, setSortBy] = useState("");

  const [editingProduct, setEditingProduct] = useState(null);

  const [viewProduct, setViewProduct] = useState(null);

  const defaultProducts = [
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
  ];
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : defaultProducts;
  });
  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);


  // 🔍 Search Filter
const filteredProducts = [...products]
  .filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.supplier.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  })
  .sort((a, b) => {
    switch (sortBy) {
      case "priceLow":
        return (
          Number(a.price.replace("₹", "")) -
          Number(b.price.replace("₹", ""))
        );

      case "priceHigh":
        return (
          Number(b.price.replace("₹", "")) -
          Number(a.price.replace("₹", ""))
        );

      case "stockLow":
        return a.stock - b.stock;

      case "stockHigh":
        return b.stock - a.stock;

      case "name":
        return a.name.localeCompare(b.name);

      default:
        return 0;
    }
  });

  return (
    <Layout>

      <ProductHeader
        onAddProduct={() => {
          setEditingProduct(null);
          setIsModalOpen(true);
        }}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <ProductTable
        products={filteredProducts}
        allProducts={products}
        setProducts={setProducts}
        onEdit={(product) => {
          setEditingProduct(product);
          setIsModalOpen(true);
        }}
        onView={(product) => setViewProduct(product)}
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
      {viewProduct && (
      <ViewProductModal
        product={viewProduct}
        onClose={() => setViewProduct(null)}
      />
)}

    </Layout>
  );
}

export default Products;