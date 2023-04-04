const express = require("express");
const morgan = require("morgan");
const adminRouter = require("../routes/staff/adminRouter");

const app = express();

//middleware
app.use(morgan("dev"));

app.use("/api/v1/admins", adminRouter);

// app.get("/api/v1/admins", );

// app.get("/api/v1/admins/:id",);

// app.put("/api/v1/admins/:id",);
// app.delete("/api/v1/admins/:id", );

// //admin suspending a teacher by id
// app.put("/api/v1/admins/suspend/teacher/:id", );

// //admin unsuspending a teacher
// app.put("/api/v1/admins/unsuspend/teacher/:id", );

// //admin withdrawing teacher
// app.put("/api/v1/admins/withdraw/teacher/:id", );

// //admin unwithdrawing teacher
// app.put("/api/v1/admins/unwithdraw/teacher/:id", );

// //admin publish exam results

// app.put("/api/v1/admins/publish/exam/:id", );
// //admin unpublish exam result
// app.put("/api/v1/admins/unpublish/exam/:id", );
module.exports = app;
