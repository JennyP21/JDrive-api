const cors = require("cors");
const express = require("express");
const files = require("../routes/files");
const folders = require("../routes/folders");
const account = require("../routes/auth");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use("/api/files", files);
  app.use("/api/folders", folders);
  app.use("/api/account", account);
};
