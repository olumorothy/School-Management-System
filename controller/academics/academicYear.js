const AsyncHandler = require("express-async-handler");
const AcademicYear = require("../../model/Academic/AcademicYear");

//@desc Create academic year
//@route POST /api/v1/academic-years
//@access private
exports.createAcademicYear = AsyncHandler(async (req, res) => {
  const { name, fromYear, toYear } = req.body;

  const academicYear = await AcademicYear.findOne({ name });

  if (academicYear) {
    throw new Error("Academic year already exists");
  }

  const academicYearCreated = await AcademicYear.create({
    name,
    fromYear,
    toYear,
    createdBy: req.userAuth._id,
  });
  res.status(200).json({
    status: "success",
    message: "Academic year created successfully",
    data: academicYearCreated,
  });
});

//@desc get all academic years
//@route GET /api/v1/academic-years
//@access private
exports.getAcademicYears = AsyncHandler(async (req, res) => {
  const academicYears = await AcademicYear.find();

  res.status(200).json({
    status: "success",
    message: "Academic years fetched successfully",
    data: academicYears,
  });
});

//@desc get single academic year
//@route GET /api/v1/academic-year/:id
//@access private
exports.getAcademicYear = AsyncHandler(async (req, res) => {
  const academicYear = await AcademicYear.findById(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Academic year fetched successfully",
    data: academicYear,
  });
});

//@desc update academic year
//@route PUT /api/v1/academic-years/:id
//@access private
exports.updateAcademicYear = AsyncHandler(async (req, res) => {
  const { name, fromYear, toYear } = req.body;

  const academicYearFound = await AcademicYear.findOne({ name });
  if (academicYearFound) {
    throw new Error("Acadmic year already exists");
  }
  const academicYear = await AcademicYear.findByIdAndUpdate(
    req.params.id,
    {
      name,
      fromYear,
      toYear,
      createdBy: req.userAuth._id,
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    status: "success",
    message: "Academic year updated successfully",
    data: academicYear,
  });
});

//@desc delete academic year
//@route PUT /api/v1/academic-years/:id
//@access private
exports.deleteAcademicYear = AsyncHandler(async (req, res) => {
  const academicYearFound = await AcademicYear.findByIdAndDelete(req.params.id);

  if (!academicYearFound) {
    throw new Error("Acadmic year does not exists");
  }

  res.status(200).json({
    status: "success",
    message: "Academic year deleted successfully",
  });
});
