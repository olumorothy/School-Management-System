const express = require("express");
const {
  createClasslevel,
  getClassLevels,
  getClassLevel,
  updateClassLevel,
  deleteClassLevel,
} = require("../../controller/academics/ClassLevel");

const { isAdmin } = require("../../middlewares/isAdmin");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");

const classLevelRouter = express.Router();

classLevelRouter.post("/", isLoggedIn, isAdmin, createClasslevel);
classLevelRouter.get("/", isLoggedIn, isAdmin, getClassLevels);
classLevelRouter.get("/:id", isLoggedIn, isAdmin, getClassLevel);
classLevelRouter.put("/:id", isLoggedIn, isAdmin, updateClassLevel);
classLevelRouter.delete("/:id", isLoggedIn, isAdmin, deleteClassLevel);

module.exports = classLevelRouter;
