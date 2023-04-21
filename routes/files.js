const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const db = require("../startup/db");

router.get("/", (req, res) => {
  const getFiles = "SELECT * FROM FILES";
  db.query(getFiles, function (error, result) {
    if (error) throw error;
    res.send(result);
  });
});

module.exports = router;
