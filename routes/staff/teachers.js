const express = require("express");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");
const { isAdmin } = require("../../middlewares/isAdmin");
const {
  adminRegisterTeacher,
  loginTeacher,
  getAllTeachersAdmin,
  getTeacherByAdmin,
  getTeacherProfile,
  TeacherUpdateProfile,
  AdminUpdateTeacher,
} = require("../../controller/staff/teachersController");
const isTeacherLogin = require("../../middlewares/isTeacherLogin");
const isTeacher = require("../../middlewares/isTeacher");

const teachersRouter = express.Router();

teachersRouter.post(
  "/admin/register",
  isLoggedIn,
  isAdmin,
  adminRegisterTeacher
);
teachersRouter.post("/login", loginTeacher);
teachersRouter.get("/admin", isLoggedIn, isAdmin, getAllTeachersAdmin);
teachersRouter.get("/:teacherID/admin", isLoggedIn, isAdmin, getTeacherByAdmin);
teachersRouter.get("/profile", isTeacherLogin, isTeacher, getTeacherProfile);
teachersRouter.put(
  "/:teacherID/update",
  isTeacherLogin,
  isTeacher,
  TeacherUpdateProfile
);
teachersRouter.put(
  "/:teacherID/update/admin",
  isLoggedIn,
  isAdmin,
  AdminUpdateTeacher
);
module.exports = teachersRouter;
