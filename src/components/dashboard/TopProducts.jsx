import { FaArrowTrendUp } from "react-icons/fa6";
import "../../styles/topproducts.css";

const products = [
  {
    id: 1,
    name: "Dell Laptop",
    sold: 145,
    growth: "+18%",
  },
  {
    id: 2,
    name: "Wireless Mouse",
    sold: 120,
    growth: "+12%",
  },
  {
    id: 3,
    name: "HP Printer",
    sold: 95,
    growth: "+8%",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    sold: 82,
    growth: "+5%",
  },
];

function TopProducts() {
  return (
    <div className="top-products-card">
      <div className="top-products-header">
        <h2>Top Selling Products</h2>
        <p>Best performers this month</p>
      </div>

      {products.map((product) => (
        <div className="top-product-item" key={product.id}>
          <div className="product-rank">
            #{product.id}
          </div>

          <div className="product-details">
            <h4>{product.name}</h4>
            <span>{product.sold} Sold</span>
          </div>

          <div className="growth">
            <FaArrowTrendUp />
            <span>{product.growth}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopProducts;