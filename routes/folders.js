const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const db = require("../startup/db");

// Creating folder
router.post("/create", upload.single("file"), (req, res) => {});

// Deleting folder
router.get("/delete/:id", removeFile, (req, res) => {});

module.exports = router;
