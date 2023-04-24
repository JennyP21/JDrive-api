const fs = require("fs");
const { promisify } = require("util");
const db = require("../startup/db");

const unlinkAsync = promisify(fs.unlink);

module.exports = removeFile = (req, res, next) => {
  const id = req.params.id;
  const getFile = "SELECT * FROM FILES WHERE id = ?";
  db.query(getFile, id, (error, result) => {
    const filePath = result[0]["localPath"];
    unlinkAsync(filePath);
  });
  next();
};
