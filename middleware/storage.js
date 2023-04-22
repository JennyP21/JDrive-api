const multer = require("multer");
const config = require("config");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.get("storagePath"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
