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

        <DashboardCards />

        <div className="charts-grid">
          <InventoryChart />
          <StockChart />
        </div>

        <div className="bottom-grid">
          <RecentOrders />
          <LowStock />
        </div>

        <div className="bottom-grid">
          <RecentActivity />
          <TopProducts />
        </div>

        <div className="bottom-grid">
          <InventoryHealth />
        </div>

      </div>

    </Layout>
  );
}

export default Dashboard;