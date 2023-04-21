const path = require("path");
const fs = require("fs");
const upload = require("../middleware/storage");
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

router.post("/upload", upload.single("file"), (req, res) => {
  const file = req.file;
  const uuid = crypto.randomUUID();
  const virtualPath = "mydrive/";
  const date = new Date().toISOString().slice(0, 19).replace("T", " ");

  if (!file) return res.status(400).send("No file uploaded");
  // const query =
  //   "INSERT INTO FILE (id, name, type, size, path, localPath) VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
  // db.query(
  //   query,
  //   [
  //     uuid,
  //     file.originalname,
  //     file.mimetype,
  //     file.size,
  //     virtualPath,
  //     file.path,
  //     date,
  //     date,
  //   ],
  //   (error, result) => {
  //     if (error) res.send("File Upload Unsuccessfull");
  //     console.log(result);
  //   }
  // );

  const filePath = file.path;
  const fileSaveLocation = file.destination;

  // Read the file contents
  fs.readFile(filePath, function (err, data) {
    if (err) return res.status(500).send("Error reading file");

    const newFilePath = path.join(fileSaveLocation, file.originalname);

    fs.writeFile(newFilePath, data, function (err) {
      if (err) return res.status(500).send(err);

      console.log(`File saved: ${newFilePath}`);
      return res.send("File uploaded and saved successfully");
    });
  });
});

module.exports = router;
