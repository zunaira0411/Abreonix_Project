const profileModel = require("../models/profileModel");

// GET Profile
const getProfile = async (req, res) => {
  try {
    const user =
      await profileModel.getProfile();

    res.json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// UPDATE Profile
const updateProfile = async (
  req,
  res
) => {
  try {
    const user =
      await profileModel.updateProfile(
        req.params.id,
        req.body
      );

    res.json(user);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getProfile,
  updateProfile,
};