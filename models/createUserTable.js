const db = require("../startup/db");

module.exports = function () {
  let accountTable = `
  CREATE TABLE IF NOT EXISTS jdrive.accounts (
    id CHAR(36) NOT NULL,
    name VARCHAR(64) NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE,
    UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE);
`;

  db.query(accountTable, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
};
