const db = require("../startup/db");

module.exports = function () {
  let accountTable = `
  CREATE TABLE folders (
    id char(36) NOT NULL,
    name varchar(64) DEFAULT NULL,
    parentFolder char(36) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY id_UNIQUE (id),
    CONSTRAINT parentFolder FOREIGN KEY (id) REFERENCES folders (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
`;

  db.query(accountTable, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
};
