const cors = require("cors");
const express = require("express");
const files = require("../routes/files");

module.exports = function (app) {
  app.use(cors());
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use("/api/files", files);
};
