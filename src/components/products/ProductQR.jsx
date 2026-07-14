import QRCode from "react-qr-code";
import "../../styles/products.css";

function ProductQR({ product }) {
  if (!product) return null;

  const qrData = JSON.stringify({
    product_id: product.product_id,
    name: product.name,
    category: product.category,
    stock: product.stock,
  });

  return (
    <div className="qr-section">

      <h3>Product QR Code</h3>

      <div className="qr-card">
        <QRCode
          value={qrData}
          size={180}
          bgColor="#FFFFFF"
          fgColor="#000000"
        />
      </div>

      <p className="qr-product-id">
        {product.product_id}
      </p>

    </div>
  );
}

export default ProductQR;