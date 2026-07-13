import { Link } from "react-router-dom";

import "../../styles/hero.css";

import heroImage from "../../assets/hero-image.png";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          📦 Smart Inventory Tracker
        </span>

        <h1>
          Inventory Management
          <br />
          Made Simple
        </h1>

        <p>
          Manage Products, Suppliers, Warehouses,
          Purchase Orders, Inventory and Reports
          from one modern dashboard.
        </p>

        <div className="hero-buttons">

          <Link
            to="/dashboard"
            className="primary-btn"
          >
            Explore Dashboard
          </Link>

          <Link
            to="/login"
            className="secondary-btn"
          >
            Login
          </Link>

        </div>

      </div>

      <div className="hero-right">

        <img
          src={heroImage}
          alt="Smart Inventory Dashboard"
        />

      </div>

    </section>
  );
}

export default Hero;