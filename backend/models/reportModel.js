const pool = require("../config/db");

// Get All Reports
const getAllReports = async () => {
  const result = await pool.query(
    `SELECT
      id,
      report_id,
      name,
      report_date,
      generated_by,
      status
     FROM reports
     ORDER BY id ASC`
  );

  return result.rows;
};

module.exports = {
  getAllReports,
};