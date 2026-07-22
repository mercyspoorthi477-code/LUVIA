const express = require("express");

const router = express.Router();

const { chatWithLuna } = require("../controllers/chatbotController");

router.post("/", chatWithLuna);

module.exports = router;