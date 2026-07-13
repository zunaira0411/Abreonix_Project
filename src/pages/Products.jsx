import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

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

const [products, setProducts] = useState([]);

const [loading, setLoading] = useState(true);

const fetchProducts = async () => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/products"
    );

    const formattedProducts = res.data.map((product) => ({
      ...product,
      id: product.id,
      productId: product.product_id,
      price: `₹${product.price}`,
    }));

    setProducts(formattedProducts);

  } catch (error) {
    toast.error("Failed to load products");
    console.log(error);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  fetchProducts();
}, []);

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
        loading={loading}
        fetchProducts={fetchProducts}
        products={filteredProducts}
        onEdit={(product) => {
          setEditingProduct(product);
          setIsModalOpen(true);
        }}
        onView={(product) => setViewProduct(product)}
      />

      <ProductModal
        fetchProducts={fetchProducts}
        isOpen={isModalOpen}
        onClose={() => {
          setEditingProduct(null);
          setIsModalOpen(false);
        }}
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