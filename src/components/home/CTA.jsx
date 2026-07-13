import { Link } from "react-router-dom";

import "../../styles/cta.css";

function CTA() {
  return (
    <section className="cta-section">

      <h2>Ready to Manage Your Inventory?</h2>

      <p>
        Start using Smart Inventory Tracker today and simplify your
        inventory management process.
      </p>

      <Link to="/login" className="cta-btn">
        Get Started
      </Link>

    </section>
  );
}

export default CTA;