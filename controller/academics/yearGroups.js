const AsyncHandler = require("express-async-handler");
const Subject = require("../../model/Academic/Subject");
const Program = require("../../model/Academic/Program");

const Admin = require("../../model/Staff/Admin");
const YearGroup = require("../../model/Academic/YearGroup");

//@desc Create year group
//@route POST /api/v1/years-group/
//@access private
exports.createYearGroup = AsyncHandler(async (req, res) => {
  const { name, academicYear } = req.body;

  const yearGroup = await YearGroup.findOne({ name });

  if (yearGroup) {
    throw new Error("Year Group already exists");
  }

  const yearGroupCreated = await YearGroup.create({
    name,
    academicYear,
    createdBy: req.userAuth._id,
  });

  const admin = await Admin.findById(req.userAuth._id);
  if (!admin) {
    throw new Error("Admin not found");
  }
  //push year group into admin
  admin.yearGroups.push(yearGroupCreated._id);
  await admin.save();

  res.status(201).json({
    status: "success",
    message: "Year Group created successfully",
    data: yearGroupCreated,
  });
});

//@desc get all year groups
//@route GET /api/v1/year-groups
//@access private
exports.getYearGroups = AsyncHandler(async (req, res) => {
  const groups = await YearGroup.find();

  res.status(200).json({
    status: "success",
    message: "Year Groups fetched successfully",
    data: groups,
  });
});

//@desc get single year-group
//@route GET /api/v1/year-group/:id
//@access private
exports.getYearGroup = AsyncHandler(async (req, res) => {
  const group = await YearGroup.findById(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Year Group fetched successfully",
    data: group,
  });
});

//@desc update Year group
//@route PUT /api/v1/year-group/:id
//@access private
exports.updateYearGroup = AsyncHandler(async (req, res) => {
  const { name, academicYear } = req.body;

  const yearGroupFound = await YearGroup.findOne({ name });
  if (yearGroupFound) {
    throw new Error("Year Group already exists");
  }
  const yearGroup = await YearGroup.findByIdAndUpdate(
    req.params.id,
    {
      name,
      academicYear,
      createdBy: req.userAuth._id,
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    status: "success",
    message: "Year group updated successfully",
    data: yearGroup,
  });
});

//@desc delete year group
//@route PUT /api/v1/year-groups/:id
//@access private
exports.deleteYearGroup = AsyncHandler(async (req, res) => {
  const yearGroup = await YearGroup.findByIdAndDelete(req.params.id);

  if (!yearGroup) {
    throw new Error("Year group does not exists");
  }

  res.status(200).json({
    status: "success",
    message: "Year group deleted successfully",
  });
});
