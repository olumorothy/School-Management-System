const express = require("express");

const adminRouter = express.Router();

adminRouter.post("/register", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Admin has been registered" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

adminRouter.post("/login", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Admin has been logged in" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

adminRouter.get("/", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "All Admins" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

adminRouter.get("/:id", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Single admin" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

adminRouter.put("/:id", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin updated" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

adminRouter.delete("/:id", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin has been deleted" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

adminRouter.put("/suspend/teacher/:id", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been suspended" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

adminRouter.put("/unsuspend/teacher/:id", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been unsuspended" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

adminRouter.put("/withdraw/teacher/:id", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been withdrawn" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

adminRouter.put("/unwithdraw/teacher/:id", (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been unwithdrawn" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

adminRouter.put("/publish/exam/:id", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin publish exam" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

adminRouter.put("/unpublish/exam/:id", (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin unpublish exam" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
});

module.exports = adminRouter;
