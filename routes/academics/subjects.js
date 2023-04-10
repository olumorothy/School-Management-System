const express = require("express");
const {
  createSubject,
  getSubjects,
  getSubject,
  updateSubject,
  deleteSubject,
} = require("../../controller/academics/subjects");

const { isAdmin } = require("../../middlewares/isAdmin");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");

const subjectRouter = express.Router();

subjectRouter.post("/:programID", isLoggedIn, isAdmin, createSubject);
subjectRouter.get("/", isLoggedIn, isAdmin, getSubjects);
subjectRouter.get("/:id", isLoggedIn, isAdmin, getSubject);
subjectRouter.put("/:id", isLoggedIn, isAdmin, updateSubject);
subjectRouter.delete("/:id", isLoggedIn, isAdmin, deleteSubject);

module.exports = subjectRouter;
