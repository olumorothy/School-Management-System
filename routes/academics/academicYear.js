const express = require("express");
const {
  createAcademicYear,
  getAcademicYears,
  getAcademicYear,
  updateAcademicYear,
} = require("../../controller/academics/academicYear");
const { isAdmin } = require("../../middlewares/isAdmin");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");

const academicYearRouter = express.Router();

academicYearRouter.post("/", isLoggedIn, isAdmin, createAcademicYear);
academicYearRouter.get("/", isLoggedIn, isAdmin, getAcademicYears);
academicYearRouter.get("/:id", isLoggedIn, isAdmin, getAcademicYear);
academicYearRouter.put("/:id", isLoggedIn, isAdmin, updateAcademicYear);
academicYearRouter.delete("/:id", isLoggedIn, isAdmin, getAcademicYears);

module.exports = academicYearRouter;
