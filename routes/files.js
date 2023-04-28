const upload = require("../middleware/uploadFile");
const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const db = require("../startup/db");
const removeFile = require("../middleware/removeFile");
const multer = require("multer");

// Getting Files
router.get("/", (req, res) => {
  const getFiles = "SELECT * FROM FILES";
  db.query(getFiles, function (error, result) {
    if (error) throw error;
    res.send(result);
  });
});

// Getting single file
router.get("/:id", (req, res) => {
  const getFile = "SELECT * FROM FILES WHERE id = ?";
  const id = req.params.id;
  db.query(getFile, id, function (error, result) {
    if (error) throw error;
    res.send(result);
  });
});

// Uploading files
router.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  const uuid = crypto.randomUUID();
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");

  if (!file) return res.status(400).send("No file uploaded");
  const insertFiles =
    "INSERT INTO FILES (id, name, type, size, folder, localPath, created, modified, owner) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    insertFiles,
    [
      uuid,
      file.originalname,
      file.mimetype,
      file.size,
      req.body.folder,
      file.path,
      date,
      date,
      req.body.owner,
    ],
    (error, result) => {
      if (error) console.log(error.message);
    }
  );
  return res.send("File uploaded and saved successfully");
});

// Deleting file
router.delete("/delete/:id", removeFile, (req, res) => {
  const deleteFile = "DELETE FROM FILES WHERE id = ?";
  const id = req.params.id;
  db.query(deleteFile, id, function (error, result) {
    if (error) throw error;
    res.send("File deleted successfully");
  });
});

module.exports = router;
