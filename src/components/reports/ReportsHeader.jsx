import { FaSearch, FaDownload } from "react-icons/fa";

function ReportsHeader({
  searchTerm,
  setSearchTerm,
  onExport,
}) {
  return (
    <div className="reports-header">

      <div>
        <h1>Reports</h1>
        <p>Analyze inventory performance and business reports</p>
      </div>

      <div className="reports-actions">

        <div className="search-box-reports">

          <FaSearch />

          <input
            type="text"
            placeholder="Search Reports..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />

        </div>

        <button
          className="export-report-btn"
          onClick={onExport}
        >
          <FaDownload />
          Export Report
        </button>

      </div>

    </div>
  );
}

export default ReportsHeader;