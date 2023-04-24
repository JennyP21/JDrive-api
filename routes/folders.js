const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const db = require("../startup/db");

// Creating folder
router.post("/create", (req, res) => {});

// Deleting folder
router.get("/delete", (req, res) => {});

module.exports = router;
