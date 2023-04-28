const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const db = require("../startup/db");

// Get Folder
router.get("/", (req, res) => {
  const getFolder = "SELECT * FROM FOLDERS";
  db.query(getFolder, (error, results) => {
    if (error) res.send("Something went wrong").status(500);
    res.send(results);
  });
});

// Get Root Folder
router.get("/mydrive", (req, res) => {
  const getFolder = "SELECT * FROM FOLDERS WHERE parentFolder IS NULL";
  db.query(getFolder, (error, results) => {
    if (error) res.send("Something went wrong").status(500);
    res.send(results);
  });
});

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
