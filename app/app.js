const express = require("express");
const morgan = require("morgan");
const {
  globalErrHandler,
  notFoundErr,
} = require("../middlewares/errorHandler");
const academicTermRouter = require("../routes/academics/academicTerm");
const academicYearRouter = require("../routes/academics/academicYear");
const classLevelRouter = require("../routes/academics/classLevel");
const adminRouter = require("../routes/staff/adminRouter");

const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/academic-years", academicYearRouter);
app.use("/api/v1/academic-terms", academicTermRouter);
app.use("/api/v1/class-levels", classLevelRouter);
//Error middleware
app.use(notFoundErr);
app.use(globalErrHandler);

module.exports = app;
