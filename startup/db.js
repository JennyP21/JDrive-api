const mysql = require("mysql");
const config = require("config");

const dbConfig = config.get("db");
const db = mysql.createPool(dbConfig);
db.getConnection(function (error) {
  if (error) throw error;
  console.log("Connected!");
});

module.exports = db;
