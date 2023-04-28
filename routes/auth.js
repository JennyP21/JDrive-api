const crypto = require("crypto");
const express = require("express");
const router = express.Router();
const db = require("../startup/db");

// Creating Account
router.post("/register", (req, res) => {
  const id = crypto.randomUUID();
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const createAccount =
    "INSERT INTO ACCOUNTS(id, name, email, password) VALUES(?, ?, ?, ?)";

  db.query(createAccount, [id, name, email, password], (error, results) => {
    if (error) return error;
    console.log(results);
  });
  res.send("Account create successfully");
});

router.get("/", (req, res) => {
  const getAccounts = "SELECT * FROM accounts";
  db.query(getAccounts, function (error, result) {
    if (error) throw error;
    res.send(result);
  });
});

module.exports = router;
