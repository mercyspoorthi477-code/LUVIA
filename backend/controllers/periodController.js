const Period = require("../models/Period");

// Add Period Record
const addPeriod = async (req, res) => {
  try {
    const {
      user,
      startDate,
      endDate,
      mood,
      symptoms,
      flow,
      notes,
    } = req.body;

    const newPeriod = await Period.create({
      user,
      startDate,
      endDate,
      mood,
      symptoms,
      flow,
      notes,
    });

    res.status(201).json({
      message: "Period record added successfully",
      period: newPeriod,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get All Period Records of a User
const getPeriods = async (req, res) => {
  try {
    const periods = await Period.find({
      user: req.params.userId,
    }).sort({ startDate: -1 });

    res.status(200).json(periods);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  addPeriod,
  getPeriods,
};