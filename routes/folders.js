const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const db = require("../startup/db");

// Creating folder
router.post("/create", (req, res) => {
  const currentFolder = req.body.currentFolder;
  const folderName = req.body.folderName;
  const id = crypto.randomUUID();
  const createFolder =
    "INSERT INTO FOLDERS(id, name, parentFolder) VALUES(?, ?, ?)";

  db.query(createFolder, [id, folderName, currentFolder], (error, results) => {
    if (error) return error;
  });
});

// Deleting folder
router.get("/delete", (req, res) => {});

module.exports = router;
