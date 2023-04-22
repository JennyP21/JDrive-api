const db = require("../startup/db");

module.exports = function () {
  let fileTable = `
CREATE TABLE IF NOT EXISTS files(
    id CHAR(36) NOT NULL,
    name longtext,
    type tinytext,
    size int DEFAULT NULL,
    path longtext,
    localPath longtext,
    created date DEFAULT NULL,
    modified date DEFAULT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY id_UNIQUE (id)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
`;

  db.query(fileTable, function (err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
};
