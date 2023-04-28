const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const db = require("../startup/db");

// Creating Account
router.post("/register", (req, res) => {
  const ownerID = crypto.randomUUID();
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const createAccount =
    "INSERT INTO ACCOUNTS(id, name, email, password) VALUES(?, ?, ?, ?)";

  db.query(
    createAccount,
    [ownerID, name, email, password],
    (error, results) => {
      if (error) return error;
    }
  );

  const folderId = crypto.randomUUID();
  const defaultFolderName = "mydrive";

  const createDefaultFolder =
    "INSERT INTO FOLDERS(id, name, folderOwner) VALUES(?, ?, ?)";

  db.query(
    createDefaultFolder,
    [folderId, defaultFolderName, ownerID],
    (error, results) => {
      if (error) return error;
    }
  );

  res.send("Account created successfully");
});

router.get("/", (req, res) => {
  const getAccounts = "SELECT * FROM accounts";
  db.query(getAccounts, function (error, result) {
    if (error) throw error;
    res.send(result);
  });
});

module.exports = router;
