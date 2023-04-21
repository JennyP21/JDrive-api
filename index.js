const cors = require("cors");
const config = require("config");
const express = require("express");
const app = express();

app.use(cors());
const db = require("./startup/db");
require("./startup/routes")(app);

const port = process.env.PORT || config.get("port");
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = db;
