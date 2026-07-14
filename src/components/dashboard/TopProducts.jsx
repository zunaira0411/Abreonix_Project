import { useState, useEffect } from "react";
import axios from "axios";
import { FaArrowTrendUp } from "react-icons/fa6";

import "../../styles/topproducts.css";

function TopProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchTopProducts();
  }, []);

  const fetchTopProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      const sortedProducts = [...res.data]
        .sort((a, b) => Number(b.stock) - Number(a.stock))
        .slice(0, 5);

      setProducts(sortedProducts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="top-products-card">

      <div className="top-products-header">
        <h2>Top Products</h2>
        <p>Highest Stock Products</p>
      </div>

      {products.length === 0 ? (

        <p
          style={{
            textAlign: "center",
            padding: "20px",
            color: "#666",
          }}
        >
          No Products Found
        </p>

      ) : (

        products.map((product, index) => (

          <div
            className="top-product-item"
            key={product.id}
          >

            <div className="product-rank">
              #{index + 1}
            </div>

            <div className="product-details">

              <h4>{product.name}</h4>

              <span>
                Stock : {product.stock}
              </span>

            </div>

            <div className="growth">

              <FaArrowTrendUp />

              <span>{product.status}</span>

            </div>

          </div>

        ))

      )}

    </div>
  );
}

export default TopProducts;