const express = require("express");

const router = express.Router();

const {
  addPeriod,
  getPeriods,
} = require("../controllers/periodController");

router.post("/", addPeriod);

router.get("/:userId", getPeriods);

module.exports = router;