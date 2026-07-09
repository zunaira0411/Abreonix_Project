import { useState } from "react";

import Layout from "../components/layout/Layout";
import ProductHeader from "../components/products/ProductHeader";
import ProductTable from "../components/products/ProductTable";
import ProductModal from "../components/products/ProductModal";

function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <ProductHeader
        onAddProduct={() => setIsModalOpen(true)}
      />

      <ProductTable />

      <ProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Layout>
  );
}

export default Products;