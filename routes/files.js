const upload = require("../startup/storage");
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

router.post("/upload", upload.single(), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("File Uploaded Successfully");
});

module.exports = router;
