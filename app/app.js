const express = require("express");
const morgan = require("morgan");

const app = express();

//middleware
app.use(morgan("dev"));

app.post("/api/v1/admins/register", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Admin has been registered" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

app.post("/api/v1/admins/login", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Admin has been logged in" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});
app.get("/api/v1/admins", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "All Admins" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

app.get("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Single admin" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

app.put("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin updated" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});
app.delete("/api/v1/admins/:id", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin has been deleted" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

//admin suspending a teacher by id
app.put("/api/v1/admins/suspend/teacher/:id", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been suspended" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

//admin unsuspending a teacher
app.put("/api/v1/admins/unsuspend/teacher/:id", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been unsuspended" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

//admin withdrawing teacher
app.put("/api/v1/admins/withdraw/teacher/:id", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been withdrawn" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

//admin unwithdrawing teacher
app.put("/api/v1/admins/unwithdraw/teacher/:id", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been unwithdrawn" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

//admin publish exam results

app.put("/api/v1/admins/publish/exam/:id", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin publish exam" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});
//admin unpublish exam result
app.put("/api/v1/admins/unpublish/exam/:id", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin unpublish exam" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});
module.exports = app;
