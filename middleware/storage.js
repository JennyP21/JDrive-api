const fs = require("fs");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "C:\\jdrive-storage");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
