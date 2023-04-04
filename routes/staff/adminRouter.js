const express = require("express");
const {
  registerAdmin,
  loginAdmin,
  getAdmin,
  getAllAdmins,
  updateAdmin,
  deleteAdmin,
  suspendTeacher,
  unsuspendTeacher,
  withdrawTeacher,
  unWithdrawTeacher,
  publishExam,
  unPublishExam,
} = require("../../controller/staff/adminController");
const { isLoggedIn } = require("../../middlewares/isLoggedIn");

const adminRouter = express.Router();

adminRouter.post("/register", registerAdmin);

adminRouter.post("/login", loginAdmin);

adminRouter.get("/", getAllAdmins);

adminRouter.get("/:id", isLoggedIn, getAdmin);

adminRouter.put("/:id", updateAdmin);

adminRouter.delete("/:id", deleteAdmin);

adminRouter.put("/suspend/teacher/:id", suspendTeacher);

adminRouter.put("/unsuspend/teacher/:id", unsuspendTeacher);

adminRouter.put("/withdraw/teacher/:id", withdrawTeacher);

adminRouter.put("/unwithdraw/teacher/:id", unWithdrawTeacher);

adminRouter.put("/publish/exam/:id", publishExam);

adminRouter.put("/unpublish/exam/:id", unPublishExam);

module.exports = adminRouter;
