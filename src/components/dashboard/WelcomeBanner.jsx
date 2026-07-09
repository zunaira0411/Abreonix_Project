import { FaCalendarAlt } from "react-icons/fa";
import "../../styles/welcome.css";

function WelcomeBanner() {
  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="welcome-banner">
      <div className="welcome-text">
        <h1>👋 Welcome Back, Admin!</h1>
        <p>
          Manage your inventory efficiently and monitor your supply chain.
        </p>
      </div>

      <div className="date-box">
        <FaCalendarAlt />
        <span>{today}</span>
      </div>
    </div>
  );
}

export default WelcomeBanner;