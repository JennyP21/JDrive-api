module.exports = function () {
  require("../models/createFolderTable")();
  require("../models/createUserTable")();
  require("../models/createFileTable")();
};
