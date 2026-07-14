import { useEffect, useState } from "react";
import axios from "axios";

import Layout from "../components/layout/Layout";
import WelcomeBanner from "../components/dashboard/WelcomeBanner";
import QuickActions from "../components/dashboard/QuickActions";
import DashboardCards from "../components/dashboard/DashboardCards";
import InventoryChart from "../components/dashboard/InventoryChart";
import StockChart from "../components/dashboard/StockChart";
import RecentOrders from "../components/dashboard/RecentOrders";
import LowStock from "../components/dashboard/LowStock";
import RecentActivity from "../components/dashboard/RecentActivity";
import TopProducts from "../components/dashboard/TopProducts";
import InventoryHealth from "../components/dashboard/InventoryHealth";
import ExportPDF from "../components/dashboard/ExportPDF";

import "../styles/dashboard.css";

function Dashboard() {

  const [products, setProducts] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [purchaseOrders, setPurchaseOrders] = useState([]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {

    try {

      const [
        productsRes,
        suppliersRes,
        warehousesRes,
        purchaseOrdersRes,
      ] = await Promise.all([
        axios.get("http://localhost:5000/api/products"),
        axios.get("http://localhost:5000/api/suppliers"),
        axios.get("http://localhost:5000/api/warehouses"),
        axios.get("http://localhost:5000/api/purchase-orders"),
      ]);

      setProducts(productsRes.data);
      setSuppliers(suppliersRes.data);
      setWarehouses(warehousesRes.data);
      setPurchaseOrders(purchaseOrdersRes.data);

    } catch (error) {
      console.log(error);
    }

  };

  return (
    <Layout>

      <div id="dashboard-content">

        <WelcomeBanner />

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <ExportPDF />
        </div>

        <QuickActions />

        <DashboardCards
          products={products}
          suppliers={suppliers}
          warehouses={warehouses}
        />

        <div className="charts-grid">
          <InventoryChart products={products} />
          <StockChart products={products} />
        </div>

        <div className="bottom-grid">
          <RecentOrders orders={purchaseOrders} />
          <LowStock products={products} />
        </div>

        <div className="bottom-grid">
          <RecentActivity />
          <TopProducts products={products} />
        </div>

        <div className="bottom-grid">
          <InventoryHealth products={products} />
        </div>

      </div>

    </Layout>
  );
}

export default Dashboard;