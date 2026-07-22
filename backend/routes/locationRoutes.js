const express = require("express");

const router = express.Router();

const {
  getHospitals,
  getMedicalStores,
  getWashrooms,
} = require("../controllers/locationController");

router.get("/hospitals", getHospitals);

router.get("/medicalstores", getMedicalStores);

router.get("/washrooms", getWashrooms);

module.exports = router;