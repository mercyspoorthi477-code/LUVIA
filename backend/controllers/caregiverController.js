const Caregiver = require("../models/Caregiver");

// Add Caregiver
const addCaregiver = async (req, res) => {
  try {
    const {
      userId,
      caregiverName,
      relationship,
      email,
      phone,
      shareCycle,
      shareEmergency,
      shareMood,
    } = req.body;

    // Validate required fields
    if (
      !userId ||
      !caregiverName ||
      !relationship ||
      !email ||
      !phone
    ) {
      return res.status(400).json({
        message: "All required fields must be provided.",
      });
    }

    const caregiver = await Caregiver.create({
      userId,
      caregiverName,
      relationship,
      email,
      phone,
      shareCycle,
      shareEmergency,
      shareMood,
    });

    res.status(201).json({
      message: "Caregiver added successfully.",
      caregiver,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Caregivers
const getCaregivers = async (req, res) => {
  try {
    const caregivers = await Caregiver.find();

    res.status(200).json(caregivers);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Caregiver
const updateCaregiver = async (req, res) => {
  try {
    const caregiver = await Caregiver.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!caregiver) {
      return res.status(404).json({
        message: "Caregiver not found.",
      });
    }

    res.status(200).json({
      message: "Caregiver updated successfully.",
      caregiver,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Caregiver
const deleteCaregiver = async (req, res) => {
  try {
    const caregiver = await Caregiver.findByIdAndDelete(req.params.id);

    if (!caregiver) {
      return res.status(404).json({
        message: "Caregiver not found.",
      });
    }

    res.status(200).json({
      message: "Caregiver deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addCaregiver,
  getCaregivers,
  updateCaregiver,
  deleteCaregiver,
};