module.exports = function () {
  require("../models/createFileTable")();
  require("../models/createUserTable")();
  require("../models/createFolderTable")();
};
