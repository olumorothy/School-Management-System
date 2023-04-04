exports.registerAdmin = (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Admin has been registered" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};

exports.loginAdmin = (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Admin has been logged in" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};

exports.getAllAdmins = (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "All Admins" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};

exports.getAdmin = (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Single admin" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};

exports.updateAdmin = (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin updated" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};

exports.deleteAdmin = (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin has been deleted" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};
exports.suspendTeacher = (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been suspended" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};

exports.unsuspendTeacher = (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been unsuspended" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};

exports.withdrawTeacher = (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been withdrawn" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};

exports.unWithdrawTeacher = (req, res) => {
  try {
    res
      .status(201)
      .json({ status: "succes", data: "Teacher has been unwithdrawn" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};

exports.publishExam = (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin publish exam" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};

exports.unPublishExam = (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "Admin unpublish exam" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};
