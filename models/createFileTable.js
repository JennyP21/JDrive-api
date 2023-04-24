const db = require("../startup/db");

module.exports = function () {
  let fileTable = `
  CREATE TABLE IF NOT EXISTS files (
    id char(36) NOT NULL,
    name longtext,
    type tinytext,
    size int DEFAULT NULL,
    folder char(36) NOT NULL,
    path longtext,
    localPath longtext,
    created date DEFAULT NULL,
    modified date DEFAULT NULL,
    owner char(36) DEFAULT NULL,
    trashed tinyint DEFAULT '0',
    PRIMARY KEY (id),
    UNIQUE KEY id_UNIQUE (id),
    KEY owner_idx (owner),
    CONSTRAINT folder FOREIGN KEY (id) REFERENCES folders (id),
    CONSTRAINT owner FOREIGN KEY (owner) REFERENCES accounts (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
`;

  db.query(fileTable, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
};
