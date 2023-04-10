const express = require("express");
const {
  createProgram,
  getPrograms,
  getProgram,
  updateProgram,
  deleteProgram,
} = require("../../controller/academics/programs");

const { isAdmin } = require("../../middlewares/isAdmin");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");

const programRouter = express.Router();

programRouter.post("/", isLoggedIn, isAdmin, createProgram);
programRouter.get("/", isLoggedIn, isAdmin, getPrograms);
programRouter.get("/:id", isLoggedIn, isAdmin, getProgram);
programRouter.put("/:id", isLoggedIn, isAdmin, updateProgram);
programRouter.delete("/:id", isLoggedIn, isAdmin, deleteProgram);

module.exports = programRouter;
