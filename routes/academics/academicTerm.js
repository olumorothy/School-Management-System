const express = require("express");
const {
  createAcademicTerm,
  getAcademicTerms,
  getAcademicTerm,
  updateAcademicTerm,
  deleteAcademicTerm,
} = require("../../controller/academics/academicTerm");

const { isAdmin } = require("../../middlewares/isAdmin");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");

const academicTermRouter = express.Router();

academicTermRouter.post("/", isLoggedIn, isAdmin, createAcademicTerm);
academicTermRouter.get("/", isLoggedIn, isAdmin, getAcademicTerms);
academicTermRouter.get("/:id", isLoggedIn, isAdmin, getAcademicTerm);
academicTermRouter.put("/:id", isLoggedIn, isAdmin, updateAcademicTerm);
academicTermRouter.delete("/:id", isLoggedIn, isAdmin, deleteAcademicTerm);

module.exports = academicTermRouter;
