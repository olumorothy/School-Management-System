const express = require("express");
const morgan = require("morgan");
const { globalErrHandler } = require("../middlewares/errorHandler");
const adminRouter = require("../routes/staff/adminRouter");

const app = express();

//middleware
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/v1/admins", adminRouter);

//Error middleware
app.use(globalErrHandler);

module.exports = app;
