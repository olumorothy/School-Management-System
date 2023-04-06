const Admin = require("../../model/Staff/Admin");
const AsyncHandler = require("express-async-handler");
const { generateToken } = require("../../utils/generateToken");
const { verifyToken } = require("../../utils/verifyToken");

exports.registerAdmin = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //check if email exists

  const adminFound = await Admin.findOne({ email });

  if (adminFound) {
    throw new Error("Admin Exists");
  }

  const user = await Admin.create({
    name,
    email,
    password,
  });
  res.status(201).json({ status: "succes", user });
});

exports.loginAdmin = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Admin.findOne({ email });
  if (!user) {
    return res.json({ messagea: "Invalid login credentials" });
  }

  if (user && (await user.verifyPassword(password))) {
    const token = generateToken(user._id);

    const verify = verifyToken(token);

    return res.json({ data: generateToken(user._id), user, verify });
  } else {
    return res.json({ messagea: "Invalid login credentials" });
  }
});

exports.getAllAdmins = (req, res) => {
  try {
    res.status(201).json({ status: "succes", data: "All Admins" });
  } catch (err) {
    res.json({ status: "failed", error: err.message });
  }
};

exports.getAdminProfile = AsyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.userAuth._id).select(
    "-password -role"
  );

  if (!admin) {
    throw new Error("Admin not found");
  } else {
    res.status(200).json({ status: "success", data: admin });
  }
});

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
