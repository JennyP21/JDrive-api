const multer = require("multer");
const config = require("config");

const uploadFile = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, config.get("storagePath"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: uploadFile });
module.exports = upload;
