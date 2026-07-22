const express = require("express");

const router = express.Router();

const {
  addCaregiver,
  getCaregivers,
  updateCaregiver,
  deleteCaregiver,
} = require("../controllers/caregiverController");

// Add Caregiver
router.post("/add", addCaregiver);

// Get All Caregivers
router.get("/", getCaregivers);

// Update Caregiver
router.put("/update/:id", updateCaregiver);

// Delete Caregiver
router.delete("/delete/:id", deleteCaregiver);

module.exports = router;