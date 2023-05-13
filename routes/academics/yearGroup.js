const express = require("express");
const { isAdmin } = require("../../middlewares/isAdmin");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");
const {
  createYearGroup,
  getYearGroups,
  getYearGroup,
  updateYearGroup,
  deleteYearGroup,
} = require("../../controller/academics/yearGroups");

const yearGroupRouter = express.Router();

yearGroupRouter.post("/", isLoggedIn, isAdmin, createYearGroup);
yearGroupRouter.get("/", isLoggedIn, isAdmin, getYearGroups);
yearGroupRouter.get("/:id", isLoggedIn, isAdmin, getYearGroup);
yearGroupRouter.put("/:id", isLoggedIn, isAdmin, updateYearGroup);
yearGroupRouter.delete("/:id", isLoggedIn, isAdmin, deleteYearGroup);

module.exports = yearGroupRouter;
