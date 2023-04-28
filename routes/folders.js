const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const db = require("../startup/db");

// Creating folder
router.post("/create", (req, res) => {
  const id = crypto.randomUUID();
  const folderName = req.body.folderName;
  const currentFolder = req.body.currentFolder;
  const folderOwner = req.body.owner;
  const createFolder =
    "INSERT INTO FOLDERS(id, name, parentFolder, folderOwner) VALUES(?, ?, ?, ?)";
  db.query(
    createFolder,
    [id, folderName, currentFolder, folderOwner],
    (error, results) => {
      if (error) return error;
      console.log(results);
    }
  );
  res.send("Folder Created Successfully");
});

// Deleting folder
router.get("/delete", (req, res) => {});

module.exports = router;
