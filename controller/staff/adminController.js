const Admin = require("../../model/Staff/Admin");
const bcrypt = require("bcryptjs");
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

  //hashpassword
  const salt = await bcrypt.genSalt(10);
  passwordHashed = await bcrypt.hash(password, salt);

  const user = await Admin.create({
    name,
    email,
    password: passwordHashed,
  });
  res.status(201).json({
    status: "succes",
    data: user,
    message: "Admin registered successfully",
  });
});

exports.loginAdmin = AsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await Admin.findOne({ email });
  if (!user) {
    return res.json({ messagea: "Email does not exist!" });
  }

  const isMatched = await bcrypt.compare(password, user.password);

  if (!isMatched) {
    return res.json({ message: "Invalid login credentials" });
  } else {
    return res.json({
      data: generateToken(user._id),
      message: "Admin logged in successfully",
    });
  }
});

exports.getAllAdmins = AsyncHandler(async (req, res) => {
  const admins = await Admin.find();
  res.status(200).json({
    status: "success",
    message: "Admin fetched successfully",
    data: admins,
  });
});

exports.getAdminProfile = AsyncHandler(async (req, res) => {
  const admin = await Admin.findById(req.userAuth._id).select(
    "-password -role"
  );

  if (!admin) {
    throw new Error("Admin not found");
  } else {
    res.status(200).json({
      status: "success",
      data: admin,
      message: "Admin profile fecthed successfully",
    });
  }
});

exports.updateAdmin = AsyncHandler(async (req, res) => {
  const { email, name, password } = req.body;

  const emailExist = await Admin.findOne({ email });

  if (emailExist) {
    throw new Error("Email already exists/is taken");
  }
  //hashing the password
  const salt = await bcrypt.genSalt(10);
  passwordHashed = await bcrypt.hash(password, salt);

  if (password) {
    const admin = await Admin.findByIdAndUpdate(
      req.userAuth._id,
      {
        email,
        password: passwordHashed,
        name,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: admin,
      message: "admin updated successfully",
    });
  } else {
    const admin = await Admin.findByIdAndUpdate(
      req.userAuth._id,
      {
        email,
        name,
      },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: admin,
      message: "admin updated successfully",
    });
  }
});

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
