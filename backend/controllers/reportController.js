const reportModel = require("../models/reportModel");

// Get All Reports
const getReports = async (req, res) => {
  try {
    const reports =
      await reportModel.getAllReports();

    res.json(reports);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getReports,
};