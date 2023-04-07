const express = require("express");
const {
  createAcademicYear,
  getAcademicYears,
} = require("../../controller/academics/academicYear");
const { isAdmin } = require("../../middlewares/isAdmin");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");

const academicYearRouter = express.Router();

academicYearRouter.post("/", isLoggedIn, isAdmin, createAcademicYear);
academicYearRouter.get("/", isLoggedIn, isAdmin, getAcademicYears);
academicYearRouter.get("/:id", isLoggedIn, isAdmin, getAcademicYears);
academicYearRouter.get("/:id", isLoggedIn, isAdmin, getAcademicYears);
academicYearRouter.delete("/:id", isLoggedIn, isAdmin, getAcademicYears);

module.exports = academicYearRouter;
