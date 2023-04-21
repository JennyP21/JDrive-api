const express = require("express");
const files = require("../routes/files");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/files", files);
};
